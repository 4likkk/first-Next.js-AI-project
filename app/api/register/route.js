import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const usersFile = path.join(process.cwd(), 'data', 'users.json');

function getUsers() {
  try {
    if (!fs.existsSync(path.dirname(usersFile))) {
      fs.mkdirSync(path.dirname(usersFile), { recursive: true });
    }
    if (!fs.existsSync(usersFile)) {
      fs.writeFileSync(usersFile, JSON.stringify([]));
    }
    const data = fs.readFileSync(usersFile, 'utf8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function saveUsers(users) {
  const dir = path.dirname(usersFile);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: 'Заполните все поля' },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { success: false, message: 'Пароль должен быть минимум 6 символов' },
        { status: 400 }
      );
    }

    const users = getUsers();

    if (users.find(u => u.email === email)) {
      return NextResponse.json(
        { success: false, message: 'Пользователь с таким email уже существует' },
        { status: 400 }
      );
    }

    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    saveUsers(users);

    console.log('=== Новая регистрация ===');
    console.log('Имя:', name);
    console.log('Email:', email);
    console.log('=========================');

    return NextResponse.json({
      success: true,
      message: 'Регистрация успешна!'
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Ошибка сервера' },
      { status: 500 }
    );
  }
}