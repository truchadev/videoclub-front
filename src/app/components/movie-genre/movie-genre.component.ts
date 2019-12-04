import { Component } from '@angular/core';
import { Generos} from 'src/app/models/genre.model'
import { MovieService } from 'src/app/services/movie.service';
import { Movies } from 'src/app/models/movie.model'



@Component({
  selector: 'app-movie-genre',
  templateUrl: './movie-genre.component.html',
  styleUrls: ['./movie-genre.component.scss']
})
export class MovieGenreComponent  {

  url='https://image.tmdb.org/t/p/w200/'
  movies: Array<Movies>=[];
  genero: Generos={
    genre:''
  }
  constructor(private movieService: MovieService) { }

  genre(algo){
    this.genero.genre=algo
    console.log(this.genero)
    this.movieService.getMoviesByGenre(this.genero).subscribe(res => this.movies.push(res))
    
  }

  actualMovie(movie) {
    this.movieService.movieSelect= movie;
    console.log(movie);
    
  }

}
