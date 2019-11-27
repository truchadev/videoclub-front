import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movies } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-all',
  templateUrl: './movie-all.component.html',
  styleUrls: ['./movie-all.component.scss']
})
export class MovieAllComponent implements OnInit {

  movies:Array<Movies>=[];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getAllMovies().subscribe(
      res => this.movies=res['movies'],
      error => console.error(error)
    )
  }

}
