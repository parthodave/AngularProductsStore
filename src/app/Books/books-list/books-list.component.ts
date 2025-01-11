import { Books } from '../../Models/Books';
import { Component } from '@angular/core';
import { User } from '../../Models/User';
import { AuthServiceService } from '../../Service/auth.service';
import { CommonModule } from '@angular/common';
import { BookService } from '../../Service/book.service';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent {
Books : Books[] = [];

constructor(private authService : BookService ){

}

ngOnInit(){
  this.authService.GetBooks().subscribe({
    next: (books) => {
      debugger;
      this.Books = books;
    },
    error: (err) => {
      console.log(err);
    }
  });
}


}
