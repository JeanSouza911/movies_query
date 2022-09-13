import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

import "./MoviesGrid.css"

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([])

  const getPopularMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    setPopularMovies(data.results)
  };

  useEffect(() => {

    const popularUrl = `${moviesURL}popular?${apiKey}`;

    getPopularMovies(popularUrl);
  }, [])

  return (
    <div className="container">
      <h2 className="title">Filmes em alta:</h2>
      <div className="movies-container">
        {popularMovies.length === 0 && <p>Carregando...</p>}
        {popularMovies.length > 0 &&
         popularMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
}

export default Home