import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./Container.css";

const Container = (props) => {
  return (
    <div className='container'>
      {props.movies.map((movie) => (
        <MovieCard key={movie.title} data={movie} />
      ))}
    </div>
  );
};

export default Container;
