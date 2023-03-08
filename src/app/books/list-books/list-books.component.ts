import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BooksService } from '../books.service';
import { Book } from '../book.model';
import { BooksState } from '../book.state';
import { selectBookListPageViewModel } from '../books.selector';

@Component({
  selector: 'list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {
  isLoading = false;
  books = new Array<Book>();
  booksState: Observable<BooksState> = this.store.select(selectBookListPageViewModel);

  constructor(private booksService: BooksService, private store: Store<{ books: BooksState }>) { }

  ngOnInit(): void {
    this.booksState.subscribe(booksState => {
      this.isLoading = booksState.loading;
      this.books = booksState.books;
    });
  }

}
