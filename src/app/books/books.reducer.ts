import { Action, createReducer, on } from '@ngrx/store';
import * as BookActions from './book.action';
import { Book } from './book.model';
import { BookState, initializeState } from './book.state';

const initialState = initializeState();

const reducer = createReducer(
  initialState,
  on(BookActions.GetBookAction, state => state),
  on(BookActions.CreateBookAction, (state: BookState, book: Book) => {
    return { ...state, books: [...state.books, book], bookError: null };
  }),

  on(BookActions.SuccessGetBookAction, (state: BookState, { payload }) => {
    return { ...state, books: payload, bookError: null };
  }),
  on(BookActions.SuccessCreateBookAction, (state: BookState, { payload }) => {
    return { ...state, books: [...state.books, payload], bookError: null };
  }),
  on(BookActions.ErrorBookAction, (state: BookState, error: Error) => {
    return { ...state, bookError: error };
  })
);

export function BookReducer(
  state: BookState | undefined,
  action: Action
): BookState {
  return reducer(state, action);
}
