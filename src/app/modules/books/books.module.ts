import {NgModule} from "@angular/core";
import {BooksComponent} from "./books.component";
import {MatTableModule} from "@angular/material/table";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [MatTableModule, MatGridListModule, MatButtonModule],
  declarations: [BooksComponent]
})
export class BooksModule { }
