import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Book } from './book.model';

@Injectable()
export class BookService {
  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>('./assets/books.json');
  }

  public add(book: Book) {
    // Here should come a httpclient call to the back-end
    return of(book);
  }
}

