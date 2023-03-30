const SearchBar = ({
  search,
  setSearch,
  maxLength,
  setMaxLength,
  direction,
  setDirection,
}) => {
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const maxLengthHandler = (e) => {
    setMaxLength(e.target.value);
  };

  const sortDirectionHandler = () => {
    setDirection("asc");
  };

  return (
    <>
      <label htmlFor="search">Search Query</label>
      <input
        type="text"
        name="search"
        onChange={searchHandler}
        value={search}
      />
      <label htmlFor="max-length">Max Length</label>
      <input
        type="number"
        name="max-length"
        onChange={maxLengthHandler}
        value={maxLength}
      />
      <button name="sort-direction" onClick={sortDirectionHandler}>
        {direction === "asc" ? "Sort Descending" : "Sort Ascending"}
      </button>
    </>
  );
};

export default SearchBar;

// const sorted Movies= [...movies]
// if (direction ==='asc') {
// sortedMovies.sort((a,b) => b.length-a.length) setDirection('desc');
// } else {
// sortedMovies.sort((a,b) = a.length-b.length) setDirection('asc')
// setSortedMovies (sorted Movies);
