import { Component, OnInit } from '@angular/core';

import { MovieService } from 'src/app/services/movie.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  movie = this.movieService.movieSelect

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    // console.log(this.movieService.movieSelect['idFilms'])

  }

  addMovie(movie) {
    this.movieService.movieSelect= movie
    console.log(movie)
  }

}
