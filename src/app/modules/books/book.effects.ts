import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { BookService } from './book.service';
import { Book } from './book.model';
import { BookActions } from './book.actions';

@Injectable()
export class BookEffects {
  constructor(private bookService: BookService, private action$: Actions) {}

  GetBooks$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(BookActions.beginGetAll),
      mergeMap(() =>
        this.bookService.getAll().pipe(
          map((data: Book[]) => {
            return BookActions.successGetAll({ books: data });
          }),
          catchError((error: Error) => {
            return of(BookActions.errorGetAll({ error: error }));
          })
        )
      )
    )
  );

  CreateBooks$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(BookActions.beginAddBook),
      mergeMap(action =>
        this.bookService.add(action.book).pipe(
          map((data: Book) => {
            return BookActions.successAddBook({ book: data });
          }),
          catchError((error: Error) => {
            return of(BookActions.errorAddBook({ error: error }));
          })
        )
      )
    )
  );
}
