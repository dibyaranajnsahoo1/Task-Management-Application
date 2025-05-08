# Task Management Application 📝

**Task Management Application** is a comprehensive task manager built using **Vite**, **React**, **JavaScript**, **Node.js**, **Express**, **MongoDB**, and **Tailwind CSS**. It's designed to streamline task organization, enabling users to manage tasks efficiently with a responsive interface for both web and mobile platforms.

## 🚀 Key Features

### 🔐 Authentication
- Secure **sign-up** and **log-in** process with encrypted password storage.
- **Update** user profile details (name, email, role, and password) from the settings page.
- Options to **log out** or **delete** user account.

### 📝 Task Management
- **Create Tasks**: Add tasks with detailed attributes including title, priority, status, start/end dates, and descriptions.
- **Edit Tasks**: Modify task details whenever necessary.
- **Delete Tasks**: Remove tasks easily.

### 📊 Task Dashboard
- A centralized dashboard to view tasks, categorized by status (To Do, In Progress, Completed).
- **Drag-and-Drop**: Reorganize tasks and move them between different status categories. The changes persist even after page refreshes.


### 🎨 User Interface
- Fully **responsive** design for both desktop and mobile views.
- **Dark Mode** support for easy viewing, adjustable via toggle.

### ⚙️ Settings
- Update profile information such as name, email, and role.
- Change **security settings**, including password update.
- Option to **log out** or **delete this account** your account.

---

## 🛠 Technologies

The application leverages the following technologies:

- **Frontend**: React, JavaScript, Vite, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB, Mongoose

---

## 📝 Development Process

The development of this app began by setting up the backend using **Node.js**, **Express**, and **MongoDB** for managing user authentication and task-related data. After the backend was operational, I proceeded with building the **frontend** using **React** with **Vite** as the bundler, along with **Tailwind CSS** for clean, responsive UI.

The **drag-and-drop functionality** posed a unique challenge. I ensured the tasks could be easily reordered and moved between columns. I used state management to maintain task status and applied **localStorage** for persistence across page refreshes.

Security was also a key focus. I used **JWT** (JSON Web Tokens) for authentication and **bcrypt** for secure password hashing.

---

## 📁 Environment Setup

### Frontend
1. Navigate to the `frontend` directory.
2. Create a `.env` file from the `.env.sample` file provided.
3. Replace the placeholders in the `.env` file with your actual values.
4. Install the required dependencies by running:
 
 

- **Backend**: A sample environment file is located in the `backend` folder. It includes placeholders for environment variables used by the Node.js/Express application.

Please make sure to replace the placeholders in these `.env.sample` files with your actual values in the `.env` files to run the application successfully.

## 📁 Running the Project

### Frontend
1. Navigate to the `frontend` directory.
2. Create a `.env` file from the `.env.sample` file provided.
3. Replace the placeholders in the `.env` file with your actual values.
4. Install the required dependencies by running:
   ```bash
   npm install
5. Start the development server by running
   ```bash
   npm run dev

### Backend 
1. Navigate to the `backend` directory.
2. Create a `.env` file from the `.env.sample` file provided.
3. Replace the placeholders in the `.env` file with your actual values.
4. Install the required dependencies by running:
   ```bash
   npm install
5. Start the development server by running
   ```bash
   npm run start
# Task Management Application

## Screenshots

![Image 1](https://github.com/dibyaranajnsahoo1/Task-Management-Application/blob/main/Screenshot%202025-05-08%20184749.png)
![Image 2](https://github.com/dibyaranajnsahoo1/Task-Management-Application/blob/main/Screenshot%202025-05-08%20184730.png)
![Image 3](https://github.com/dibyaranajnsahoo1/Task-Management-Application/blob/main/Screenshot%202025-05-08%20184916.png)
![Image 4](https://github.com/dibyaranajnsahoo1/Task-Management-Application/blob/main/Screenshot%202025-05-08%20184923.png)

