import { createContext, useState } from "react";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const onCreate = (title) => {
    //console.log(books.length);
    setBooks([...books, { id: Math.round(Math.random() * 10000), title }]);
  };

  const onDelete = (id) => {
    //console.log("deleting book id: " + id);
    const updatedBooks = books.filter((book) => {
      return id !== book.id;
    });
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

  const valueToShare = {
    books,
    onClear,
    onCreate,
    onDelete,
    onEdit,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
