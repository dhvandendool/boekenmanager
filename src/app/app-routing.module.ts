import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BooksComponent} from "./books/list-book/books.component";
import {AddBookComponent} from "./books/add-book/add-book.component";

const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'books/add', component: AddBookComponent },
  { path: '', redirectTo: '/books', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
