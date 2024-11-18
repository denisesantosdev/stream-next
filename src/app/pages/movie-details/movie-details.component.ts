import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
})
export class MovieDetailsComponent {
  movieId: string = ''

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.movieId = this.route.snapshot.params['id']

    console.log(this.movieId);
  }
}
