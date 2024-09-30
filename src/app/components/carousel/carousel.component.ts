import { Component, Input } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule, CardModule, ButtonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  movies: object[] = [
    { title: 'lorem lorem lorem lorem lorem', releaseYear: "2024", runtime: "104", genre: "Drama" },
    { title: 'lorem lorem', releaseYear: "2024", runtime: "104", genre: "Drama" },
    { title: 'lorem lorem', releaseYear: "2024", runtime: "104", genre: "Drama" },
    { title: 'lorem lorem', releaseYear: "2024", runtime: "104", genre: "Drama" },
    { title: 'lorem lorem', releaseYear: "2024", runtime: "104", genre: "Drama" },
    { title: 'lorem lorem', releaseYear: "2024", runtime: "104", genre: "Drama" },
  ];

  responsiveOptions: any[] | undefined;
  @Input() carouselTitle: string | undefined
  @Input() carouselIcon: string | undefined

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
  }
}
