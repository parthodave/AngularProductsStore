import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookService } from '../../Service/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
booksForm : FormGroup;

constructor( private formBuilder: FormBuilder, private router: Router, private bookService: BookService) {
  this.booksForm = this.formBuilder.group({
      BookName: ['', Validators.required],
      BookAuthor: ['', Validators.required]     
    });
}

OnSubmit() {
  if(this.booksForm.invalid){
    return;
  }

const formData = this.booksForm.value;
this.bookService.AddBook(formData.BookName, formData.BookAuthor)
  .subscribe({
    next:(res) => {
      if(res){
        debugger;
        alert('Book Added Successfully');
      }
    },
    error:(error) => {
      console.log(error);
      alert('error');
    },
    complete:() => {
    }
  });

}




}
