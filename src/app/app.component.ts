import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookActions } from './books/book.actions';
import { BooksState } from './books/book.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(store: Store<{ books: BooksState }>) {
    store.dispatch(BookActions.beginGetAll());
  }

  title = 'Boeken manager';
}
