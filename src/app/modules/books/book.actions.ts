import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Book } from './book.model';

export const BookActions = createActionGroup({
  source: 'Books',
  events: {
    'Begin get all': emptyProps(),
    'Success get all': props<{ books: Array<Book> }>(),
    'Error get all': props<{ error: Error }>(),
    'Begin add book': props<{ book: Book }>(),
    'Success add book': props<{ book: Book }>(),
    'Error add book': props<{ error: Error }>()
  }
});
