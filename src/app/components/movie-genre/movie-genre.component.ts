import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';


@Component({
  selector: 'app-movie-genre',
  templateUrl: './movie-genre.component.html',
  styleUrls: ['./movie-genre.component.scss']
})
export class MovieGenreComponent implements OnInit {

  genre: string;
  movies: Array<Movies>;
  
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMoviesByGenre(this.genre).subscribe(
      res => this.movieService=res ['Movies'],
      error => console.error(error)
    )
  }

}
