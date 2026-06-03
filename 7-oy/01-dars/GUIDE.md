# Fullstack Auth Loyiha — Qo'llanma

**Stack:** Node.js + Express + argon2 + JWT (backend) | React 19 + Zustand + React Router DOM 7 (frontend) | pnpm monorepo

---

## Loyiha Strukturasi

```
auth-project/
  backend/
    src/
      controllers/auth.controller.js
      middleware/auth.middleware.js
      models/users.model.js
      routes/auth.routes.js
      server.js
    .env
    package.json
  frontend/
    src/
      api/auth.js
      store/authStore.js
      components/ProtectedRoute.jsx
      pages/Login.jsx
      pages/Register.jsx
      pages/Home.jsx
      styles/auth.css
      App.jsx
      main.jsx
    .env
    package.json
  pnpm-workspace.yaml
  swagger.yaml
  package.json
```

---

## 1. Monorepo Sozlash

**`package.json` (root):**
```json
{
  "name": "auth-project",
  "private": true,
  "workspaces": ["backend", "frontend"],
  "scripts": {
    "dev:backend": "pnpm --filter backend dev",
    "dev:frontend": "pnpm --filter frontend dev"
  },
  "type": "module"
}
```

**`pnpm-workspace.yaml`:**
```yaml
packages:
  - 'backend'
  - 'frontend'
```

> ⚠️ pnpm `package.json`'dagi `workspaces` fieldni o'qimaydi — `pnpm-workspace.yaml` shart!
> ⚠️ pnpm filter: `--filter <name>` ishlatiladi, `--workspace=` emas.

---

## 2. Backend

### O'rnatish
```bash
cd backend
pnpm init
pnpm add express argon2 jsonwebtoken cors
pnpm add -D nodemon
```

**`backend/package.json`:**
```json
{
  "name": "backend",
  "type": "module",
  "scripts": {
    "dev": "node --env-file=.env --watch src/server.js"
  }
}
```

> ⚠️ `node --env-file` faqat Node 20.6+ da ishlaydi. `dotenv` paketi kerak emas.
> ⚠️ `--watch` nodemon o'rnini bosadi — fayl o'zgarganda qayta ishga tushiradi.

**`backend/.env`:**
```
PORT=3000
JWT_SECRET=supersecretkey123
```

### Endpointlar
| Method | URL | Auth | Tavsif |
|--------|-----|------|--------|
| POST | /auth/register | — | argon2 xeshlash, user saqlash |
| POST | /auth/login | — | argon2 tekshirish, JWT qaytarish |
| GET | /auth/profile | Bearer | User ma'lumotlari |
| POST | /auth/logout | Bearer | Token blacklist |

### `src/models/users.model.js`
```js
const users = [];
let nextId = 1;

export const findByEmail = (email) => users.find(u => u.email === email);
export const findById = (id) => users.find(u => u.id === id);
export const createUser = (name, email, hashedPassword) => {
  const user = { id: nextId++, name, email, password: hashedPassword };
  users.push(user);
  return user;
};
```
> ⚠️ In-memory — server restart bo'lsa userlar o'chadi.

### `src/middleware/auth.middleware.js`
```js
import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer '))
    return res.status(401).json({ message: 'Token yo\'q' });

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ message: 'Token xato yoki muddati o\'tgan' });
  }
};
```

### `src/controllers/auth.controller.js`
```js
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import { createUser, findByEmail, findById } from '../models/users.model.js';

const tokenBlacklist = new Set();

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(400).json({ message: 'Barcha maydonlar to\'ldirilishi shart' });
  if (findByEmail(email))
    return res.status(400).json({ message: 'Bu email allaqachon ro\'yxatdan o\'tgan' });

  const hashedPassword = await argon2.hash(password);
  const user = createUser(name, email, hashedPassword);
  res.status(201).json({ message: 'Muvaffaqiyatli ro\'yxatdan o\'tildi', id: user.id });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = findByEmail(email);
  if (!user || !(await argon2.verify(user.password, password)))
    return res.status(401).json({ message: 'Email yoki parol xato' });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' });
  res.json({ token });
};

export const getMe = (req, res) => {
  const user = findById(req.user.id);
  if (!user) return res.status(404).json({ message: 'Foydalanuvchi topilmadi' });
  res.json({ id: user.id, name: user.name, email: user.email });
};

export const logout = (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  tokenBlacklist.add(token);
  res.json({ message: 'Muvaffaqiyatli chiqildi' });
};
```

### `src/routes/auth.routes.js`
```js
import { Router } from 'express';
import { register, login, getMe, logout } from '../controllers/auth.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', authMiddleware, getMe);
router.post('/logout', authMiddleware, logout);

export default router;
```

### `src/server.js`
```js
import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server ${PORT} portda ishlamoqda`));
```

---

## 3. Frontend

### O'rnatish
```bash
pnpm create vite frontend -- --template react
cd frontend
pnpm install
pnpm add react-router-dom zustand
```

**`frontend/.env`:**
```
VITE_API_URL=http://localhost:3000
```

### Papka konvensiyasi
- Papkalar: kichik harf (`api/`, `store/`, `pages/`, `components/`)
- React komponent fayllar: katta harf (`Login.jsx`, `Home.jsx`)

### `src/api/auth.js`
```js
const API = import.meta.env.VITE_API_URL;

