import React, { useState, useEffect } from "react";
import Bar from "./Bar/Bar";
import Container from "./Container/Container";
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]); 

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWI2MzZmZWUyYWJlN2ZhNThjMzg0NjU4NjEwZGQzOSIsInN1YiI6IjY2NjAxMjQ2YWE3ZTk0MjI2M2YyNjNlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BGwwo3R5BkZtzpNEqees3XvUYgcbttxOlGCEWUJdXqw",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => response.results)
      .then((data) => {
        setMovies(
          data.map((element) => ({
            title: element.title,
            overview: element.overview,
            rating: element.vote_average,
            image: 'https://image.tmdb.org/t/p/w1280/' + element.poster_path,
          }))
        );
      })
      .catch((err) => console.error(err));
  }, []); 

  return (
    <div>
      <Bar />
      <Container movies={movies} />
    </div>
  );
};

export default App;