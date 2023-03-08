import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BooksModule } from './books/books.module';
import { MatNativeDateModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { BooksService } from './books/books.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './books/book.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterOutlet,
    MatNativeDateModule,
    MatTableModule,
    MatToolbarModule,
    BooksModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot([]),
    EffectsModule.forRoot([BookEffects])
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
