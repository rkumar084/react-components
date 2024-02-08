import { useState } from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../context/booksContext";
import { useContext } from "react";


function BookShow({book}) {
  const [showEdit, setShowEdit] = useState(false);
  const { onDelete, onEdit } = useContext(BooksContext);

  const handleDelete = () => {    
    onDelete(book.id);
  };

  const onEditClick = () => {
    //console.log("handle edit");
    setShowEdit(!showEdit);
  };

  const onEditSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  let content = <div>Title: {book.title}</div>;

  if (showEdit) {
    content = <BookEdit book={book} onEditSubmit={onEditSubmit} />;
  }

  return (
    <div >
      <div>Id: {book.id}</div>
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      {content}
      <button onClick={handleDelete}>Delete!</button>
      <button onClick={onEditClick}>Edit!</button>
    </div>
  );
}

export default BookShow;
