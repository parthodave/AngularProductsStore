import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/User';



@Injectable({
  providedIn: 'root'
})
export class AuthServiceService  {

  constructor(private httpClient: HttpClient) { 

  }
  

  Login(username: string, password: string)
  {
    return this.httpClient.post<any>('https://localhost:7174/api/Users/login', {username, password});  
  }

  GetProducts(): Observable<User[]>
  {
    return this.httpClient.get<User[]>("https://localhost:7174/api/OurHero");
  }


  storeToken(token: string)
  {
    localStorage.setItem('token', token);
  }

  getToken()
  {
    return localStorage.getItem('token');
  } 
}
