# CryptoUA Media 🇺🇦

Незалежне крипто-медіа українською з мікроплатежами x402 на SKALE Network.

## Стек
- React 18
- React Router v6
- x402 протокол (готово до інтеграції)
- SKALE Network (нульові комісії)

## Локальний запуск

```bash
npm install
npm start
```

## Деплой на Vercel

### Варіант 1: Через GitHub (рекомендовано)

1. Завантаж проєкт на GitHub:
```bash
git init
git add .
git commit -m "Initial commit: CryptoUA Media"
git remote add origin https://github.com/YOUR_USERNAME/cryptoua-media.git
git push -u origin main
```

2. Зайди на [vercel.com](https://vercel.com)
3. Натисни "Add New → Project"
4. Вибери свій репозиторій
5. Натисни "Deploy" — Vercel сам визначить React налаштування

### Варіант 2: Через Vercel CLI

```bash
npm install -g vercel
vercel
```

## Структура

```
src/
  data/articles.js     — статті (додавай нові тут)
  pages/HomePage.js    — головна сторінка
  pages/ArticlePage.js — сторінка статті з paywall
  components/Header.js — шапка з тікером
  styles.css           — глобальні стилі
```

## Додати нову статтю

В `src/data/articles.js` додай новий об'єкт:

```js
{
  id: 'slug-url',
  title: 'Заголовок статті',
  excerpt: 'Короткий опис',
  category: 'КАТЕГОРІЯ',
  readTime: '5 хв',
  price: '0.001',
  currency: 'ETH',
  date: '6 травня 2025',
  free: false,  // true = безкоштовна
  content: `
## Заголовок розділу

Текст статті...
  `
}
```
