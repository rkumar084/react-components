import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BooksGrid from "./components/BooksGrid";

function BookOpsApp() {
  const [books, setBooks] = useState([]);

  const onCreate = (title) => {
    //console.log(books.length);
    setBooks([...books, {id:Math.round(Math.random()*10000), title}]);
  };

  const onDelete = (id) => {
    console.log('deleting book id: ' + id);
    const updatedBooks = books.filter((book) => {return id !== book.id;});
    setBooks(updatedBooks);
  };

  const onEdit = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  const onClear = () => {    
    setBooks([]);
  };

  return (
    <div>      
      <div>
        <BookCreate onCreate={onCreate} />
        <button onClick={onClear}>Clear!</button>
        <BooksGrid books={books} onDelete={onDelete} onEdit={onEdit}/>
      </div>
    </div>
  );
}

export default BookOpsApp;
