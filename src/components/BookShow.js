import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDelete = () => {    
    onDelete(book.id);
  };

  const onEditClick = () => {
    console.log("handle edit");
    setShowEdit(!showEdit);
  };

  const onEditSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  let content = <div>Title: {book.title}</div>;

  if (showEdit) {
    content = <BookEdit book={book} onEdit={onEditSubmit} />;
  }

  return (
    <div>
      <div>Id: {book.id}</div>
      {content}
      <button onClick={handleDelete}>Delete!</button>
      <button onClick={onEditClick}>Edit!</button>
    </div>
  );
}

export default BookShow;
