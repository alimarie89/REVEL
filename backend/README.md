# Backend

The server that powers REVEL. This handles:
- **API endpoints** that the frontend calls to get data
- **Admin Dashboard** where your team updates workshops, facilitators, schedules
- **Database** where all the data is stored

## What is Node.js + Express?

**Node.js** = JavaScript running on a server (not in a browser)  
**Express** = A framework that makes it easy to build APIs and web services

## Folder Structure

```
backend/
├── routes/            # API endpoints (/api/workshops, /api/facilitators, etc.)
├── controllers/       # Logic for handling requests
├── models/            # Database structure
├── public/            # Admin dashboard files (HTML/CSS/JS)
├── package.json       # Dependencies
└── server.js          # Main server file
```

## Key Concepts

- **API Endpoints** = URLs that the frontend calls to get data
- **Routes** = Maps requests to the right handler
- **Controllers** = Contains the logic
- **Models** = Defines your data structure (workshops, facilitators, etc.)

## Setup

1. Run: `npm install`
2. Run: `npm run dev` (starts your backend server on port 5000)
