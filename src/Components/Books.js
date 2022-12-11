const Books = (props) => {
  const updateBook = (bookId) => {
    props.setSelectedBook(bookId);
  };
  return (
    <div
      style={{
        // backgroundColor: "#5c6bc0",
        color: "#5c6bc0",
        padding: "20px 10px"
      }}
    >
      {props.data.map((book) => {
        return (
          <p
            key={book.id}
            onClick={() => {
              updateBook(book.id);
            }}
            style={{ cursor: "pointer" }}
            role="button"
          >
            {book.title} by {book.author} -- {book.id}
          </p>
        );
      })}
    </div>
  );
};

export default Books;
