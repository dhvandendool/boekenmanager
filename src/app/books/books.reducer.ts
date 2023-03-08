import { createFeature, createReducer, on } from '@ngrx/store';
import { BooksState } from './book.state';
import { BookActions } from './book.actions';

export const initialState: BooksState = {
  books: [],
  loading: false,
};

export const booksFeature = createFeature({
  name: 'books',
  reducer: createReducer(
    initialState,
    on(BookActions.beginGetAll, (state) => ({
      ...state,
      loading: true,
    })),
    on(BookActions.successGetAll, (state, { books }) => ({
      ...state,
      books,
      loading: false,
    })),
    on(BookActions.beginAddBook, (state, { book }) => ({
      ...state,
      book,
      loading: true
    })),
    on(BookActions.sucessAddBook, (state, {book }) => ({
      ...state,
      books: [...state.books, book],
      loading: false
    }))
  )
});

export const { name } = booksFeature;
