import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Movie } from '../../data/models/movie.model';
import { MovieActionType } from '../../data/models/movie.model';

@Component({
  selector: 'app-movie-form-modal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './movie-form-modal.component.html',
  styleUrls: ['./movie-form-modal.component.scss']
})
export class MovieFormModalComponent {
  movie: Movie = {
    id: '',
    title: '',
    description: '',
    image: '',
    genres: [],
    isFavorite: false,
    releaseYear: 0,
    rating: 0,
    duration: 0
  };
  genreInput: string = '';
  titleForm: string = '';
  type: MovieActionType;
  
  constructor(
    public dialogRef: MatDialogRef<MovieFormModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { movie?: Movie, type: MovieActionType }
  ) {
    if (data.movie) {
      this.movie = {...data.movie};
      this.genreInput = data.movie.genres.map(genre => genre.name).join(', ');
    }
    this.type = data.type;
    this.titleForm = this.type === MovieActionType.Edit ? 'Editar Película' : 'Agregar Nueva Película';
  }
  
  updateGenres(): void {
    if (this.genreInput.trim()) {
      this.movie.genres = this.genreInput.split(',').map((name, index) => ({
        id: `genre-${index + 1}`,
        name: name.trim()
      }));
    } else {
      this.movie.genres = [];
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.dialogRef.close(this.movie);
  }
}
