import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";


export enum Menu {
  BOOKS = 'BOOKS',
  USERS = 'USERS',
  GENRE = 'GENRE',
  BORROWINGS = 'BORROWINGS'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  menu = Menu;
  actualMenu: Menu = Menu.USERS;
  changeMenu(menuItem: Menu): void {
    this.actualMenu = menuItem;
  }

  persons: Array<{
    name: string;
    surname: string;
    contact: string;
  }> = [];

  books: Array<{
    name: string;
    id: string;
    author: string;
    available: string;
  }> = [];

  genre: Array<{
    name: string;
    genre: string;
  }> = [];

  borrowings: Array<{
    id: string;
    book: string;
    user: string;
  }> = [];

  constructor() {
    this.form = new FormGroup({
      name: new FormControl(),
      surname: new FormControl(),
      contact: new FormControl(),
      id: new FormControl(),
      author: new FormControl(),
      available: new FormControl(),
      book: new FormControl(),
      user: new FormControl(),
      genre: new FormControl()
    })

  }


  savePerson(): void {
    console.log('OSOBA:', this.form.value);
    this.persons.push(this.form.value);
    this.form.reset();
  }

  saveBook(): void {
    console.log('KNIHA:', this.form.value);
    this.books.push(this.form.value);
    this.form.reset();
  }

  saveGenre(): void {
    console.log('ŽÁNER:', this.form.value);
    this.genre.push(this.form.value);
    this.form.reset();
  }

  saveBorrowing(): void {
    console.log('VÝPOZICKA:', this.form.value);
    this.borrowings.push(this.form.value);
    this.form.reset();
  }
}
