import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {RouterOutlet} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {BooksModule} from "./modules/books/books.module";
import { RouterModule, Routes } from '@angular/router'
import {BooksComponent} from "./modules/books/books.component";
import { AddBookComponent } from './modules/books/add-book/add-book.component';

const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: '', redirectTo: '/books', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterOutlet,
    RouterModule.forRoot(routes),
    MatTableModule,
    MatToolbarModule,
    BooksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
