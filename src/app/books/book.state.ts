import { Book } from './book.model';

export interface BooksState {
  books: Book[];
  loading: boolean;
}
