import { Component, OnInit } from '@angular/core';
import { StockService } from '../../Service/stock.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stock-price',
   standalone: true,
    imports: [CommonModule,FormsModule],
  template: `
    <div class="stock-container">
      <h2>Stock Price for {{ symbol }}</h2>
      <!-- AsyncPipe subscribes to the stockPrice$ observable -->
      <p *ngIf="stockPrice$ | async as price; else loading">
        {{ price | currency }}
      </p>
      <ng-template #loading>
        <p>Loading stock price...</p>
      </ng-template>
    </div>
  `,
  styles: [`
    .stock-container {
      border: 1px solid #ddd;
      padding: 16px;
      width: 300px;
      margin: 20px auto;
      text-align: center;
    }
  `]
})
export class StockComponent implements OnInit {
  symbol: string = 'AAPL';
  stockPrice$: Observable<number>;  

  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    // Initialize the observable from the service
    this.stockPrice$ = this.stockService.getStockPrice(this.symbol);
  }
}
