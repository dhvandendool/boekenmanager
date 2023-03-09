import { Component, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { BookActions } from './modules/books/book.actions';
import { BookState } from './modules/books/book.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  private getAllBookErrorActionSubscription = this.actions$.pipe(ofType(BookActions.errorGetAll))
    .subscribe((data) => {
      const errorMsg = `Fout bij het ophalen van de boeken: ${data.error.message}`;
      this.matSnackBar.open(errorMsg, undefined, {duration: 5000});
    });

  constructor(private actions$: Actions, store: Store<{ books: BookState }>, private matSnackBar: MatSnackBar) {
    store.dispatch(BookActions.beginGetAll());
  }

  ngOnDestroy() {
    this.getAllBookErrorActionSubscription.unsubscribe();
  }

  title = 'Boeken manager';
}
