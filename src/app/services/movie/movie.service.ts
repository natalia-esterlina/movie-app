import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { StorageService } from '../storage/storage.service';
import { mapApiMoviesToMovies } from '../../data/mappers/movie.mapper';
import { Movie } from '../../data/models/movie.model';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;
  private readonly STORAGE_KEY = 'movies';

  private moviesSubject = new BehaviorSubject<Movie[]>(this.getStoredMovies());
  movies$ = this.moviesSubject.asObservable();

  constructor(private http: HttpClient, private storageService: StorageService) {}

  private getStoredMovies(): Movie[] {
    return this.storageService.getItem<Movie[]>(this.STORAGE_KEY) || [];
  }
  
  private saveMovies(movies: Movie[]): void {
    this.storageService.setItem(this.STORAGE_KEY, movies);
    this.moviesSubject.next(movies);
  }

  getMovies(): Observable<Movie[]> {
    const storedMovies = this.getStoredMovies();
    if (storedMovies.length) {
      return of(storedMovies);
    }

    const options = {
      headers: {
        'X-RapidAPI-Key': this.apiKey,
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
      },
      params: { country: 'us', show_type: 'movie', limit: 20 }
    };

    return this.http.get<{ shows: any[] }>(`${this.apiUrl}/search/filters`, options).pipe(
      map(response => mapApiMoviesToMovies(response.shows)),
      tap(movies => this.saveMovies(movies))
    );
  }

  clearMoviesCache(): void {
    this.storageService.removeItem(this.STORAGE_KEY);
    this.moviesSubject.next([]);
  }

  updateMovie(movieId: string, updatedMovie: Partial<Movie>): void {
    const updatedMovies = this.getStoredMovies().map(movie =>
      movie.id === movieId ? { ...movie, ...updatedMovie } : movie
    );
    this.saveMovies(updatedMovies);
  }

  removeMovie(movieId: string): void { 
    this.saveMovies(this.getStoredMovies().filter(movie => movie.id !== movieId));
  }

  addMovie(newMovie: Movie): void {
    this.saveMovies([...this.getStoredMovies(), newMovie]);
  }
}