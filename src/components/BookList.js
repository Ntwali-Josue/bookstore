import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import BookItem from './BookItem';
import AddBook from './AddBook';
import { addBook, removeBook } from '../Redux/books/books';
import store from '../Redux/cofigureStore';

const BookList = () => {
  const dispatch = useDispatch();
  const [booksData, setBooksData] = useState(store.getState().booksReducer);

  const submitBookToStore = (book) => {
    const newBook = {
      id: uuidv4(), // generate unique ID
      title: book.title,
      author: book.author,
    };
    dispatch(addBook(newBook));
    setBooksData((prevState) => [...prevState, newBook]);
  };

  const deleteBook = (book) => {
    dispatch(removeBook(book));
    const newBooks = booksData.filter((item) => item.id !== book.id);
    setBooksData(newBooks);
  };

  return (

    <div className="books">
      { booksData.map((book) => (
        <BookItem
          title={book.title}
          author={book.author}
          key={book.id}
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
