import axios from "axios";
import { useState } from "react";
import Book from "./Book";

const Books = () => {

    const BOOK_MODE='book'
    const LIST_MODE='list'
  const [books, setBooks] = useState([]);
  const [book,setBook]=useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [mode,setMode]=useState(LIST_MODE)

  const fetchBooks = () => {
    setLoading(true);
    setError(null);
    const booksUrl = "https://api.matgargano.com/books";
    axios
      .get(booksUrl)
      .then(({ data }) => {
        setBooks(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const fetchBookHandler=id=>{
    setBook(id)
    setMode(BOOK_MODE)
  }

  return (
    <div>
      {!!error && <pre>{JSON.stringify(error, 0, 1)}</pre>}
      {!!loading && <p>Loading</p>}
      {!loading && mode===LIST_MODE &&(
        <>
          <button onClick={fetchBooks}>Fetch Books</button>
          {books.length > 0 && (
            <div>
              {books.map(({ id, title, author }) => {
                return <p role={"button"} onClick={()=>fetchBookHandler(id)} key={id}>
                  {title} - {author}
                </p>;
              })}
            </div>
          )}
        </>
      )}
      {!!book && mode===BOOK_MODE&&<Book setListMode={()=>setMode(LIST_MODE)} id={book}/>}
    </div>
  );
};

export default Books;
