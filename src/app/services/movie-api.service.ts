import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  private baseUrl = 'https://api.themoviedb.org/3/';
  READ_ACESS_TOKEN: string =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmNkZTUxNjFmNjA3OTU2NzI3OWJiOWM2NmRiMGEyMyIsIm5iZiI6MTcyNTQwNDQ2OC4xODAzMjMsInN1YiI6IjY2ZDc3ZjhiODRkYWFjZWJmMTE4MDFjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DshumDvzlF6HEoCT20uMaIhe9h3TzHVWX6_mWhBlQSg';

  constructor(private http: HttpClient) {}

  getMovieList(movieListType: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.READ_ACESS_TOKEN}`,
    });

    return this.http.get(`${this.baseUrl}movie/${movieListType}`, { headers });
  }

  getGenres(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get(`${this.baseUrl}genre/movie/list`, { headers });
  }

  getMovieDetails(movieId: any) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.READ_ACESS_TOKEN}`,
    });

    return this.http.get(
      `${this.baseUrl}movie/${movieId}?&append_to_response=videos,credits`,
      { headers }
    );
  }

  getSimilarMovie(movieId: any) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.READ_ACESS_TOKEN}`,
    });

    return this.http.get(`${this.baseUrl}movie/${movieId}/recommendations`, {
      headers,
    });
  }

  getWatchProviders(movieId: any) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.READ_ACESS_TOKEN}`,
    });

    return this.http.get(`${this.baseUrl}movie/${movieId}/watch/providers`, {
      headers,
    });
  }

  getTrendingMovies() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.READ_ACESS_TOKEN}`,
    });

    return this.http.get(`${this.baseUrl}trending/movie/day`, {
      headers,
    });
  }

  shapeMovieDetails(movieData: any) {
    return {
      title: movieData.title,
      background: `https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`,
      poster: `https://image.tmdb.org/t/p/w200/${movieData.poster_path}`,
      genres: movieData.genres,
      imdbUrl: `http://imdb.com/title/${movieData.imdb_id}`,
      language: movieData.original_language,
      description: movieData.overview,
      releaseDate: movieData.release_date,
      popularity: movieData.popularity,
      runtime: movieData.runtime,
      status: movieData.status,
      country: movieData.origin_country[0],
      averageRating: movieData.vote_average,
      homepage: movieData.homepage,
      tagline: movieData.tagline,
      trailer: movieData.videos.results.filter((item: any) => {
        return item.type === 'Trailer';
      }),
    };
  }

  shapeData(data: any) {
    return data.results.map((item: any) => {
      return {
        title: item.title,
        language: item.original_language,
        description: item.overview,
        releaseDate: item.release_date,
        popularity: item.popularity,
        poster: `https://image.tmdb.org/t/p/w200/${item.poster_path}`,
        background: `https://image.tmdb.org/t/p/original/${item.backdrop_path}`,
        genreIds: item.genre_ids,
        id: item.id,
      };
    });
  }
}
