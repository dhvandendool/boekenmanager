import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBooksComponent } from './modules/books/list-books/list-books.component';
import { AddBookComponent } from './modules/books/add-book/add-book.component';

const routes: Routes = [
  {
    path: 'books',
    component: ListBooksComponent,
    title: 'Boeken'
  },
  {
    path: 'books/add',
    component: AddBookComponent,
    title: 'Boek toevoegen'
  },
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
