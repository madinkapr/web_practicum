# Auth Loyiha — Fullstack

Foydalanuvchi autentifikatsiya tizimi. Node.js/Express backend va React 19 frontend asosida qurilgan. JWT token bilan himoyalangan API, argon2 parol xeshlash, Zustand global state management.

---

## Texnologiyalar

### Backend
| Paket | Versiya | Maqsad |
|-------|---------|--------|
| express | latest | HTTP server |
| argon2 | latest | Parol xeshlash |
| jsonwebtoken | latest | JWT yaratish/tekshirish |
| cors | latest | Cross-origin so'rovlar |

### Frontend
| Paket | Versiya | Maqsad |
|-------|---------|--------|
| react | 19 | UI framework |
| vite | latest | Build tool |
| react-router-dom | 7 | Sahifalar navigatsiyasi |
| zustand | latest | Global state (token, user) |

---

## Loyiha Strukturasi

```
auth-project/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── auth.controller.js   # register, login, getMe, logout
│   │   ├── middleware/
│   │   │   └── auth.middleware.js   # JWT Bearer tekshirish
│   │   ├── models/
│   │   │   └── users.model.js       # In-memory foydalanuvchilar
│   │   ├── routes/
│   │   │   └── auth.routes.js       # /auth/* endpointlar
│   │   └── server.js                # Express app
│   ├── .env
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── auth.js              # Barcha fetch funksiyalar
│   │   ├── store/
│   │   │   └── authStore.js         # Zustand store
│   │   ├── components/
│   │   │   └── ProtectedRoute.jsx   # Token tekshiruvchi wrapper
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Home.jsx             # User ma'lumotlari
│   │   ├── styles/
│   │   │   └── auth.css
│   │   ├── App.jsx                  # Router sozlash
│   │   └── main.jsx                 # BrowserRouter
│   ├── .env
│   └── package.json
├── pnpm-workspace.yaml
├── swagger.yaml                     # API dokumentatsiya
├── GUIDE.md                         # Loyihani qayta yaratish uchun qo'llanma
└── README.md
```

---

## O'rnatish va Ishga Tushirish

### Talablar
- Node.js 20.6+
- pnpm

### 1. Paketlarni o'rnatish

```bash
# Root papkadan
pnpm install
```

### 2. Muhit o'zgaruvchilari

**`backend/.env`:**
```
PORT=
JWT_SECRET=
```

**`frontend/.env`:**
```
VITE_API_URL=
```

### 3. Ishga tushirish

```bash
# Faqat backend
pnpm dev:backend

# Faqat frontend
pnpm dev:frontend
```

- Backend: `http://localhost:3000`
- Frontend: `http://localhost:5173`

---

## API Dokumentatsiya

To'liq Swagger dokumentatsiya [`swagger.yaml`](./swagger.yaml) faylida. Ko'rish uchun [Swagger Editor](https://editor.swagger.io) ga faylni yuklang.

---

## API Endpointlar

### POST `/auth/register`
Yangi foydalanuvchi ro'yxatdan o'tkazish.

**Request:**
```json
{
  "name": "Ali Karimov",
  "email": "ali@gmail.com",
  "password": "12345678"
}
```

**Response `201`:**
```json
{
  "message": "Muvaffaqiyatli ro'yxatdan o'tildi",
  "id": 1
}
```

---

### POST `/auth/login`
Tizimga kirish va JWT token olish.

**Request:**
```json
{
  "email": "ali@gmail.com",
  "password": "12345678"
}
```

**Response `200`:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9..."
}
```

---

### GET `/auth/profile`
Foydalanuvchi ma'lumotlarini olish. **Token shart.**

**Header:**
```
Authorization: Bearer <token>
```

**Response `200`:**
```json
{
  "id": 1,
  "name": "Ali Karimov",
  "email": "ali@gmail.com"
}
```

---

### POST `/auth/logout`
Tizimdan chiqish. **Token shart.**

**Header:**
```
Authorization: Bearer <token>
```

**Response `200`:**
```json
{
  "message": "Muvaffaqiyatli chiqildi"
}
```

---

## Frontend Sahifalari

| URL | Sahifa | Himoya | Tavsif |
|-----|--------|--------|--------|
| `/register` | Register | Yo'q | Ro'yxatdan o'tish formasi |
| `/login` | Login | Yo'q | Kirish formasi |
| `/` | Home | ✅ Token | User ma'lumotlari kartochkasi |

### Auth oqimi
```
Register → (muvaffaqiyat) → Login
Login → (token) → Home
Home → (logout) → Login
Himoyalangan sahifaga tokenisiz kirish → Login
```

---

## Test (PowerShell)

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

## Muhim Eslatmalar

- **In-memory DB** — backend restart bo'lsa barcha foydalanuvchilar o'chadi
- **argon2** — bcrypt emas, xavfsizroq xeshlash algoritmi
- **Node 20.6+** — `--env-file` va `--watch` flag ishlashi uchun shart
- **Zustand** — Context/Provider talab qilmaydi
- To'liq qo'llanma: [GUIDE.md](./GUIDE.md)
