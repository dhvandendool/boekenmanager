# Boekenmanager

This Angular project displays a list view of books loaded from a json file (assets/books.json) and has functionality to add new books. These books are added to the books state and displayed in the list view.
- The project uses ngrx reducer and effect to load and add boeken. The load books action is triggered from the app component itself.
- It contains a book module with two components:
  - list-books: displays a list of books using [Angular Material Table](https://material.angular.io/components/table/overview)
  - add-books: contains a form component using [Angular Material Form fiels](https://material.angular.io/components/form-field/overview)
- Error handling is present for:
  - When loading books fails it displays message using [Angular Material Snackbar](https://material.angular.io/components/snack-bar/overview)
  - When adding a book fails it displays a form error
- User input is validated:
  - `auteur` and `titel` should not be longer than 50 characters and are required
  - `publicatiedatum` should be after 1500 and before 1  year from now
- English is used as language through the entire application except from the form control names and User Interface itself.

## Used libraries
- Angular 14
- Angular Material
- NgRX
- Jest

## Installation
Run `npm install` to install the boekenmanager

## Development server
Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running unit tests

Run `npm test` to execute the unit tests using Jest.

## Notes
- Not all components are fully unit tested
