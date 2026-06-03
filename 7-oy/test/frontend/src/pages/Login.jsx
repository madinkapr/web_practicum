import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../api/auth';
import { useAuthStore } from '../store/authStore';
import '../styles/auth.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { setToken } = useAuthStore();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await login(email, password);
        if (data.token) {
            setToken(data.token);
            navigate('/');
        } else {
            setError(data.message || 'Xatolik yuz berdi');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h1>Sign In</h1>
                <p className="auth-subtitle">Failure will never overtake me if my determination to succeed is strong enough.</p>

                <button className="google-btn">SIGN IN WITH GOOGLE</button>

                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <div className="password-row">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <Link to="/forgot" className="forgot-link">FORGOT?</Link>
                    </div>
                    {error && <p className="error">{error}</p>}
                    <button type="submit" className="primary-btn">GET DEMO VERSION</button>
                </form>

                <p className="auth-footer">
                    Don't have an account? <Link to="/register">Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

