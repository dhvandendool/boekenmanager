import { Book } from './book.model';

export interface BookState {
  books: Array<Book>;
  bookError: Error | null;
}

export const initializeState = (): BookState => {
  return { books: Array<Book>(), bookError: null };
};
