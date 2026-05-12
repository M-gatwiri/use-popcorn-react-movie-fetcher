# 🍿 UsePopcorn – Movie Fetcher App

A modern React application that allows users to search for movies, view detailed information, and explore film data in a clean and responsive UI. The app fetches real-time movie data from an external API and demonstrates the use of React hooks, state management, and reusable components.

🔗 **Live Demo:** https://use-popcorn-react-movie-fetcher.vercel.app/

---

## 🚀 Features

- 🔍 Search for movies by title
- 🎬 View detailed movie information (title, poster, rating, summary, etc.)
- 📡 Fetch real-time data from a movie API
- 💾 Add movies to a personal watched list (if implemented)
- ⚡ Fast and responsive UI
- 📱 Mobile-friendly design
- 🧠 Built using reusable React components

---

## 🛠️ Tech Stack

- React (Vite / CRA depending on setup)
- JavaScript (ES6+)
- CSS3
- REST API (movie data source)
- React Hooks (useState, useEffect, custom hooks if used)

---

## 📁 Project Structure
use-popcorn-react-movie-fetcher/
├── public/
│ └── index.html
│
├── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── Logo.jsx
│ │ ├── SearchBar.jsx
│ │ ├── MovieList.jsx
│ │ ├── MovieItem.jsx
│ │ ├── MovieDetails.jsx
│ │ └── WatchedSummary.jsx
│ │
│ ├── hooks/
│ │ └── useMovies.js
│ │
│ ├── App.jsx
│ ├── main.jsx
│ ├── index.css
│ └── data/ (if applicable)
│
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md


---

## ⚙️ How It Works

1. User enters a movie name in the search bar
2. App sends a request to the movie API
3. Results are displayed dynamically
4. Clicking a movie shows more details
5. (Optional) Movies can be added to a watched list stored in state/localStorage

---

## 📦 Installation (For Local Setup)

```bash
# Clone the repository
git clone https://github.com/your-username/use-popcorn-react-movie-fetcher.git

# Navigate into the project
cd use-popcorn-react-movie-fetcher

# Install dependencies
npm install

# Run the development server
npm run dev

## 🌐 Deployment

This project is deployed on Vercel:

👉 https://use-popcorn-react-movie-fetcher.vercel.app/

## 📌 What I Learned

- Working with React hooks (`useState`, `useEffect`)
- Fetching and handling API data
- Component-based architecture
- State lifting and props management
- Building responsive UI layouts
- Deploying a React app using Vercel

---

## ✨ Future Improvements

- Add authentication for user accounts  
- Save watched movies permanently (backend or Firebase)  
- Add movie trailers (YouTube API integration)  
- Improve UI animations and loading skeletons  
- Filter movies by genre and rating  

---

## 👨‍💻 Author

**Mercy Gatwiri**  
Frontend Developer (React)

GitHub: https://github.com/M-gatwiri

---

## 📄 License

This project is open-source.