import { Component } from '@angular/core';
import { User } from '../../Models/User';
import { AuthServiceService } from '../../Service/auth.service';
import { CommonModule } from '@angular/common';
import { BookService } from '../../Service/book.service';
import { Book } from '../../Models/Book';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent {
Books : Book[] = [];

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


}
