import BookCreate from "./components/BookCreate";
import BooksGrid from "./components/BooksGrid";
import BooksContext from "./context/booksContext";
import { useContext } from "react";

function BookOpsApp() {
  const { onClear } = useContext(BooksContext);

  return (
    <div>
      <div>
        <BookCreate />
        <button onClick={onClear}>Clear!</button>
        <BooksGrid />
      </div>
    </div>
  );
}

export default BookOpsApp;
