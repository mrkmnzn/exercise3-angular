import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})

export class BookService {


  books: Book[] = [{
    id: 1,
    name: 'Book1',
    authors: ['mark','christian'],
    isbn: '123456789X'
  },
  {
    id: 2,
    name: 'Book2',
    authors: ['john'],
    isbn: '9876543219'
  }
]

  constructor() { }

   
  getBooks(){
    console.log(this.books);

    return this.books;
    
  }
}

