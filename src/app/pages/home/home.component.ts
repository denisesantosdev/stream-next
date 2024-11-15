import { Component, OnInit } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import {SpinnerComponent} from "@components/spinner/spinner.component"
import { MovieApiService } from '@services/movie-api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, CarouselComponent,SpinnerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  READ_ACESS_TOKEN: string =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmNkZTUxNjFmNjA3OTU2NzI3OWJiOWM2NmRiMGEyMyIsIm5iZiI6MTcyNTQwNDQ2OC4xODAzMjMsInN1YiI6IjY2ZDc3ZjhiODRkYWFjZWJmMTE4MDFjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DshumDvzlF6HEoCT20uMaIhe9h3TzHVWX6_mWhBlQSg';

  popularMovies: any;
  genreList: any;
  isLoading: boolean = true;

  constructor(private movieApiService: MovieApiService) {}

  ngOnInit() {
    this.movieApiService.getMovieList("now_playing").subscribe(
      (response) => {
        this.popularMovies = this.movieApiService.shapeData(response);
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
