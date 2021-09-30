import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import BookItem from '../Redux/books/BookItem';

const BookList = () => {
  const booksDetails = [
    { category: 'Action', title: 'The Hunger Games', author: 'Suzanne Collins' },
    { category: 'Economy', title: 'Capital in the Twenty', author: 'Josh the hero' },
    { category: 'Science fiction', title: 'Dune', author: 'Frank Herbert' },
  ];

  const booksCard = booksDetails.map((book) => (
    <BookItem category={book.category} title={book.title} author={book.author} key={uuidv4()} />
  ));

  return (

    <div className="books">
      {booksCard}
    </div>
  );
};

export default BookList;
