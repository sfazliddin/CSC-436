import React, { useEffect, useState } from 'react';
import Movies from './components/Movies';
import SearchBar from './components/SearchBar';
import movieData from './utils/movies';


function App() {

  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [maxLength,setMaxLength]=useState(0);

  useEffect(()=>{
    const moviesClone=[...movieData];
    const filteredMovies=moviesClone.filter(movie=>{
      return movie.title.toUpperCase().includes(search.toUpperCase())&&
      ([NaN,0].includes(parseInt(maxLength,10))||parseInt(maxLength,10)>=movie.length);
    })
    setMovies(filteredMovies)

  },[search, maxLength]);

  


  return (
    <>
      {/* Header Bar for Searching */}
      <SearchBar 
      search={search} 
      setSearch={setSearch}
      maxLength={maxLength}
      setMaxLength={setMaxLength} />
      {/* Output the Movies */}
      <Movies movies={movies} />
    </>
  )
}

export default App