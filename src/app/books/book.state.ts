import { Book } from './book.model';

export interface BookState {
  Books: Array<Book>;
  BookError: Error | null;
}

export const initializeState = (): BookState => {
  return { Books: Array<Book>(), BookError: null };
};
