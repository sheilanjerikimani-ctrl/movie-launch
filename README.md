# Movix Night — Movie Launch Website

A fictional movie-launch studio website built for the RedGiant technical assessment.

## Live Demo
- **Website:** https://movie-launch-one.vercel.app
- **API:** https://movie-launch-api-production.up.railway.app/api/films

## Screenshots

### Home
![Home](screenshots/Screenshot%202026-07-04%20125940.png)
![Home hero](screenshots/Screenshot%202026-07-04%20132358.png)

### Upcoming Launches
![Launches](screenshots/Screenshot%202026-07-04%20130043.png)
![Launches detail view](screenshots/Screenshot%202026-07-04%20130122.png)

### Film Detail
![Film Detail](screenshots/Screenshot%202026-07-04%20132613.png)

### The Company
![About](screenshots/Screenshot%202026-07-04%20132635.png)

### Stay in the Loop
![Contact](screenshots/Screenshot%202026-07-04%20132705.png)

## Stack
- Frontend: Next.js (App Router) + Tailwind CSS — this repo
- Backend: Laravel API (SQLite) — https://github.com/sheilanjerikimani-ctrl/movie-launch-api

## Setup / Run locally

### API
cd movie-launch-api
composer install
php artisan migrate --seed
php artisan serve
(runs on http://127.0.0.1:8000)

### Frontend
cd movie-launch
npm install
npm run dev
(runs on http://localhost:3000, set NEXT_PUBLIC_API_URL=http://127.0.0.1:8000/api in .env.local)

## Pages
- Home: cinematic animated hero with photo background, spotlight glow, staggered text reveal
- /launches: film list, served dynamically from the Laravel API
- /launches/[slug]: individual film detail page (synopsis, cast, date, trailer), driven by the same API
- /about: company info (premieres, campaigns, press)
- /contact: newsletter form, persisted via POST to the Laravel API with real success/error states

## Trade-offs (built under significant time pressure)
- SQLite used instead of MySQL for fast local setup
- Poster art uses thematic stock placeholders rather than custom illustration
- Two separate repositories (frontend + API) rather than a monorepo
- Focused primary effort on UI/UX polish, motion, and full-stack wiring over feature breadth
