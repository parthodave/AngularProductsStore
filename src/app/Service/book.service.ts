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
   
 AddBook(BookName: string, BookAuthor: string){
      return this.httpClient.post("https://localhost:7174/api/Books", {BookName, BookAuthor});
 }
   
 
   GetBooks(): Observable<Book[]>
   {
     return this.httpClient.get<Book[]>("https://localhost:7174/api/Books");
   }
 
 
  
 
   
}
