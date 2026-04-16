import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const usersFile = path.join(process.cwd(), 'data', 'users.json');

function getUsers() {
  try {
    if (!fs.existsSync(usersFile)) {
      return [];
    }
    const data = fs.readFileSync(usersFile, 'utf8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Заполните все поля' },
        { status: 400 }
      );
    }

    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Неверный email или пароль' },
        { status: 401 }
      );
    }

    console.log('=== Вход пользователя ===');
    console.log('Email:', email);
    console.log('==========================');

    return NextResponse.json({
      success: true,
      message: 'Авторизация успешна!',
      user: { name: user.name, email: user.email }
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Ошибка сервера' },
      { status: 500 }
    );
  }
}