import { createSelector } from '@ngrx/store';
import { bookFeature } from './book.reducer';

export const selectBookListPageViewModel = createSelector(
  bookFeature.selectBooks,
  bookFeature.selectLoading,
  (books, loading) => ({books, loading})
);
