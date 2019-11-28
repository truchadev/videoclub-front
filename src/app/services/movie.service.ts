import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apiUrl = 'http://localhost:3000/movies';

  constructor(private httpclient:HttpClient) { }

  getAllMovies():Observable<object>{
    return this.httpclient.get(`${this.apiUrl}`)
  }

  getMoviesByGenre(genre:string):Observable<object>{
    return this.httpclient.get(`${this.apiUrl}/${genre}`)
  }

}
