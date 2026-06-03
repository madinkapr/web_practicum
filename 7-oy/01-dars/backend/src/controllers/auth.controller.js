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
