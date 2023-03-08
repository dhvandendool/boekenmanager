import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as BookActions from './book.action';
import { BooksService } from './books.service';
import { Book } from './book.model';

@Injectable()
export class BookEffects {
  constructor(private bookService: BooksService, private action$: Actions) {}

  GetBooks$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(BookActions.BeginGetBookAction),
      mergeMap(() =>
        this.bookService.getAll().pipe(
          map((data: Book[]) => {
            return BookActions.SuccessGetBookAction({ payload: data });
          }),
          catchError((error: Error) => {
            return of(BookActions.ErrorBookAction(error));
          })
        )
      )
    )
  );

  CreateBooks$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(BookActions.BeginCreateBookAction),
      mergeMap(action =>
        this.bookService.add(action.payload).pipe(
          map((data: Book) => {
            return BookActions.SuccessCreateBookAction({ payload: data });
          }),
          catchError((error: Error) => {
            return of(BookActions.ErrorBookAction(error));
          })
        )
      )
    )
  );
}
