import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie/movie.service';
import { DialogService } from '../../services/dialog/dialog.service';
import { Movie, MovieActionType } from '../../data/models/movie.model';
import { CommonModule } from '@angular/common';
import { finalize, map } from 'rxjs/operators';
import { MoviesListComponent } from '../../components/movies-list/movies-list.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-movies-page',
  standalone: true,
  imports: [
    CommonModule,
    MoviesListComponent,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatTabsModule
  ],
  templateUrl: './movies-page.component.html',
  styleUrl: './movies-page.component.scss'
})
export class MoviesPageComponent implements OnInit {
  @Input() isFavoritesTab: boolean = false;

  movies$: Observable<Movie[]> = this.movieService.movies$;
  favoriteMovies$: Observable<Movie[]>;
  isLoading = false;
  error: string | null = null;
  selectedTab = 0;
  isAllMoviesTab = true;
  
  constructor(
    private movieService: MovieService,
    private dialogService: DialogService
  ) {
    this.favoriteMovies$ = this.movies$.pipe(
      map((movies: Movie[]) => movies.filter((movie: Movie) => movie.isFavorite))
    );
  }

  ngOnInit(): void {
    this.loadMovies();
  }

  private loadMovies(): void {
    this.isLoading = true;
    this.error = null;

    this.movieService.getMovies()
      .pipe(finalize(() => this.isLoading = false))
      .subscribe({
        error: (err: Error) => {
          this.error = 'Error al obtener películas. Por favor, intente nuevamente.';
          console.error('Error getting movies:', err);
        }
      });
  }

  onTabChange(event: any): void {
    this.selectedTab = event.index;
    this.isAllMoviesTab = event.index === 0;
  }

  openAddMovieModal(): void {
    this.dialogService.openMovieFormModal(MovieActionType.Create);
  }

}