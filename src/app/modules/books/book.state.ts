import { Book } from './book.model';

export interface BookState {
  books: Book[];
  loading: boolean;
}
