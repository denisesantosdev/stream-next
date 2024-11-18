import { Component, Input } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MovieApiService } from '@services/movie-api.service';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule, CardModule, ButtonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  responsiveOptions: any[] | undefined;
  @Input() carouselTitle: string | undefined;
  @Input() carouselIcon: string | undefined;
  @Input() moviesData: any;
  genreList: any;
  READ_ACESS_TOKEN: string =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmNkZTUxNjFmNjA3OTU2NzI3OWJiOWM2NmRiMGEyMyIsIm5iZiI6MTcyNTQwNDQ2OC4xODAzMjMsInN1YiI6IjY2ZDc3ZjhiODRkYWFjZWJmMTE4MDFjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DshumDvzlF6HEoCT20uMaIhe9h3TzHVWX6_mWhBlQSg';

  constructor(private movieApiService: MovieApiService) {}

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '480px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '992px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '1200px',
        numVisible: 5,
        numScroll: 5,
      },
    ];

    this.movieApiService.getGenres(this.READ_ACESS_TOKEN).subscribe(
      (response) => {
        this.genreList = response;

        this.moviesData = this.moviesData.map((item: any) => {
          return {
            ...item,
            genreNames: item.genreIds.map((item: any) => {
              return this.getGenreName(item);
            }),
          };
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getGenreName(genreId: any) {
    const genreName = this.genreList.genres.filter((item: any) => {
      return item.id === genreId;
    });

    return genreName[0].name;
  }
}
