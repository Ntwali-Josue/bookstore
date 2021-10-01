import axios from 'axios';

const GET_BOOKS = 'bookStore/books/GET_BOOKS';
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const fetchURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/KWzu5jmR1345eEuN2hZp/books';

const initialState = [];

export const addBook = (book) => async (dispatch) => {
  const result = await axios.post(fetchURL, {
    item_id: book.item_id,
    title: book.title,
    category: book.category,
  });
  const addedBook = await result.data;
  if (addedBook === 'Created') {
    dispatch({
      type: ADD_BOOK,
      book,
    });
  }
};

export const removeBook = (bookId) => async (dispatch) => {
  const result = await axios.delete(`${fetchURL}/${bookId}`);
  const removedBook = await result.data;
  if (removedBook) {
    dispatch({
      type: REMOVE_BOOK,
      bookId,
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.book.id);

    default:
      return state;
  }
};

export default reducer;
