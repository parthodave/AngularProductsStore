import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  // Simulating a data stream for stock prices
  getStockPrice(symbol: string): Observable<number> {
    // Emit a new price every second. In a real app, you'd use WebSocket or HTTP polling.
    return interval(1000).pipe(
      map(() => {
        // Generate a random stock price between 100 and 500 for demonstration.
        return Math.floor(Math.random() * 400) + 100;
      })
    );
  }
}
