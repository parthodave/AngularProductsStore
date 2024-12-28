import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthServiceService } from '../../Service/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [ ReactiveFormsModule ,CommonModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
  
})
export class AddUserComponent {
userForm  : FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, 
    private authService: AuthServiceService) {
    this.userForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Username: ['', Validators.required],
      Password: ['', Validators.required],
      isActive: ['', Validators.required]
    });
  }

  OnSubmit(){
    if(this.userForm.invalid){
      return;
    }
    const formData = this.userForm.value;
    this.authService.AddUser(formData.FirstName, formData.LastName, formData.Username, formData.Password, formData.isActive)  
      .subscribe({
      next:(res) => {
        if(res){
          alert('User Added Successfully');
    
         // this.router.navigate(['/products']);
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
}
