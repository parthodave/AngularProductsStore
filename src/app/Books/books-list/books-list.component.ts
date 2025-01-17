import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../Models/User';
import { AuthServiceService } from '../../Service/auth.service';
import { CommonModule } from '@angular/common';
import { BookService } from '../../Service/book.service';
import { Book } from '../../Models/Book';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent {
Books : Book[] = [];
searchText : string = '';

constructor(private authService : BookService ){

}

ngOnInit(){
  this.authService.GetBooks().subscribe({
    next: (booklist) => {
      this.Books = booklist;
    },
    error: (err) => {
      debugger
      console.log(err);
    }
  });
}

SearchBooks() {
  this.authService.GetBooks().subscribe({
    next: (booklist) => {
      this.Books = booklist;
      this.Books = this.Books.filter((book) => (
          book.BookName.toLowerCase().includes(this.searchText.toLowerCase()) || 
          book.BookAuthor.toLowerCase().includes(this.searchText.toLowerCase())
        )
      );
    },
    error: (err) => {
      console.log(err);
    }
  });
}

}
