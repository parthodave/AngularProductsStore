import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-register-user-for-validation',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './register-user-for-validation.component.html',
  styleUrl: './register-user-for-validation.component.css'
})
export class RegisterUserForValidationComponent {
  onSubmit(form: any) {
    if (form.valid) {     
      console.log('Form Submitted:', form.value);
    }
    else{
      alert("Please fill the form");
    }
  }


}
