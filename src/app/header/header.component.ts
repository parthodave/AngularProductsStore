import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="showHeader" class="header">
    @if(fullName){
      welcome {{fullName}},
    }
    @else{
      Login properly
    }
    </div>
  `,
  styles: [`
    .header {
      padding: 10px;
      background-color: #f0f0f0;
      text-align: right;
    }
  `]
})
export class HeaderComponent implements OnInit {
  fullName: string = '';
  showHeader: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.updateHeader();
    this.router.events.subscribe(() => {
      this.updateHeader();
    });
  }

  private updateHeader() {
    const currentRoute = this.router.url;
    this.showHeader = !['/login', '/adduser'].includes(currentRoute);
    if (this.showHeader) {
      this.fullName = localStorage.getItem('FullName') || 'Guest';
    }
  }
}