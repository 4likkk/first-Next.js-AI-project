'use client';

import { useState } from 'react';

export default function Home() {
  const [notification, setNotification] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      
      if (result.success) {
        setNotification({ type: 'success', message: result.message });
        setFormData({ name: '', email: '', company: '', message: '' });
      }
    } catch (error) {
      setNotification({ type: 'error', message: 'Произошла ошибка. Попробуйте позже.' });
    }

    setTimeout(() => setNotification(null), 4000);
  };

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container headerContent">
          <a href="#" className="logo">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="#6366F1"/>
              <path d="M8 16L14 22L24 10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>TechVision</span>
          </a>
          <nav className="nav">
            <a href="#services" className="navLink">Услуги</a>
            <a href="#projects" className="navLink">Проекты</a>
            <a href="#about" className="navLink">О нас</a>
            <a href="#contact" className="navLink">Контакты</a>
          </nav>
          <div className="authLinks">
            <a href="/login" className="btn btnSecondary">Войти</a>
            <a href="/register" className="btn btnPrimary">Регистрация</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="heroContent">
            <h1>Создаём цифровые продукты, которые двигают бизнес вперёд</h1>
            <p>IT-агентство полного цикла: от стратегии до запуска и масштабирования. Веб-разработка, мобильные приложения, UI/UX дизайн.</p>
            <div className="heroBtns">
              <a href="#contact" className="btn btnPrimary btnLg">Получить консультацию</a>
              <a href="#projects" className="btn btnSecondary btnLg">Смотреть кейсы</a>
            </div>
          </div>
          <div className="heroStats">
            <div className="stat">
              <span className="statNumber">150+</span>
              <span className="statLabel">проектов</span>
            </div>
            <div className="stat">
              <span className="statNumber">8</span>
              <span className="statLabel">лет опыта</span>
            </div>
            <div className="stat">
              <span className="statNumber">40+</span>
              <span className="statLabel">специалистов</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <div className="container">
          <div className="sectionHeader">
            <h2>Наши услуги</h2>
            <p>Комплексные решения для вашего бизнеса</p>
          </div>
          <div className="servicesGrid">
            <div className="serviceCard">
              <div className="serviceIcon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <rect x="4" y="8" width="40" height="28" rx="4" stroke="#6366F1" strokeWidth="3"/>
