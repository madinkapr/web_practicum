import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../api/auth';
import '../styles/auth.css';

const EyeOpen = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
);

const EyeClosed = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
        <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
);

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeat, setRepeat] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (password !== repeat) return setError('Parollar mos emas');
        const data = await register(name, email, password);
        if (data.id) {
            setSuccess('Muvaffaqiyatli ro\'yxatdan o\'tdingiz!');
            setTimeout(() => navigate('/login'), 1500);
        } else {
            setError(data.message || 'Xatolik yuz berdi');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h1>Registration</h1>
                <p className="auth-subtitle">Failure will never overtake me if my determination to succeed is strong enough.</p>

                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                    <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />

                    <div className="password-row">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <button type="button" className="eye-btn" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <EyeClosed /> : <EyeOpen />}
                        </button>
                    </div>

                    <div className="password-row">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Repeat password"
                            value={repeat}
                            onChange={e => setRepeat(e.target.value)}
                        />
                        <button type="button" className="eye-btn" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <EyeClosed /> : <EyeOpen />}
                        </button>
                    </div>

                    {error && <p className="error">{error}</p>}
                    {success && <p className="success">{success}</p>}
                    <button type="submit" className="primary-btn">REGISTRATION</button>
                </form>

                <p className="auth-footer">
                    Already have an account? <Link to="/login">Sign In</Link>
                </p>
            </div>
        </div>
    );
}
