import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './Products/products/products.component';
import { AddUserComponent } from './Products/add-user/add-user.component';
import { BooksListComponent } from './Books/books-list/books-list.component';
import { AddBookComponent } from './Books/add-book/add-book.component';
import { CustomerFormComponent } from './directive/customer-form/customer-form.component';
import { RegisterUserForValidationComponent } from './FormValidation/register-user-for-validation/register-user-for-validation.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
     { path: 'products', component: ProductsComponent },
     { path: 'adduser', component: AddUserComponent },
     { path: 'books', component: BooksListComponent },
     { path: 'addbook', component: AddBookComponent },
     { path: 'cust', component: CustomerFormComponent },
     { path:'register', component: RegisterUserForValidationComponent }

   // { path: '**', redirectTo: 'login' } // Redirect to login by default
  ];
