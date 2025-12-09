# Localized & Filtered API Data Dashboard

This is a **Next.js (Pages Router + TypeScript)** project demonstrating:

- Data fetching from a public API
- Client-side search and pagination
- Internationalization (i18n) with English and French
- Responsive and modern UI/UX

---

## 🚀 Features

- Fetches users from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users)
- Loading and error handling with retry
- Search users by name or email (case-insensitive)
- Pagination: 5 users per page
- Language routes: `/en` for English, `/fr` for French
- Responsive design for desktop and mobile
- Clean and reusable React components

---

## 🏗️ Project Structure

`src/`
- `components/`
  - `SearchInput.tsx`
  - `UserList.tsx`
- `hooks/`
  - `useUsers.ts`
  - `useLocale.ts`
- `locales/`
  - `en.json`
  - `fr.json`

`pages/`
- `en/`
  - `index.tsx`
- `fr/`
  - `index.tsx`

---

## ⚡ Getting Started

1. **Install dependencies**:  
`npm install`

2. **Run the development server**:  
`npm run dev`

3. **Open in browser**:  
- English: http://localhost:3000/en  
- French: http://localhost:3000/fr

---

## 🛠️ Technologies

- Next.js (Pages Router)  
- TypeScript  
- React Hooks  
- Tailwind CSS  
- React Icons  

---

## 💻 Notes

- Designed for easy extension to more languages or API endpoints.  
- Pagination and search are fully client-side for fast interactions.  
- All UI components are responsive and accessible.  

---
