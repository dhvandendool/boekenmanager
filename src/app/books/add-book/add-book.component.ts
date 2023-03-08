import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { BookState } from '../book.state';
import { Book } from '../book.model';
import { BeginCreateBookAction } from '../book.action';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  minDate: Date;
  maxDate: Date;
  addBookForm!: FormGroup;
  booksState: Observable<BookState> = this.store.select(state => state.books);

  constructor(private fb: FormBuilder,
              private location: Location,
              private router: Router,
              private store: Store<{ books: BookState }>) {
    const currentDate = new Date();
    this.minDate = new Date(1500, 1, 1);
    this.maxDate = new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), currentDate.getDay());
  }

  ngOnInit(): void {
    this.addBookForm = this.fb.group({
      titel: ['', [Validators.required, Validators.maxLength(50)]],
      auteur: ['', [Validators.required, Validators.maxLength(50)]],
      publicatiedatum: ['', Validators.required]
    });
  }

  onSubmit() {
    const book: Book = {
      titel: this.addBookForm.value['titel'],
      auteur: this.addBookForm.value['auteur'],
      publicatiedatum: this.addBookForm.value['publicatiedatum']
    };
    this.createBook(book);
    //return this.router.navigate(['/books']);
  }

  createBook(book: Book) {
    this.store.dispatch(BeginCreateBookAction({payload: book}));
  }

  goBack() {
    this.location.back();
  }
}
