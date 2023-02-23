import { useEffect, useState } from "react";
import axios from "axios";

const Book = ({ id, setListMode }) => {
  const [loading, setLoading] = useState(false);
  const [bookData, setBookData] = useState(null);
  useEffect(() => {
    setLoading(true);
    setBookData(null)
    // setError(null);
    const bookUrl = `https://api.matgargano.com/books/${id}`;
    axios
      .get(bookUrl)
      .then(({ data }) => {
        setBookData(data);
      })
      .catch((error) => {
        //   setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      {!!loading && <p>Loading Book Data</p>}
      {!loading && !!bookData && <div>
        <button onClick={setListMode}>Return to List</button>
        <p>Title: {bookData.title}</p>
        <p>Author: {bookData.author}</p>
        <p>Genre: {bookData.genre}</p>
        <p>Publisher: {bookData.publisher}</p>
      </div> }
    </div>
  );
};

export default Book;
