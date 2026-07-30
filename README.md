# 🧠 TEDx Wall of Memory - Backend API

Welcome to the backend API for the **TEDx Wall of Memory**! This repository powers the core functionality of the memory wall, allowing the organizing team—Organizers, Coordinators, and Subcoordinators—to pin and share their unforgettable TEDx experiences. 

This project was recently migrated to a modern **TypeScript** architecture for better type safety, cleaner structure, and easier long-term maintenance.

---

## 🚀 Features

- **Robust REST API**: Simple, clean, and scalable endpoints for fetching and creating memories.
- **Type Safety**: Fully typed with TypeScript, ensuring fewer runtime bugs and a better developer experience.
- **Data Validation**: Strict validation for required fields and role categories before anything hits the database.
- **Modern Dev Environment**: Fast iterative development using `tsx`.

---

## 🛠️ Tech Stack

- **Runtime**: [Node.js](https://nodejs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) via [Mongoose](https://mongoosejs.com/)
- **Tooling**: `tsx` for lightning-fast dev server reloads.

---

## 💻 Getting Started

Follow these steps to get the project up and running on your local machine.

### 1. Prerequisites
Make sure you have the following installed:
- Node.js (v18 or higher recommended)
- MongoDB (Local instance or a MongoDB Atlas URI)

### 2. Clone the Repository
```bash
git clone https://github.com/iamkartik0704/memory.git
cd memory
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Environment Variables
Create a `.env` file in the root directory and add your MongoDB connection string and preferred port:
```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/tedxMemories
```
*(Note: If you omit `MONGO_URI`, it defaults to a local MongoDB database named `tedxMemories`.)*

### 5. Run the Application
To start the development server (auto-reloads on changes):
```bash
npm run dev
```
To build and run for production:
```bash
npm run build
npm start
```

Your server should now be running at `http://localhost:3000` ✨

---

## 📡 API Endpoints

### 1. Get All Memories
Retrieves all memories, sorted by the newest first.
- **URL**: `/api/memories`
- **Method**: `GET`
- **Response**: Array of memory objects.

### 2. Pin a New Memory
Creates and pins a new memory to the wall.
- **URL**: `/api/memories`
- **Method**: `POST`
- **Body**:
  ```json
  {
      "name": "Your Name",
      "roleCategory": "Organizer", // Must be Organizer, Coordinator, or Subcoordinator
      "customRoleTitle": "Lead Organizer", // Optional
      "memoryText": "Seeing the audience react to the final talk was an unforgettable experience!"
  }
  ```
- **Validation Rules**:
  - `name`, `roleCategory`, and `memoryText` are **required**.
  - `roleCategory` must exactly match one of the predefined roles.

---

## 🤝 Contributing
If you're a senior or fellow team member looking to contribute, simply pull the latest `main` branch, branch out for your feature, and submit a PR. Make sure to run `npm run build` to catch any TypeScript errors before pushing!

---

*Built with ❤️ for the TEDx team.*
