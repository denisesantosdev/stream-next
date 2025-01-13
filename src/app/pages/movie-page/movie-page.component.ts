import { Component } from '@angular/core';
import {
  ActivatedRoute,
  RouterOutlet,
  RouterLink,
  Router,
  RouterLinkActive,
} from '@angular/router';
import { MovieApiService } from '@services/movie-api.service';
import { HeroComponent } from '@components/hero/hero.component';
import { SpinnerComponent } from '@components/spinner/spinner.component';
import { TabViewModule } from 'primeng/tabview';
import { MovieCastComponent } from '../../components/movie-cast/movie-cast.component';
import { MovieVideosComponent } from '../../components/movie-videos/movie-videos.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import { CarouselComponent } from "../../components/carousel/carousel.component";

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [
    HeroComponent,
    SpinnerComponent,
    RouterOutlet,
    RouterLink,
    TabViewModule,
    MovieCastComponent,
    MovieVideosComponent,
    ButtonModule,
    RouterLinkActive,
    RippleModule,
    DividerModule,
    TagModule,
    CarouselComponent
],
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.scss',
})
export class MoviePageComponent {
  movieId: string = '';
  movieDetails: any | undefined;
  link: any;

  constructor(
    private route: ActivatedRoute,
    private service: MovieApiService
  ) {}

  ngOnInit() {
    this.movieId = this.route.snapshot.params['id'];
    this.link = `${this.movieId}`;

    this.service.getMovieDetails(this.movieId).subscribe((response) => {
      //console.log(response);
      this.movieDetails = this.service.shapeMovieDetails(response);
      console.log(this.movieDetails);
    });

   /*  this.service.getSimilarMovie(this.movieId).subscribe((response) => {
      //console.log(response);
    });

    this.service.getWatchProviders(this.movieId).subscribe((response) => {
      //console.log(response);
    }); */
  }
}
