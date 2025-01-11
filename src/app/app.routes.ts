import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './Products/products/products.component';
import { AddUserComponent } from './Products/add-user/add-user.component';
import { BooksListComponent } from './Books/books-list/books-list.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
     { path: 'products', component: ProductsComponent },
     { path: 'adduser', component: AddUserComponent },
     { path: 'books', component: BooksListComponent },
   // { path: '**', redirectTo: 'login' } // Redirect to login by default
  ];
