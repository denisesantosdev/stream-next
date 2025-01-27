import {
  provideRouter,
  Routes,
  withComponentInputBinding,
} from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';
import { AuthPageComponent } from '@pages/auth-page/auth-page.component';
import { SearchResultsPageComponent } from '@pages/search-results-page/search-results-page.component';
import { UserPageComponent } from '@pages/user-page/user-page.component';
import { MoviePageComponent } from '@pages/movie-page/movie-page.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { MovieCastComponent } from '@components/movie-cast/movie-cast.component';
import { MovieVideosComponent } from '@components/movie-videos/movie-videos.component';
import { MovieDetailsComponent } from '@components/movie-details/movie-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'auth', component: AuthPageComponent, title: 'Login' },
  { path: 'search', component: SearchResultsPageComponent, title: 'Search' },
  { path: 'user', component: UserPageComponent, title: 'Your recommendations' },
  {
    path: ':id',
    component: MoviePageComponent,
    title: 'Movie',
    /* children: [
      {
        path: '',
        component: MovieDetailsComponent,
        pathMatch:"full"
      },
      {
        path: 'cast',
        component: MovieCastComponent,
      },
      {
        path: 'videos',
        component: MovieVideosComponent,
      },
      {
        path: 'details',
        redirectTo: '',
      },
    ], */
  },
  { path: '**', component: NotFoundComponent },
];
