import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiUrl = 'http://localhost:3000/order';

  constructor(private httpclient:HttpClient) { }

  rentMovie():Observable<any>{
    return this.httpclient.post(`${this.apiUrl}`,{})
  }
}
