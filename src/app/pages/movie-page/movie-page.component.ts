import {
  afterNextRender,
  afterRender,
  Component,
  ElementRef,
} from '@angular/core';
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
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { SafePipe } from 'safe-pipe';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [
    SafePipe,
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
    CarouselComponent,
  ],
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.scss',
})
export class MoviePageComponent {
  movieId: string = '';
  movieDetails: any | undefined;
  link: any;
  similarMovies: any | undefined;
  watchProvidersLink: any;
  trailerEl: any;

  constructor(
    private route: ActivatedRoute,
    private service: MovieApiService,
    private scroller: ViewportScroller,
    private elementRef: ElementRef<HTMLElement>
  ) {
  }

  ngOnInit() {
    this.movieId = this.route.snapshot.params['id'];
    this.link = `${this.movieId}`;

    this.service.getMovieDetails(this.movieId).subscribe((response) => {
      this.movieDetails = this.service.shapeMovieDetails(response);
      //console.log(this.movieDetails);
    });

    this.service.getSimilarMovie(this.movieId).subscribe((response: any) => {
      this.similarMovies = this.service.shapeData(response);
    });

    this.service.getWatchProviders(this.movieId).subscribe((response: any) => {
      this.watchProvidersLink = response.results['BR']?.link;
    });
  }
}
