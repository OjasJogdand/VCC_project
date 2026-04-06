# My Courses App

A simple full-stack courses app built with Node.js, Express, MongoDB, React, JWT authentication, and a modern Material UI interface.

## Structure

- `backend/` - Express API and MongoDB models
- `frontend/` - React UI

## Features

- Register and login with JWT
- List, view, create, update, and delete courses
- Modern responsive UI
- Environment-based configuration
- Stateless backend API
- stdout/stderr logging only

## Course fields

- Title
- Details
- Semester
- Enroll status

## Backend

### Environment variables

Copy `backend/.env.example` to `backend/.env` and set values:

- `PORT`
- `MONGODB_URI`
- `JWT_SECRET`
- `JWT_EXPIRES_IN`
- `CORS_ORIGIN`

### Scripts

From `backend/`:

- `npm install`
- `npm run dev`
- `npm start`

## Frontend

### Environment variables

Create `frontend/.env`:

- `VITE_API_BASE_URL=http://localhost:5000`

### Scripts

From `frontend/`:

- `npm install`
- `npm run dev`
- `npm run build`

## 12-factor alignment

This project follows the app-facing parts of 12-factor guidance:

- Config in environment variables
- Explicit dependency declarations
- Stateless API process
- Logs written to stdout/stderr
- Local dev and production-like run commands documented


## API

- `POST /auth/register`
- `POST /auth/login`
- `GET /courses`
- `GET /course/:id`
- `GET /course?id=...`
- `POST /course`
- `PUT /course/:id`
- `DELETE /course/:id`

All course endpoints require a bearer token in `Authorization: Bearer <token>`.
