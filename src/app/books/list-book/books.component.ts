import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BooksService } from '../books.service';
import { Book } from '../book.model';
import { BookState } from '../book.state';

@Component({
  selector: 'list-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  isLoading = false;
  books = new Array<Book>();
  booksError: Error | null = null;
  booksState: Observable<BookState> = this.store.select(state => state.books);

  constructor(private booksService: BooksService, private store: Store<{ books: BookState }>) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.booksState.subscribe(booksState => {
      this.isLoading = false;
      this.booksError = booksState.BookError
      this.books = booksState.Books;
    });
  }

}
