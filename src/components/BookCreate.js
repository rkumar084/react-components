import { useState } from 'react';
import BooksContext from "../context/booksContext";
import { useContext } from "react";

function BookCreate() {
  const[title, setTitle]  = useState('');
  const { onCreate } = useContext(BooksContext);

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={title} onChange={handleChange} />       
        <button>Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;
