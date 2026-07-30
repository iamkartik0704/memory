
###  Clone the Repository
```bash
git clone https://github.com/iamkartik0704/memory.git
cd memory
```

###  Install Dependencies
```bash
npm install
```

###  Environment Variables
Create a `.env` file in the root directory and add your MongoDB connection string and preferred port:
```env
PORT=3000
MONGO_URI=
```


###  Run the Application
To start the development server (auto-reloads on changes):
```bash
npm run dev
```
To build and run for production:
```bash
npm run build
npm start
```

Your server should now be running at `http://localhost:3000` 

---

##  API Endpoints

### 1. Get All Memories
Retrieves all memories, sorted by the newest first.
- **URL**: `/api/memories`
- **Method**: `GET`
- **Response**: Array of memory objects.

###  Pin a New Memory
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


