import { createAction, props } from '@ngrx/store';
import { Book } from './book.model';

export const GetBookAction = createAction('[Book] - Get Book');

export const CreateBookAction = createAction(
  '[Book] - Create Book',
  props<Book>()
);

export const BeginGetBookAction = createAction('[Book] - Begin Get Book');

export const SuccessGetBookAction = createAction(
  '[Book] - Sucess Get Book',
  props<{ payload: Book[] }>()
);

export const BeginCreateBookAction = createAction(
  '[Book] - Begin Create Book',
  props<{ payload: Book }>()
);

export const SuccessCreateBookAction = createAction(
  '[Book] - Sucess Create Book',
  props<{ payload: Book }>()
);

export const ErrorBookAction = createAction('[Book] - Error', props<Error>());
