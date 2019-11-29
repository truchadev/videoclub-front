import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private user:any;

  constructor(private httpClient:HttpClient) { }

  register(user:User):Observable<object>{
    return this.httpClient.post('http://localhost:3000/register',user)
  }
  login(user:User):Observable<object>{
    return this.httpClient.post('http://localhost:3000/login',user)
  }

  profile(user: any):Observable<object>{
    return this.httpClient.get(`http://localhost:3000/profile/id/${user}`)
  }


  getUser():User{
    return this.user;
  }

  setUser(user:User):void{
    this.user=user;
    localStorage.setItem('user',JSON.stringify(user))
  }
}
