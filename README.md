# 🚀 React + PHP + MySQL CRUD Application

A full-stack CRUD (Create, Read, Update, Delete) web application built using **React (TypeScript)** for the frontend and **PHP + MySQL** for the backend API.

This project demonstrates complete frontend-backend integration, REST API handling, routing, and database operations.

---

## 🛠 Tech Stack

### Frontend
- React (TypeScript)
- React Router DOM
- Axios
- CSS

### Backend
- PHP (REST API)
- MySQL
- CORS Handling

### Tools
- Git & GitHub
- XAMPP (Apache + MySQL)
- VS Code

---

## 📂 Project Structure


react-php-crud/
│
├── frontend/ # React TypeScript Application
│ ├── src/
│ ├── package.json
│
├── backend/ # PHP REST API
│ ├── api/
│ ├── config/
│
└── README.md


---

## ✨ Features

- ✅ Create User
- ✅ View All Users
- ✅ Edit User
- ✅ Delete User
- ✅ REST API Integration
- ✅ CORS Enabled Backend
- ✅ Client-side Routing
- ✅ Axios HTTP Requests

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository


git clone https://github.com/YOUR\_USERNAME/react-php-crud.git

cd react-php-crud


---

### 2️⃣ Setup Backend (PHP)

- Move `backend` folder inside your XAMPP `htdocs`
- Start Apache & MySQL
- Create a database in phpMyAdmin
- Import SQL file (if provided)
- Update database credentials in:


backend/config/database.php


---

### 3️⃣ Setup Frontend (React)


cd frontend
npm install
npm run dev


Frontend runs on:

http://localhost:5173


Backend runs on:

http://localhost/api/


---

## 🔄 API Endpoints

| Method | Endpoint | Description |
|--------|----------|------------|
| GET | /api/user/list | Fetch all users |
| POST | /api/user/save | Create new user |
| GET | /api/user/{id} | Get single user |
| PUT | /api/user/update/{id} | Update user |
| DELETE | /api/user/delete/{id} | Delete user |

---

## 🔐 CORS Configuration

To allow frontend communication, CORS headers are enabled in PHP:

```php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");

;
📸 Screenshots




<img width="850" height="446" alt="image" src="https://github.com/user-attachments/assets/82304030-cad8-4807-b271-bb4e00d52d7c" />
<img width="731" height="409" alt="image" src="https://github.com/user-attachments/assets/b4f5682c-4da4-428b-aca5-30ab0a507717" />


🚀 Deployment

Frontend can be deployed on:

Vercel

Netlify

Backend can be deployed on:

Render

Railway

Shared Hosting

🎯 Learning Outcomes

Full-stack architecture understanding

Frontend ↔ Backend communication

REST API development

MySQL database integration

CORS handling

Git version control

👨‍💻 Author

Harsh Gavand
BTech Information Technology Student

📜 License

This project is open-source and available under the MIT License.



