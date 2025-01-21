import { Component } from '@angular/core';
import { AutoFocusDirective } from '../auto-focus.directive';
@Component({
  selector: 'cust',
  standalone: true,
  imports: [AutoFocusDirective],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})
export class CustomerFormComponent {
shouldFocus: Boolean = false;

openForm(){
  this.shouldFocus = true;
}

closeForm(){
  this.shouldFocus = false;
}

}
