import "./styles.css";
import Book from "./Components/Book";
import Books from "./Components/Books";
import Error from "./Components/Error";
import Loading from "./Components/Loading";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [bookData, setBookData] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [error, setError] = useState(false);

  const resetState = () => {
    setBookData([]);
    setSelectedBook(null);
    setLoading(true);
    setError(false);
    getBookData();
  };

  const getBookData = (id = null) => {
    setLoading(true);

    let actualId = "";

    if (!!id && parseInt(id, 10) > 0) {
      actualId = parseInt(id, 10);
    }

    axios
      .get(`https://api.matgargano.com/books/${actualId}`)
      .then((response) => {
        setBookData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message || "No error given");
      });
  };

  useEffect(() => {
    getBookData();
  }, []);

  useEffect(() => {
    if (!!selectedBook) {
      getBookData(selectedBook);
    }
  }, [selectedBook]);

  return (
    <div className="App">
      {!!error && <Error resetState={resetState} message={error} />}
      {!error && (
        <>
          {!!loading && <Loading />}
          {!loading && (
            <div>
              {/* listing of books */}
              {!selectedBook && (
                <Books setSelectedBook={setSelectedBook} data={bookData} />
              )}
              {/* lindividual book listing */}
              {!!selectedBook && (
                <Book resetState={resetState} data={bookData} />
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
