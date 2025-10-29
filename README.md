# 🎬 CineVerse

**CineVerse** is a movie and TV show discovery platform built using **React + Vite**, powered by the **TMDB API**.
Users can browse popular movies, top-rated shows, search by title, view detailed info, and manage profiles with authentication and toast notifications.

---

## 🌐 Live Demo

🔗 **GitHub Pages Deployment:**
[https://abmishra-1119.github.io/Cineverse/](https://abmishra-1119.github.io/Cineverse/)

---

## 🧠 Features

✅ Browse popular, top-rated, and latest movies
✅ Discover trending TV shows
✅ Search movies and TV series
✅ View detailed information about movies/TV shows
✅ Login/Signup functionality
✅ Protected routes using **AuthGuard**
✅ Toast notifications with **React Toastify**
✅ Responsive design with **Tailwind CSS**

---

## 🧩 Tech Stack

| Category               | Tools Used      |
| ---------------------- | --------------- |
| **Frontend Framework** | React (Vite)    |
| **Routing**            | React Router v6 |
| **State Management**   | Redux Toolkit   |
| **Styling**            | Tailwind CSS    |
| **Notifications**      | React Toastify  |
| **API**                | TMDB API        |
| **Deployment**         | GitHub Pages    |

---

## 🚀 Project Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/abmishra-1119/Cineverse.git
cd Cineverse
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Start the development server

```bash
npm run dev
```

### 5️⃣ Build for production

```bash
npm run build
```

### 6️⃣ Deploy to GitHub Pages

```bash
npm run deploy
```

---

## 🛠️ Vite Config Example

```js
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/Cineverse/',
});
```

---

## 🔐 Protected Route Example

```jsx
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

const AuthGuard = () => {
  const { user } = useSelector((state) => state.users);
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthGuard;
```

---

## 📦 Folder Structure

```
Cineverse/
│
├── public/
│   └── logo.png
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── AuthGuard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Movies.jsx
│   │   ├── MovieDetail.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Profile.jsx
│   │   ├── TVSeries.jsx
│   │   ├── TvDetail.jsx
│   │   ├── SearchResults.jsx
│   │   └── PageNotFound.jsx
│   ├── redux/
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── vite.config.js
```

---

## 🎥 TMDB API References

All movie data is fetched using the [TMDB API](https://developer.themoviedb.org/docs/getting-started).
You can explore these endpoints:

| Feature              | Endpoint               | Example                                                                                  |
| -------------------- | ---------------------- | ---------------------------------------------------------------------------------------- |
| **Popular Movies**   | `/movie/popular`       | `https://api.themoviedb.org/3/movie/popular?api_key=YOUR_KEY`                            |
| **Top Rated Movies** | `/movie/top_rated`     | `https://api.themoviedb.org/3/movie/top_rated?api_key=YOUR_KEY`                          |
| **Trending Movies**  | `/trending/movie/week` | `https://api.themoviedb.org/3/trending/movie/week?api_key=YOUR_KEY`                      |
| **Discover Movies**  | `/discover/movie`      | `https://api.themoviedb.org/3/discover/movie?api_key=YOUR_KEY&sort_by=release_date.desc` |
| **TV Series**        | `/tv/popular`          | `https://api.themoviedb.org/3/tv/popular?api_key=YOUR_KEY`                               |
| **Search**           | `/search/movie`        | `https://api.themoviedb.org/3/search/movie?api_key=YOUR_KEY&query=Avengers`              |
| **Movie Details**    | `/movie/{id}`          | `https://api.themoviedb.org/3/movie/550?api_key=YOUR_KEY`                                |

---

## ⚙️ Environment Variables Example

```
VITE_TMDB_API_KEY=YOUR_TMDB_API_KEY
VITE_BASE_URL=https://api.themoviedb.org/3/
```

---

## 🧑‍💻 Author

👨‍🎨 **Abhishek Mishra**
🔗 [GitHub Profile](https://github.com/abmishra-1119)

---

> 🎬 *CineVerse – Explore. Discover. Enjoy Movies Anywhere.* 🍿