<line x1="4" y1="20" x2="44" y2="20" stroke="#6366F1" strokeWidth="3"/>
                </svg>
              </div>
              <h3>Веб-разработка</h3>
              <p>Корпоративные сайты, e-commerce, веб-приложения на современных технологиях</p>
            </div>
            <div className="serviceCard">
              <div className="serviceIcon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <rect x="14" y="4" width="20" height="40" rx="4" stroke="#6366F1" strokeWidth="3"/>
                  <circle cx="24" cy="38" r="2" fill="#6366F1"/>
                </svg>
              </div>
              <h3>Мобильная разработка</h3>
              <p>iOS и Android приложения с нативным и кроссплатформенным подходом</p>
            </div>
            <div className="serviceCard">
              <div className="serviceIcon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="18" stroke="#6366F1" strokeWidth="3"/>
                  <circle cx="24" cy="24" r="8" stroke="#6366F1" strokeWidth="3"/>
                </svg>
              </div>
              <h3>UI/UX Дизайн</h3>
              <p>Исследования, прототипы, дизайн-системы и интерфейсы, которые конвертируют</p>
            </div>
            <div className="serviceCard">
              <div className="serviceIcon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M8 36L16 28L24 32L32 20L40 12" stroke="#6366F1" strokeWidth="3" strokeLinecap="round"/>
                  <circle cx="40" cy="12" r="4" fill="#6366F1"/>
                </svg>
              </div>
              <h3>DevOps и облака</h3>
              <p>Инфраструктура, CI/CD, миграция в облако и оптимизация процессов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section sectionDark">
        <div className="container">
          <div className="sectionHeader">
            <h2>Избранные проекты</h2>
            <p>Реальные кейсы с измеримыми результатами</p>
          </div>
          <div className="projectsGrid">
            <div className="projectCard projectLarge">
              <div className="projectInfo">
                <span className="projectTag">E-commerce</span>
                <h3>RetailMax</h3>
                <p>Платформа электронной коммерции с каталогом 50 000+ товаров. Рост конверсии на 45%.</p>
                <span className="projectTech">React, Node.js, PostgreSQL</span>
              </div>
            </div>
            <div className="projectCard">
              <div className="projectInfo">
                <span className="projectTag">Fintech</span>
                <h3>PayFlow</h3>
                <p>Платежная система для малого бизнеса. Обработка 100K транзакций в сутки.</p>
                <span className="projectTech">Swift, Kotlin, Go</span>
              </div>
            </div>
            <div className="projectCard">
              <div className="projectInfo">
                <span className="projectTag">Healthcare</span>
                <h3>MedConnect</h3>
                <p>Телемедицинская платформа. 200+ клиник подключено.</p>
                <span className="projectTech">Vue.js, Python, AWS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="container">
          <div className="aboutGrid">
            <div className="aboutContent">
              <h2>Почему выбирают нас</h2>
              <p>Мы не просто исполнители — мы партнёры в достижении ваших целей. Каждый проект начинается с глубокого погружения в бизнес-задачи.</p>
              <ul className="aboutList">
                <li><strong>Прозрачность</strong> — еженедельные отчёты и доступ к коду</li>
                <li><strong>Скорость</strong> — быстрый старт и короткие итерации</li>
                <li><strong>Качество</strong> — code review и автоматизированное тестирование</li>
                <li><strong>Поддержка</strong> — 24/7 после запуска проекта</li>
              </ul>
            </div>
            <div className="aboutVisual">
              <div className="techBadges">
                <span className="badge">React</span>
                <span className="badge">Vue.js</span>
                <span className="badge">Node.js</span>
                <span className="badge">Python</span>
                <span className="badge">Swift</span>
                <span className="badge">Kotlin</span>
                <span className="badge">AWS</span>
                <span className="badge">Docker</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section sectionAccent">
        <div className="container">
          <div className="contactGrid">
            <div className="contactContent">
              <h2>Готовы начать проект?</h2>
              <p>Расскажите о вашей задаче — мы подготовим коммерческое предложение в течение 24 часов.</p>
              <div className="contactInfo">
                <div className="contactItem">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 8L10 13L3 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <rect x="11" y="6" width="10" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>hello@techvision.dev</span>
                </div>
                <div className="contactItem">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92V19.92C22 20.48 21.5 21 20.92 21C10.67 21 3 13.33 3 3.08C3 2.5 3.5 2 4.08 2H7.08C7.58 2 8.04 2.34 8.12 2.83L9.58 11.34C9.67 11.84 9.5 12.38 9.18 12.72L7.54 14.36C8.3 16.03 9.97 17.7 11.64 18.46L13.28 16.82C13.62 16.5 14.16 16.33 14.66 16.42L23.17 17.88C23.66 17.96 24 18.42 24 18.92V16.92" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>+7 (495) 123-45-67</span>
                </div>
              </div>
            </div>
            <form className="contactForm" onSubmit={handleSubmit}>
              <input 
                type="text" 
                placeholder="Ваше имя" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input 
                type="email" 
                placeholder="Email" 
                required 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <input 
                type="text" 
                placeholder="Компания" 
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
              />
              <textarea 
                placeholder="Расскажите о проекте" 
                rows="4"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
              <button type="submit" className="btn btnPrimary btnLg btnFull">Отправить заявку</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footerContent">
            <a href="#" className="logo">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="#6366F1"/>
                <path d="M8 16L14 22L24 10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>TechVision</span>
            </a>
            <p>© 2024 TechVision. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Notification */}
      {notification && (
        <div className={`notification notification${notification.type === 'success' ? 'Success' : 'Error'} notificationShow`}>
          {notification.message}
        </div>
      )}
    </>
  );
}