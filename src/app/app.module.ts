import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { RouterOutlet, TitleStrategy } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BookModule } from './modules/books/book.module';
import { MatNativeDateModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { BookService } from './modules/books/book.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './modules/books/book.effects';
import { PageTitleStrategy } from './core/strategies/page-title-strategy';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    BookModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot([]),
    EffectsModule.forRoot([BookEffects])
  ],
  providers: [
    BookService,
    MatSnackBar,
    // use custom title strategy to prefix titles with 'boeken manager'
    { provide: TitleStrategy, useClass: PageTitleStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
