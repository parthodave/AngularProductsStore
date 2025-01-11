import { Component } from '@angular/core';
import { User } from '../../Models/User';
import { AuthServiceService } from '../../Service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  users: User[] = [];

  constructor(private authService: AuthServiceService) {}

  ngOnInit() {
    this.authService.GetProducts().subscribe({
      next: (products) => {
        debugger;
        this.users = products;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
