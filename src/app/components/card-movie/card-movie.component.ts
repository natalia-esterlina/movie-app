import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Movie } from '../../data/models/movie.model';
import { FavoriteButtonComponent } from "../favorite-button/favorite-button.component";
import { MovieActionsMenuComponent } from "../movie-actions-menu/movie-actions-menu.component";
import { MovieDetailModalComponent } from '../movie-detail-modal/movie-detail-modal.component';

@Component({
  selector: 'app-card-movie',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    FavoriteButtonComponent,
    MovieActionsMenuComponent
  ],
  templateUrl: './card-movie.component.html',
  styleUrl: './card-movie.component.scss'
})
export class CardMovieComponent {
  @Input() movie!: Movie;

  constructor(private dialog: MatDialog) {}

  getFormattedGenres(): string {
    return this.movie.genres.map(genre => genre.name).join(', ') || 'Sin género';
  }

  openMovieDetail(): void {
    this.dialog.open(MovieDetailModalComponent, {
      width: '800px',
      maxWidth: '90vw',
      data: this.movie
    });
  }
}
