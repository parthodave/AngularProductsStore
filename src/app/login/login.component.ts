import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AuthServiceService } from '../Service/auth.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [ ReactiveFormsModule ,CommonModule]
})
export class LoginComponent {
  loginForm: FormGroup;
  isSubmitted = false;

  // constructor(private fb: FormBuilder, private router: Router) {
  //   this.loginForm = this.fb.group({
  //     username: ['', [Validators.required, Validators.minLength(3)]],
  //     password: ['', [Validators.required, Validators.minLength(6)]]
  //   });
  // }

  constructor(private formBuilder: FormBuilder, private router: Router, 
    private authService: AuthServiceService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
 
get formControls() {
  return this.loginForm.controls;
}



onSubmit() {
  if (this.loginForm.invalid) {
    return; 
  }
  
  const formData = this.loginForm.value; 

  this.authService.Login(formData.username, formData.password)
  .subscribe({
    next:(res) => {
      if(res){
        this.authService.storeToken(res.Token);
        this.router.navigate(['/products']);
      }
      
     
    },
    error:(error)=>{
      console.log(error);
      alert('error');
    },
    complete:()=>{
     
    }

  })
}



  navigateToRegister(): void {
    this.router.navigate(['/register']);
  }
}
