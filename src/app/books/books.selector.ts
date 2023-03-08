import { createSelector } from '@ngrx/store';
import { booksFeature } from './books.reducer';

export const selectBookListPageViewModel = createSelector(
  booksFeature.selectBooks,
  booksFeature.selectLoading,
  (books, loading) => ({ books, loading })
);
