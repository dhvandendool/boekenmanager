import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Location} from "@angular/common";

@Component({
  selector: 'add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  minDate: Date;
  maxDate: Date;
  addBookForm!: FormGroup;

  constructor(private fb: FormBuilder, private location: Location) {
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
    console.log(this.addBookForm.value);
  }

  goBack() {
    this.location.back();
  }
}
