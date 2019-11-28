import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-genre',
  templateUrl: './movie-genre.component.html',
  styleUrls: ['./movie-genre.component.scss']
})
export class MovieGenreComponent implements OnInit {

  category: string;
  movies: Array<Movies>;
  
  constructor() { }

  ngOnInit() {
  }

}
