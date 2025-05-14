#  Email Classification Tool

A full-stack Gmail email classification tool using Google OAuth, Node.js, React, and Gemini API (Google's AI model). It allows users to log in, fetch their Gmail emails, and classify them into categories such as Promotions, Social, Primary, etc.

---

## 🔗 Live Links
- **Frontend**: [https://ai-email-classifier-three.vercel.app/](https://email-classifier-five.vercel.app/)
- **Backend**: [https://ai-email-classifier.onrender.com](https://email-classifier-hcss.onrender.com)

---

## 🚀 Features
- ✅ Google OAuth-based login
- 📥 Fetch Gmail emails using Gmail API
- 🧠 Classify emails using Gemini API
- 🗂️ Fetch user info using Gmail API
- 📜 Expand/collapse email details
- 🔐 Logout and secure token clearing

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- React Router
- Google OAuth2 + Gmail API

### Backend
- Node.js
- Express.js
- Gemini AI API (Google Generative AI)

---

## 🗂️ Folder Structure

```plaintext
project-root/
├── frontend/       # Frontend code
│   ├── public/     # Static assets
│   ├── src/        # Source code (React)
│       ├── components/  # Reusable components
│       ├── pages/       # Page-level components
│       ├── App.js       # Main app component
│       ├── index.js     # Entry point
│       ├── styles/      # Tailwind CSS styles
├── backend/        # Backend code
│   ├── controllers/  # API controllers  
│   ├── server.js        # Express app
│   ├── package.json  # Backend dependencies
├── scripts/         # Bash scripts
│   ├── start-backend.sh  # Script to run backend
│   ├── start-frontend.sh # Script to run frontend
└── README.md        # Documentation
```

---

## 🚀 Deployment Instructions

### Frontend Deployment
The frontend is deployed on Vercel:
1. Push the `frontend` folder to a GitHub repository.
2. Connect the repository to Vercel.
3. Deploy the project with default settings.

### Backend Deployment
The backend is deployed on Render:
1. Push the `backend` folder to a GitHub repository.
2. Create a new web service on Render.
3. Set environment variables for `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `PORT`, etc.
4. Deploy the project with `npm install` as the build command and `npm start` as the start command.

---

## Installation & Setup 🛠️

### Backend Setup

1. Clone the repository:
   ```sh
   https://github.com/Vashu-Nayak/Email-classifier

2. Navigate to Project Folder:
   ```sh
   cd Email-classifier/backend

3. Install dependencies:
   ```sh
   npm install

4. Set up the environment variables in a .env file:
    ```sh
    PORT=5000
    ```

5. Start the Server
    ```sh
    npm start
    ```

6. Backend will run on http://localhost:5000.

### Frontend Setup

1. Navigate to the frontend folder:
    ```sh
    cd Email-classifier/frontend
    ```

2. Install dependencies:
   ```sh
   npm install

3. Start the development server:
   ```sh
   npm run dev

4. Frontend will run on http://localhost:5173.

### Author :

### Vashu

Assessment Submission for TheIndianAppGuy
