# How REVEL Works

## The Flow (How data moves through your app)

```
Your Team Member
    ↓
Updates Admin Dashboard (backend/public)
    ↓
Admin Dashboard sends new data to Backend API
    ↓
Backend stores data & sends back confirmation
    ↓
Frontend (React website) fetches latest data from API
    ↓
Website visitors see updated workshops/schedules
```

## Example: Adding a New Workshop

1. **Team member logs into admin dashboard** (at yoursite.com/admin)
2. **Clicks "Add Workshop"**, fills form (name, date, facilitator)
3. **Submits form** → sends data to `POST /api/workshops` endpoint
4. **Backend receives it**, stores in database
5. **Frontend queries** `GET /api/workshops` → gets updated list
6. **Website refreshes** → shows new workshop instantly

No manual HTML editing. No syncing with Google Sheets. One source of truth!

## What Each Folder Does

| Folder | Purpose | Example |
|--------|---------|---------|
| `frontend/` | Public-facing website visitors use | Browse workshops, view schedule |
| `backend/` | Server & admin tools | Store data, admin dashboard |
| `backend/routes/` | API endpoints | `/api/workshops`, `/api/facilitators` |
| `frontend/src/pages/` | Full pages | Home, Schedule, About |
| `frontend/src/components/` | Reusable buttons, cards | WorkshopCard, EventList |

## Files You'll Edit Most Often

- **Add new data type?** Create file in `backend/routes/` (e.g., `facilitators.js`)
- **Style the website?** Edit `frontend/src/*.css`
- **Change what appears on homepage?** Edit `frontend/src/pages/Home.jsx`
- **Add a database table?** Edit `backend/models/`

## Set Up & Running (Next Steps)

You'll need to:

1. Install Node.js (one-time)
2. Run `npm install` in both `frontend/` and `backend/` folders
3. Run `npm run dev` in both folders (in separate terminals)
4. Visit `http://localhost:3000` to see your website

The frontend will talk to the backend, which serves up the workshop data!
