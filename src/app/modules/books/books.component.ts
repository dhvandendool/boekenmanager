import { Component, OnInit } from '@angular/core';
import {BooksService} from "../../services/books.service";
import {Book} from "../../models/book.model";

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  isLoading = false;
  books = new Array<Book>();

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.booksService.getAll().subscribe(books => {
      this.books = books;
      this.isLoading = false;
    })
  }

}
