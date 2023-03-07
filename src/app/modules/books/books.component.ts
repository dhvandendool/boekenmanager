import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books = [
    { title: 'Book 1', author: 'Author 1', publicationDate: '2022-01-01' },
    { title: 'Book 2', author: 'Author 2', publicationDate: '2022-02-01' },
    { title: 'Book 3', author: 'Author 3', publicationDate: '2022-03-01' },
    { title: 'Book 4', author: 'Author 4', publicationDate: '2022-04-01' },
    { title: 'Book 5', author: 'Author 5', publicationDate: '2022-05-01' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
