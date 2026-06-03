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
