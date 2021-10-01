import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import BookItem from './BookItem';
import AddBook from './AddBook';
import { addBook, removeBook, displayBooks } from '../Redux/books/books';
// import store from '../Redux/cofigureStore';

const BookList = () => {
  const dispatch = useDispatch();
  const booksData = useSelector((state) => state.booksReducer);
  console.log(booksData);

  useEffect(() => {
    dispatch(displayBooks());
  }, []);

  const submitBookToStore = (book) => {
    const newBook = {
      item_id: uuidv4(), // generate unique ID
      title: book.title,
      category: book.category,
    };
    dispatch(addBook(newBook));
    // setBooksData((prevState) => [...prevState, newBook]);
  };

  const deleteBook = (book) => {
    dispatch(removeBook(book.item_id));
    dispatch(removeBook(book));
    const newBooks = booksData.filter((item) => item.id !== book.id);
    setBooksData(newBooks);
  };

  return (

    <div className="books">
      { booksData.map((book) => (
        <BookItem
          title={book.title}
          category={book.category}
          key={booksData.indexOf(book)}
          removeBook={() => {
            deleteBook(book);
          }}
        />
      ))}

      <AddBook submitBook={submitBookToStore} />
    </div>
  );

  // return <div className="books">{booksCard}</div>;
};

export default BookList;
