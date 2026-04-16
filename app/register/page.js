'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }

    if (formData.password.length < 6) {
      setError('Пароль должен быть минимум 6 символов');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password
        })
      });

      const result = await response.json();

      if (result.success) {
        router.push('/login?registered=true');
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

        <h1>Регистрация</h1>
        <p className="authSubtitle">Создайте аккаунт для доступа к платформе</p>

        <form className="authForm" onSubmit={handleSubmit}>
          <div className="formGroup">
            <label>Имя</label>
            <input
              type="text"
              placeholder="Введите ваше имя"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>

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
              placeholder="Минимум 6 символов"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
          </div>

          <div className="formGroup">
            <label>Подтвердите пароль</label>
            <input
              type="password"
              placeholder="Повторите пароль"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              required
            />
          </div>

          {error && <div className="errorMessage">{error}</div>}

          <button type="submit" className="btn btnPrimary btnLg btnFull" disabled={loading}>
            {loading ? 'Регистрация...' : 'Зарегистрироваться'}
          </button>
        </form>

        <p className="authLink">
          Уже есть аккаунт? <Link href="/login">Войти</Link>
        </p>

        <p className="authBack">
          <Link href="/">← На главную</Link>
        </p>
      </div>
    </div>
  );
}