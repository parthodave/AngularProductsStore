import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../Models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { 
 
   }
   
 
   
 
   GetBooks(): Observable<Book[]>
   {
     return this.httpClient.get<Book[]>("https://localhost:7174/api/Books");
   }
 
 
  
 
   
}
