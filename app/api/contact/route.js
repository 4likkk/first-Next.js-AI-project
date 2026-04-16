import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, company, message } = data;

    // Логируем данные в консоль (заменить на отправку в Telegram/Email в реальном проекте)
    console.log('=== Новая заявка с сайта ===');
    console.log('Имя:', name);
    console.log('Email:', email);
    console.log('Компания:', company || 'не указана');
    console.log('Сообщение:', message);
    console.log('===========================');

    return NextResponse.json({
      success: true,
      message: 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.'
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Произошла ошибка' },
      { status: 500 }
    );
  }
}