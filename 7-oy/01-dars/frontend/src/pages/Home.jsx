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
};

