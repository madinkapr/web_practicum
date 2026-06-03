import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../api/auth';
import '../styles/auth.css';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeat, setRepeat] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== repeat) return setError('Parollar mos emas');
    const data = await register(name, email, password);
    if (data.id) {
      navigate('/login');
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
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          <input type="password" placeholder="Repeat password" value={repeat} onChange={e => setRepeat(e.target.value)} />
          {error && <p className="error">{error}</p>}
          <button type="submit" className="primary-btn">REGISTRATION</button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

