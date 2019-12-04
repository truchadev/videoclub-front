import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs'
import { Generos } from '../models/genre.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movieSelect: object;
  apiUrl = 'http://localhost:3000/movies';

  genero:Generos
  constructor(private httpclient:HttpClient) { }

  getAllMovies():Observable<object>{
    return this.httpclient.get(`${this.apiUrl}`)
  }

  getMoviesByGenre(genero:Generos):Observable<any>{
    return this.httpclient.post('http://localhost:3000/movies/genre', genero)
  }


}
