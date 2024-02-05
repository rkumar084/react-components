import { useState } from 'react';

function BookEdit({book, onEdit}) {
  const[title, setTitle]  = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onEdit(book.id, title);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>New Title</label>
        <input value={title} onChange={handleChange} />       
        <button>Update!</button>
      </form>
    </div>
  );
}

export default BookEdit;
