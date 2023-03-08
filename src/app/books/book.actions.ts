import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { Book } from './book.model';

export const GetBookAction = createAction('[Book] - Get Book');

export const BookActions = createActionGroup({
  source: 'Books',
  events: {
    'Begin get all': emptyProps(),
    'Success get all': props<{ books: Array<Book> }>(),
    'Error get all': props<Error>(),
    'Begin add book': props<{ book: Book }>(),
    'Sucess add book': props<{ book: Book }>(),
    'Error book': props<Error>()
  }
});
