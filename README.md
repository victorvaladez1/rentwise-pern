# Rentwise 🏠

Rentwise is a full-stack property management platform designed for landlords and property managers to seamlessly manage properties, tenants, leases, payments, and expenses — all in one place.

---

## 🚀 Tech Stack

### Frontend

- ⚛️ React + TypeScript
- ⚡ Vite
- 🎨 Tailwind CSS
- 🔐 Context API for Auth
- 🧭 React Router

### Backend

- 🖥️ Node.js + Express
- 🗄️ PostgreSQL
- 🔐 JWT for authentication
- 🔑 bcryptjs for password hashing
- 🔌 `pg` for database interaction

---

## 📁 Folder Structure

```
rentwise-pern/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── db/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── tailwind.config.js
```

---

## ✨ Features

### ✅ Authentication

- Login page
- Protected routes using `ProtectedRoute.tsx`
- Context-based frontend auth management
- JWT auth with hashed passwords on the backend

### 🏘️ Property Management

- Create, edit, delete, and view properties

### 👥 Tenants

- Manage tenant data (create, read, update)

### 📄 Leases

- Associate tenants to properties with lease terms

### 💸 Payments

- Track rent payments
- View monthly breakdown and profit summaries

### 📉 Expenses

- Record property-related expenses

### 📊 Dashboard

- Overview of rent, expenses, and net profit

### ⚙️ Settings (stubbed)

- Placeholder for future user preferences/config

---

## 🔐 Protected Frontend Routes

These routes are only accessible when authenticated:

- `/dashboard`
- `/properties`
- `/tenants`
- `/leases`
- `/payments`
- `/expenses`
- `/settings`

---

## 🧪 Sample API Endpoints

- `POST /api/auth/login`
- `GET /api/properties`
- `POST /api/tenants`
- `GET /api/payments/summary`
- `GET /api/payments/monthly`
- `GET /api/payments/profit-summary`
- `GET /api/expenses`
- `POST /api/leases`

---

## 🛠️ Getting Started

### Backend

```bash
cd backend
npm install
npm run dev
```

Make sure to set up a `.env` file with your PostgreSQL credentials.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on Vite and uses TailwindCSS.

---

## 📸 UI Preview

Login page example:

![Login Page](./screenshots/login.png)

> More screenshots coming soon!

---

## 🗺️ Roadmap

- ✅ Complete frontend auth flow
- ✅ Scaffold and protect major routes
- ✅ Build CRUD for properties, tenants, leases, payments, and expenses
- 🔄 Hook up backend API calls from frontend
- 🔄 Add persistent sessions using localStorage
- 🔄 Add unit/integration tests
- 🚀 Deployment (Railway, Vercel, etc.)

---

## 👨‍💻 Author

**Victor Valadez**  
[GitHub: @victorvaladez1](https://github.com/victorvaladez1)

---

## 📄 License

This project is licensed under the MIT License.
