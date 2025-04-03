import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take, tap } from 'rxjs';
import { MovieFormModalComponent } from '../../components/movie-form-modal/movie-form-modal.component';
import { MovieDeleteModalComponent } from '../../components/movie-delete-modal/movie-delete-modal.component';
import { Movie } from '../../data/models/movie.model';
import { MovieActionType } from '../../data/models/movie.model';
import { MovieService } from '../movie/movie.service';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private movieService: MovieService
  ) {}

  openMovieFormModal(
    actionType: MovieActionType,
    movie?: Movie,
    onSuccess?: (movie: Movie) => void
  ): void {
    this.dialog.open(MovieFormModalComponent, {
      width: '500px',
      data: { type: actionType, movie }
    }).afterClosed().pipe(take(1)).subscribe((result: Movie | undefined) => {
      if (result) {
        if (actionType === MovieActionType.Edit) {
          this.movieService.updateMovie(result.id, result);
        } else {
          result.id = `movie-${Date.now()}`;
          this.movieService.addMovie(result);
        }
        this.showSuccessMessage(actionType);
        if (onSuccess) {
          onSuccess(result);
        }
      }
    });
  }

  openDeleteMovieModal(movie: Movie): void {
    this.dialog.open(MovieDeleteModalComponent, {
      width: '400px',
      data: { movie }
    }).afterClosed().pipe(
      take(1),
      tap((confirmed: boolean) => {
        if (confirmed) {
          this.movieService.removeMovie(movie.id);
          this.showSuccessMessage(MovieActionType.Delete);
        }
      })
    ).subscribe();
  }

  private showSuccessMessage(action: MovieActionType): void {
    const messages = {
      [MovieActionType.Create]: 'Película añadida con éxito',
      [MovieActionType.Edit]: 'Película editada con éxito',
      [MovieActionType.Delete]: 'Película eliminada con éxito'
    };

    this.snackBar.open(messages[action], 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top'
    });
  }
} 