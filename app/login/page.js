'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    if (searchParams.get('registered') === 'true') {
      setRegistered(true);
      setTimeout(() => setRegistered(false), 3000);
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    setLoading(true);

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });

      const result = await response.json();

      if (result.success) {
        router.push('/?loggedin=true');
      } else {
        setError(result.message);
      }
    } catch {
      setError('Произошла ошибка. Попробуйте позже.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="authPage">
      <div className="authContainer">
        <div className="authLogo">
          <svg width="48" height="48" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" fill="#6366F1"/>
            <path d="M8 16L14 22L24 10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>TechVision</span>
        </div>

        <h1>Вход</h1>
        <p className="authSubtitle">Войдите в свой аккаунт</p>

        {registered && (
          <div className="successMessage">Регистрация прошла успешно! Теперь войдите.</div>
        )}

        <form className="authForm" onSubmit={handleSubmit}>
          <div className="formGroup">
            <label>Email</label>
            <input
              type="email"
              placeholder="example@mail.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>

          <div className="formGroup">
            <label>Пароль</label>
            <input
              type="password"
              placeholder="Введите пароль"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
          </div>

          {error && <div className="errorMessage">{error}</div>}

          <button type="submit" className="btn btnPrimary btnLg btnFull" disabled={loading}>
            {loading ? 'Вход...' : 'Войти'}
          </button>
        </form>

        <p className="authLink">
          Нет аккаунта? <Link href="/register">Зарегистрироваться</Link>
        </p>

        <p className="authBack">
          <Link href="/">← На главную</Link>
        </p>
      </div>
    </div>
  );
}