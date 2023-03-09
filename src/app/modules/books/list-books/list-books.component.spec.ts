import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBooksComponent } from './list-books.component';
import { BookService } from '../book.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MatTableModule } from '@angular/material/table';

describe('ListBooksComponent', () => {
  let component: ListBooksComponent;
  let fixture: ComponentFixture<ListBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListBooksComponent],
      imports: [HttpClientTestingModule, MatTableModule],
      providers: [
        BookService,
        provideMockStore({})
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
