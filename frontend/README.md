# Frontend

The public-facing website built with React. Visitors use this to browse workshops, schedules, and information.

## What is React?

React is a JavaScript framework that makes it easy to:
- Break your site into reusable **components** (like widgets)
- Automatically update the page when data changes
- Build interactive features

## Folder Structure

```
frontend/
├── src/               # Your code
│   ├── components/    # Reusable pieces (Header, EventCard, etc.)
│   ├── pages/         # Full pages (Home, Schedule, etc.)
│   ├── App.jsx        # Main component
│   └── main.jsx       # Setup file
├── public/            # Static files (images, fonts, etc.)
├── package.json       # Lists dependencies
└── vite.config.js     # Build configuration
```

## Key Concepts

- **Components** = reusable pieces of UI (like a building block)
- **State** = data that can change (like event list)
- **Props** = data passed from parent to child component

## Setup (you'll do this interactively)

1. Install Node.js (one-time setup)
2. Run: `npm install` (downloads all packages)
3. Run: `npm run dev` (starts your local website)
