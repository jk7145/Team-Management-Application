# Student Team Members Management Application

This project is a full stack app to manage team members with image upload.

## Tech Stack
- Frontend: React + Vite + React Router + Axios
- Backend: Node.js + Express + MongoDB + Multer

## Project Structure
- `frontend/` - React client
- `backend/` - Node/Express API and MongoDB models

## Installation
1. Open terminal in project root.
2. Install frontend dependencies:
   - `cd frontend`
   - `npm install`
3. Install backend dependencies:
   - `cd ../backend`
   - `npm install`

## Configure Backend
- File: `backend/.env`
- Default values already set:
  - `PORT=5000`
  - `MONGO_URI=mongodb://127.0.0.1:27017/team_members_db`

## Run the App
1. Start backend:
   - `cd backend`
   - `npm run dev`
2. Start frontend in another terminal:
   - `cd frontend`
   - `npm run dev`
3. Open the frontend URL shown by Vite (usually `http://localhost:5173`).

## API Endpoints
- `POST /api/members` - Add a new member (multipart/form-data, include `image` file)
- `GET /api/members` - Get all members
- `GET /api/members/:id` - Get one member by ID
- `GET /uploads/:filename` - Access stored profile image

## Browser API Test Examples
- `http://localhost:5000/api/members`
`http://localhost:5000/api/members/<member-id>`

# Team-Management-Application
