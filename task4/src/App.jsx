import React from "react";
import { useState, useEffect } from "react";
import Movies from "./components/Movies";
import SearchBar from "./components/SearchBar";
import movieData from "./utils/movies";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [maxLength, setMaxLength] = useState("");
  const [direction, setDirection] = useState("");

  useEffect(
    () => {
      setMovies(
        movieData
          .filter((movie) => {
            return (
              movie.title.toUpperCase().includes(search.toUpperCase()) &&
              ([NaN, 0].includes(parseInt(maxLength, 10)) ||
                parseInt(maxLength, 10) > movie.length)
            );
          }).sort((a, b) => {
            if (direction === "asc") {
              setDirection("desc");
              return b.length - a.length;
            } else {
              setDirection("asc");
              return a.length - b.length;
            }
          })
      );
    },
    [search, maxLength, direction],
    []
  );

  return (
    <>
      {/* Header Bar for Searching */}
      <SearchBar
        search={search}
        setSearch={setSearch}
        maxLength={maxLength}
        setMaxLength={setMaxLength}
        direction={direction}
        setDirection={setDirection}
      />
      {/* Output the Movies */}
      <Movies movies={movies} />
    </>
  );
}

export default App;
