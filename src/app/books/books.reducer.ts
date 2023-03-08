import { Action, createReducer, on } from '@ngrx/store';
import * as BookActions from './book.action';
import { Book } from './book.model';
import { BookState, initializeState } from './book.state';

const initialState = initializeState();

const reducer = createReducer(
  initialState,
  on(BookActions.GetBookAction, state => state),
  on(BookActions.CreateBookAction, (state: BookState, book: Book) => {
    return { ...state, Books: [...state.Books, book], BookError: null };
  }),

  on(BookActions.SuccessGetBookAction, (state: BookState, { payload }) => {
    return { ...state, Books: payload, BookError: null };
  }),
  on(BookActions.SuccessCreateBookAction, (state: BookState, { payload }) => {
    return { ...state, Books: [...state.Books, payload], BookError: null };
  }),
  on(BookActions.ErrorBookAction, (state: BookState, error: Error) => {
    // remove below line and use different telemetry logging
    console.error(error);
    return { ...state, BookError: error };
  })
);

export function BookReducer(
  state: BookState | undefined,
  action: Action
): BookState {
  return reducer(state, action);
}
