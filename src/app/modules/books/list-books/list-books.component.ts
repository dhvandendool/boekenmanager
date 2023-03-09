import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BookService } from '../book.service';
import { Book } from '../book.model';
import { BookState } from '../book.state';
import { selectBookListPageViewModel } from '../book.selector';

@Component({
  selector: 'list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnDestroy {
  isLoading = false;
  books = new Array<Book>();
  error?: string;
  booksState$: Observable<BookState> = this.store.select(selectBookListPageViewModel);

  bookStateSubscription = this.booksState$.subscribe(booksState => {
    this.isLoading = booksState.loading;
    this.books = booksState.books;
  });

  constructor(private booksService: BookService, private store: Store<{ books: BookState }>) {
  }

  ngOnDestroy() {
    this.bookStateSubscription.unsubscribe();
  }
}
