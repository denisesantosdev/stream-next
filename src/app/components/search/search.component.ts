import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { MovieApiService } from '@services/movie-api.service';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [AutoCompleteModule,ButtonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SearchComponent {
  selectedItem: any;
  suggestions: any | undefined;
  isSearchBoxOpen?: boolean

  constructor(private movieApiService: MovieApiService, private router: Router) {}

  ngOnInit() {
   this.isSearchBoxOpen = false
  }

  toggleSearchBox() {
    this.isSearchBoxOpen = !this.isSearchBoxOpen
  }

  search(event: any) {
    this.movieApiService
      .searchMovies(event.query)
      .subscribe((response: any) => {
        this.suggestions = response.results.map((item: any) => {
          return {
            id: item.id,
            title: item.title,
          };
        });
      });
  }

  onSelect(event:any) {
    this.selectedItem = event.value.id
    /* this.router.navigate(['/', this.selectedItem]) */
    window.history.pushState({}, '',`/${this.selectedItem}`);
    window.location.reload();
    this.isSearchBoxOpen = false
  }
}
