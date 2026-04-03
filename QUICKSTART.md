# Quick Start Guide

## Step 1: Install Node.js (One-time)

1. Go to https://nodejs.org
2. Download the LTS (Long Term Support) version
3. Install it (just click next through the installer)
4. Open Terminal and verify: `node --version` (should show a version number)

## Step 2: Install Dependencies

Open Terminal and run:

```bash
# Go into your REVEL folder
cd ~/Documents/REVEL

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

## Step 3: Run Both Servers

Open **two Terminal windows**:

**Terminal 1 - Frontend (React website):**
```bash
cd ~/Documents/REVEL/frontend
npm run dev
```
You should see: `VITE v... ready in ... ms`
Visit: http://localhost:3000

**Terminal 2 - Backend (API server):**
```bash
cd ~/Documents/REVEL/backend
npm run dev
```
You should see: `🚀 REVEL Backend running on http://localhost:5000`

## Step 4: See It Work!

1. Visit http://localhost:3000 in your browser
2. You'll see the homepage with example workshops
3. These workshops come from the backend API (`/api/workshops`)
4. Edit `backend/routes/workshops.js` to add more workshops
5. Website updates automatically!

## What You're Actually Seeing

- **Website (localhost:3000)** = React frontend asking the backend for data
- **Backend (localhost:5000)** = Server storing and serving workshop data

When you update data in the backend, the website automatically shows the new data. No manual editing needed!

## Troubleshooting

**"command not found: npm"**
- Node.js didn't install properly. Reinstall from nodejs.org

**"Cannot find module"**
- Run `npm install` again in that folder

**Port 3000/5000 already in use**
- Change the port in the config files

## Next Steps

Once it's running, explore:
1. Edit `frontend/src/pages/Home.jsx` - change the homepage
2. Edit `backend/routes/workshops.js` - add more workshops
3. Look at `docs/HOW_IT_WORKS.md` - understand the architecture
