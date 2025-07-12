# 📋 Task Manager API with User Authentication

A secure RESTful API for managing personal tasks, built using Express.js and MongoDB. Includes full user authentication with JWT and protected routes. Ideal for learning or integrating into full-stack projects.

---

## 🚀 Features

- User registration and login  
- Password hashing with bcrypt  
- JWT-based authentication  
- Middleware-protected routes  
- Create, read, update, and delete tasks  
- User-specific task ownership

---

## 🧰 Tech Stack

- Node.js + Express.js  
- MongoDB + Mongoose  
- JWT for authentication  
- bcrypt for password security  
- dotenv for environment variables

---

## 📁 Project Structure

```
📦 Task Manager API
├── controller/         # Route logic (auth, task)
├── middleware/         # JWT verification
├── models/             # Mongoose schemas
├── routes/             # Route definitions
├── .env                # Environment variables
├── App.js              # Main entry point
└── package.json
```

---

## 🔐 API Endpoints

### 🔑 Auth

| Method | Endpoint        | Description           |
|--------|------------------|-----------------------|
| POST   | /api/register    | Register a new user   |
| POST   | /api/login       | Login and get token   |
| GET    | /api/profile     | Get logged-in user info (protected) |

### ✅ Tasks (Protected)

| Method | Endpoint        | Description              |
|--------|------------------|--------------------------|
| POST   | /api/tasks       | Create new task          |
| GET    | /api/tasks       | Get all tasks for user   |
| GET    | /api/tasks/:id   | Get a specific task      |
| PUT    | /api/tasks/:id   | Update a task            |
| DELETE | /api/tasks/:id   | Delete a task            |

🛡️ All task routes require a Bearer token in the Authorization header.

---

## 🔧 Installation & Usage

1. Clone the repo  
   ```
   git clone https://github.com/Halloloid/task-manager-api.git
   cd task-manager-api
   ```

2. Install dependencies  
   ```
   npm install
   ```

3. Set up your `.env` file  
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. Start the server  
   ```
   npm start
   ```

---

## 📦 Example `.env` file

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=yourSuperSecretKey
```

---

## 📮 Sample Login Header

```
Authorization: Bearer <your_token_here>
```

---

## 🙋‍♂️ Author

Made with ❤️ by [Halloloid](https://github.com/Halloloid)
