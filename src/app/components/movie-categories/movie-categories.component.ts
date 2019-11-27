import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-categories',
  templateUrl: './movie-categories.component.html',
  styleUrls: ['./movie-categories.component.scss']
})
export class MovieCategoriesComponent implements OnInit {

  category: string;
  movies: Array<Movies>;
;  constructor() { }

  ngOnInit() {
  }

}
