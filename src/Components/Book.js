const Book = (props) => {
  return (
    <div
      style={{
        padding: "20px 30px",
        // backgroundColor: "#e6fe00",
        color: "#5c6bc0"
      }}
    >
      <h1>
        {props.data.title} by {props.data.author}
      </h1>
      <p>Published by {props.data.publisher}</p>
      <p>Genre: {props.data.genre}</p>
      <button onClick={props.resetState}>Back to list</button>
    </div>
  );
};

export default Book;
