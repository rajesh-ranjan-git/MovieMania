# MovieMania

Welcome to MovieMania! This is a Movie & TV Show hub built with React and Vite, powered by The Movie Database (TMDB) API.

## Live URL : https://app-moviemania.netlify.app

```bash
https://app-moviemania.netlify.app
```

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Installation Guide](#installation-guide)
- [Environment Variables](#environment-variables)
- [Usage Instructions](#usage-instructions)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [Author](#author)

## Project Overview

MovieMania lets users browse Popular, Trending, Upcoming, Now Playing, On Air, Similar, and Recommended movies and TV shows, view details, and watch trailers — all backed by the TMDB API.

## Features

- **Browse by Category:** Popular, Trending, Upcoming, Now Playing, On Air sections for Movies and TV Shows.
- **Search & Filter:** Search bar with filtering of result cards.
- **Trailers:** Watch trailers embedded via YouTube.
- **Infinite Scrolling:** Debounced infinite scroll to reduce redundant API calls.
- **Similar & Recommended:** Related content suggestions on details pages.
- **Reusable Patterns:** Custom Hooks, Higher Order Components, Controlled/Uncontrolled carousel components, and state lifting.

## Tech Stack

- **Frontend:** React, Vite, JSX, Tailwind CSS
- **State Management:** Redux Toolkit, React Redux
- **HTTP Client:** Axios
- **Routing:** React Router DOM
- **Data Source:** [TMDB API](https://www.themoviedb.org/documentation/api)

## Folder Structure

```bash
MovieMania/
├── public/
├── src/
│   ├── Assets/            # Static assets
│   ├── Components/         # Reusable UI components (Banner, Header, MovieCard, TrailerPlayer, etc.)
│   ├── Constants/          # Navigation and other constants
│   ├── CustomHooks/        # useFetch / useFetchDetails hooks
│   ├── Pages/              # Route-level pages (Home, ExplorePage, SearchPage, DetailsPage, Error)
│   ├── Routes/             # App route definitions
│   ├── Store/              # Redux store and slice
│   └── main.jsx            # App entry point (Axios/TMDB setup)
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## Installation Guide

### Prerequisites

- Node.js (v16 or later)
- npm
- A TMDB account with an API Read Access Token

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/rajesh-ranjan-git/MovieMania.git
   cd MovieMania
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables (see below), then start the development server:

   ```bash
   npm run dev
   ```

4. The app should now be running at the local URL printed by Vite (typically http://localhost:5173).

## Environment Variables

Create a `.env` file in the root directory with:

```bash
VITE_MOVIEMANIA_ACCESS_TOKEN=<your-tmdb-api-read-access-token>
```

## Usage Instructions

1. Browse movies and TV shows by category on the home page.
2. Use the search bar to find specific titles.
3. Open a title's details page to view info, cast, trailers, and recommendations.

## Scripts

| Script            | Description                          |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start the Vite development server     |
| `npm run build`   | Build the app for production          |
| `npm run preview` | Preview the production build locally  |
| `npm run lint`    | Run ESLint over the project           |

## Deployment

Deployed on Netlify at https://app-moviemania.netlify.app.

## Roadmap

- Add authentication and authorization.
- Add a favorites feature.

## Author

- **Rajesh Ranjan** — [GitHub @rajesh-ranjan-git](https://github.com/rajesh-ranjan-git)

---
