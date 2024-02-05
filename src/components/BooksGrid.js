import BookShow from "./BookShow";

function BooksGrid({ books, onDelete, onEdit}) {
  const renderedBooks = books.map((book) => (
    <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit}/>
  ));

  return <div>{renderedBooks}</div>;
}

export default BooksGrid;
