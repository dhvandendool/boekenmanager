import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { Book } from '../book.model';
import { Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { first } from 'rxjs';
import { BookActions } from '../book.actions';
import { BookState } from '../book.state';

@Component({
  selector: 'add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnDestroy {
  minDate: Date;
  maxDate: Date;
  error?: string;

  addBookForm = this.fb.group({
    titel: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    auteur: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    publicatiedatum: new FormControl<Date | null>(null, [Validators.required])
  });

  private dutchLocale = 'nl-NL';
  private createBookSuccessActionSubscription = this.actions$.pipe(ofType(BookActions.successAddBook), first())
    .subscribe(() => {
      return this.router.navigate(['../']);
    });

  private createBookErrorActionSubscription = this.actions$.pipe(ofType(BookActions.errorAddBook))
    .subscribe((data) => {
      this.error = `Fout bij het aanmaken van een nieuw boek: ${data.error.message}`;
    });

  constructor(private fb: FormBuilder,
              private location: Location,
              private router: Router,
              private store: Store<{ books: BookState }>,
              private actions$: Actions) {
    const currentDate = new Date();
    this.minDate = new Date(1500, 1, 1);
    this.maxDate = new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), currentDate.getDay());
  }

  ngOnDestroy() {
    // unsubscribe in case the user goes back without submitting.
    this.createBookSuccessActionSubscription.unsubscribe();
    this.createBookErrorActionSubscription.unsubscribe();
  }

  onSubmit(event: MouseEvent) {
    event.preventDefault();
    if (this.addBookForm.invalid) {
      return;
    }
    const formValue = this.addBookForm.value;
    const book: Book = {
      titel: formValue.titel || '',
      auteur: formValue.auteur || '',
      publicatiedatum: formValue.publicatiedatum ? formValue.publicatiedatum.toLocaleDateString(this.dutchLocale) : ''
    };

    this.error = undefined;
    this.store.dispatch(BookActions.beginAddBook({book: book}));
  }

  goBack() {
    this.location.back();
  }

  // ! is used to explicitly tell typescript compiler that controls are never null since they are created on class creation
  get titel() {
    return this.addBookForm.get('titel')!;
  }

  get auteur() {
    return this.addBookForm.get('auteur')!;
  }

  get publicatiedatum() {
    return this.addBookForm.get('publicatiedatum')!;
  }
}
