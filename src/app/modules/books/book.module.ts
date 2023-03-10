import { NgModule } from '@angular/core';
import { ListBooksComponent } from './list-books/list-books.component';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { AddBookComponent } from './add-book/add-book.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { bookFeature } from './book.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    MatTableModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatInputModule,
    CommonModule,
    RouterLink,
    MatProgressSpinnerModule,
    StoreModule.forFeature(bookFeature),
  ],
  declarations: [ListBooksComponent, AddBookComponent]
})
export class BookModule {
}
