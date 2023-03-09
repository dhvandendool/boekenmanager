import { createFeature, createReducer, on } from '@ngrx/store';
import { BookState } from './book.state';
import { BookActions } from './book.actions';

export const initialState: BookState = {
  books: [],
  loading: false
};

export const bookFeature = createFeature({
  name: 'books',
  reducer: createReducer(
    initialState,
    on(BookActions.beginGetAll, (state) => ({
      ...state,
      loading: true
    })),
    on(BookActions.successGetAll, (state, {books}) => ({
      ...state,
      books,
      loading: false
    })),
    on(BookActions.beginAddBook, (state, {book}) => ({
      ...state,
      book,
      loading: true
    })),
    on(BookActions.successAddBook, (state, {book}) => ({
      ...state,
      books: [...state.books, book],
      loading: false
    })),
    on(BookActions.errorAddBook, BookActions.errorGetAll,
      (state) => ({
        ...state,
        loading: false,
      }))
  )
});

export const {name} = bookFeature;
