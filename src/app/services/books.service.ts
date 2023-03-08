import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {EMPTY, Observable } from "rxjs";
import {Book} from "../models/book.model";

@Injectable()
export class BooksService {
  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>('./assets/books.json');
  }

  public add(book: Book) {
    console.log('Book is added');
    return EMPTY;
  }
}