export const register = (name, email, password) =>
  fetch(`${API}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  }).then(res => res.json());

export const login = (email, password) =>
  fetch(`${API}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  }).then(res => res.json());

export const getMe = (token) =>
  fetch(`${API}/auth/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  }).then(res => res.json());

export const logout = (token) =>
  fetch(`${API}/auth/logout`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
  }).then(res => res.json());
```

### `src/store/authStore.js`
```js
import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  token: localStorage.getItem('token') || null,
  user: null,

  setToken: (token) => {
    localStorage.setItem('token', token);
    set({ token });
  },

  setUser: (user) => set({ user }),

  logout: () => {
    localStorage.removeItem('token');
    set({ token: null, user: null });
  },
}));
```

> ⚠️ `create()` to'g'ridan-to'g'ri chaqiriladi — funksiya ichida emas!
> ⚠️ `export const` ishlatilsa importda `{ useAuthStore }`, `export default` bo'lsa `useAuthStore`.
> ✅ Zustand Provider talab qilmaydi — `main.jsx`'da hech narsa wraplash shart emas.

### `src/components/ProtectedRoute.jsx`
```jsx
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export default function ProtectedRoute({ children }) {
  const token = useAuthStore(state => state.token);
  if (!token) return <Navigate to="/login" replace />;
  return children;
}
```

> `Navigate` — JSX render paytida yo'naltirish.
> `useNavigate` — onClick/useEffect ichida yo'naltirish.
> `replace` — brauzer tarixiga yozilmaydi (back tugmasi ishlaydi).

### `src/pages/Home.jsx`
```jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMe, logout } from '../api/auth';
import { useAuthStore } from '../store/authStore';
import '../styles/auth.css';

export default function Home() {
  const { token, user, setUser, logout: storeLogout } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    getMe(token).then(data => {
      if (data.id) {
        setUser(data);
      } else {
        storeLogout();
        navigate('/login');
      }
    });
  }, []);

  const handleLogout = async () => {
    await logout(token);
    storeLogout();
    navigate('/login');
  };

  if (!user) return <div className="auth-container"><p>Yuklanmoqda...</p></div>;

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="user-avatar">{user.name[0].toUpperCase()}</div>
        <h2>{user.name}</h2>
        <p className="auth-subtitle">{user.email}</p>
        <p className="user-id">ID: {user.id}</p>
        <button className="primary-btn" onClick={handleLogout}>Chiqish</button>
      </div>
    </div>
  );
}
```

> `logout: storeLogout` — api'dagi `logout` bilan nom to'qnashmasligi uchun rename.

### `src/App.jsx`
```jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      } />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
```

> `Route path="*"` — noto'g'ri URL uchun (401 emas).

### `src/main.jsx`
```jsx
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

> `BrowserRouter` — `Routes` va `useNavigate` ishlashi uchun shart, eng yuqorida bo'ladi.

---

## 4. CSS Asosiy Ranglar (Figma)

```css
/* Asosiy ranglar */
--primary: #6C5CE7      /* binafsha — tugmalar */
--border-top: #4A90E2   /* ko'k — body border-top */
--input-border: #E0E0E0
--text-muted: #888

/* Muhim klasslar */
.auth-container  /* min-height: 100vh, flex markaz */
.auth-card       /* oq karta, max-width: 460px */
.primary-btn     /* to'ldirilgan binafsha tugma */
.google-btn      /* outlined binafsha tugma */
.password-row    /* position: relative — eye btn uchun */
.eye-btn         /* position: absolute, right: 14px */
.forgot-link     /* position: absolute, right: 44px */
.user-avatar     /* doira avatar, ismning birinchi harfi */
.error           /* color: red */
.success         /* color: green */
```

---

## 5. Ishga Tushirish

```bash
# Backend
pnpm dev:backend

# Frontend
pnpm dev:frontend

# Ikkalasi birga (agar parallel script qo'shilgan bo'lsa)
pnpm dev
```

---

## 6. Test (PowerShell)

```powershell
# Register
Invoke-RestMethod -Method POST -Uri "http://localhost:3000/auth/register" `
  -ContentType "application/json" `
  -Body '{"name":"Ali","email":"ali@test.com","password":"12345678"}'

# Login + token saqlash
$res = Invoke-RestMethod -Method POST -Uri "http://localhost:3000/auth/login" `
  -ContentType "application/json" `
  -Body '{"email":"ali@test.com","password":"12345678"}'

# Profile
Invoke-RestMethod -Method GET -Uri "http://localhost:3000/auth/profile" `
  -Headers @{Authorization = "Bearer $($res.token)"}

# Logout
Invoke-RestMethod -Method POST -Uri "http://localhost:3000/auth/logout" `
  -Headers @{Authorization = "Bearer $($res.token)"}
```

---

## 7. Muhim Eslatmalar

| Muammo | Yechim |
|--------|--------|
| pnpm workspaces ishlamaydi | `pnpm-workspace.yaml` yarating |
| `nodemon server.js` topilmaydi | `src/server.js` deb to'g'irlang |
| `JWT_SECRET` o'qilmaydi | `node --env-file=.env` ishlatilsin (Node 20.6+) |
| `authStore` ishlamaydi | `create()` funksiya ichida emas, to'g'ridan-to'g'ri |
| Backend userlar o'chib ketadi | In-memory — restart qilsa qayta register kerak |
