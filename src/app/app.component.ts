import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookState } from './books/book.state';
import { BeginGetBookAction } from './books/book.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(store: Store<{ books: BookState }>) {
    store.dispatch(BeginGetBookAction());
  }
  title = 'Boeken manager';
}
