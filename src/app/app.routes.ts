import {
  provideRouter,
  Routes,
  withComponentInputBinding,
} from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';
import { AuthPageComponent } from '@pages/auth-page/auth-page.component';
import { SearchResultsPageComponent } from '@pages/search-results-page/search-results-page.component';
import { UserPageComponent } from '@pages/user-page/user-page.component';
import { MovieDetailsComponent } from '@pages/movie-details/movie-details.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'auth', component: AuthPageComponent, title: 'Login' },
  { path: 'search', component: SearchResultsPageComponent, title: 'Search' },
  { path: 'user', component: UserPageComponent, title: 'Your recommendations' },
  { path: 'movie', component: MovieDetailsComponent, title: 'Movie details' },
  { path: '**', component: NotFoundComponent },
];
