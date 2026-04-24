# BFHL Full Stack Engineering Challenge

This is a full-stack web application built for the SRM Full Stack Engineering Challenge. The application accepts a list of node relationships (like `A->B`), processes the hierarchical structure, detects trees and cycles, and displays the structured insights through a clean and responsive frontend.

## 🚀 Live Demo

- **Frontend Application**: [https://bfhl-restapi.vercel.app](https://bfhl-restapi.vercel.app)
- **Backend API Endpoint**: `https://bfhl-restapi.onrender.com/bfhl`

## 🛠️ Tech Stack

- **Frontend**: React (Vite)
- **Backend**: Node.js & Express.js
- **Deployment**: Vercel (Frontend), Render (Backend)

## 📦 Local Setup Instructions

Follow these steps to run the project locally on your machine.

### 1. Clone the repository
```bash
git clone https://github.com/kammaullas/BFHL-RESTAPI.git
cd BFHL-RESTAPI
```

### 2. Start the Backend API
```bash
cd backend
npm install
npm start
```
The backend API will start running on `http://localhost:3000`.

### 3. Start the Frontend Application
Open a new terminal window:
```bash
cd frontend
npm install
npm run dev
```
The frontend application will start running on `http://localhost:5173` (or the port specified by Vite).

**Note:** To test the frontend locally with the local backend, you will need to temporarily update `frontend/src/api.js` to fetch from `http://localhost:3000/bfhl` instead of the live Render URL.

## 📝 Features & Processing Rules Applied

1. **Tree Construction:** Parses edges and accurately constructs hierarchical JSON structures.
2. **Cycle Detection:** Intelligently identifies cycles and flags them.
3. **Depth Calculation:** Returns the longest root-to-leaf depth for valid trees.
4. **Data Validation:** Detects duplicate edge inputs and flags invalid entry formats.
5. **Modern UI:** Returns results in an intuitive dark-themed UI that clearly presents insights and tree structures.
