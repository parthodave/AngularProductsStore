import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [ ReactiveFormsModule]
})
export class LoginComponent {
  loginForm: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.isSubmitted = true;

    if (this.loginForm.invalid) {
      console.error('Form is invalid!');
      return;
    }

    const { username, password } = this.loginForm.value;

    // Mock authentication logic
    if (username === 'admin' && password === 'password123') {
      console.log('Login successful!');
      alert('Login successful!');
      // Navigate to a dashboard or home page
      this.router.navigate(['/dashboard']);
    } else {
      console.error('Invalid credentials');
      alert('Invalid username or password.');
    }
  }

  navigateToRegister(): void {
    this.router.navigate(['/register']);
  }
}
