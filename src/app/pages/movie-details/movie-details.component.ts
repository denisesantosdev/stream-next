import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from '@services/movie-api.service';
import { response, Router } from 'express';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
})
export class MovieDetailsComponent {
  movieId: string = ''
  movieDetails: any 

  constructor(private route: ActivatedRoute, private service: MovieApiService) {}

  ngOnInit() {
    this.movieId = this.route.snapshot.params['id']

    this.service.getMovieDetails(this.movieId).subscribe(response=>{
      //console.log(response);
      this.movieDetails = this.service.shapeMovieDetails(response)
      console.log(this.movieDetails);
    })
  }
}
