import BookShow from "./BookShow";
import BooksContext from "../context/booksContext";
import { useContext } from "react";
import "bulma/css/bulma.css";

function BooksGrid() {
  const { books } = useContext(BooksContext);
  const renderedBooks = books.map((book) => (
    <BookShow key={book.id} book={book}/>
  ));

  return <div className="tile">{renderedBooks}</div>;
}

export default BooksGrid;
