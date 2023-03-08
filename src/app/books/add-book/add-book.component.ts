import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { Book } from '../book.model';
import { Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { first } from 'rxjs';
import { BookActions } from '../book.actions';
import { BooksState } from '../book.state';

@Component({
  selector: 'add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit, OnDestroy {
  minDate: Date;
  maxDate: Date;
  addBookForm!: FormGroup;

  private dutchLocale = 'nl-NL';
  private createBookSuccessActionSubscription = this.actions$.pipe(ofType(BookActions.sucessAddBook), first())
    .subscribe(() => {
      return this.router.navigate(['../']);
    });

  constructor(private fb: FormBuilder,
              private location: Location,
              private router: Router,
              private store: Store<{ books: BooksState }>,
              private actions$: Actions) {
    const currentDate = new Date();
    this.minDate = new Date(1500, 1, 1);
    this.maxDate = new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), currentDate.getDay());
  }

  ngOnInit() {
    this.addBookForm = this.fb.group({
      titel: ['', [Validators.required, Validators.maxLength(50)]],
      auteur: ['', [Validators.required, Validators.maxLength(50)]],
      publicatiedatum: ['', Validators.required]
    });
  }

  ngOnDestroy() {
    // unsubscribe in case the user goes back without submitting.
    this.createBookSuccessActionSubscription.unsubscribe();
  }

  onSubmit(event: MouseEvent) {
    event.preventDefault();
    if (this.addBookForm.invalid) {
      return;
    }
    const book: Book = {
      titel: this.addBookForm.value['titel'],
      auteur: this.addBookForm.value['auteur'],
      publicatiedatum: (this.addBookForm.value['publicatiedatum'] as Date).toLocaleDateString(this.dutchLocale)
    };
    this.store.dispatch(BookActions.beginAddBook({book: book}));
  }

  goBack() {
    this.location.back();
  }
}
