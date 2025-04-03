import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Movie, MovieActionType } from '../../data/models/movie.model';
import { MovieService } from '../../services/movie/movie.service';
import { DialogService } from '../../services/dialog/dialog.service';

@Component({
  selector: 'app-movie-actions-menu',
  standalone: true,
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './movie-actions-menu.component.html',
  styleUrls: ['./movie-actions-menu.component.scss']
})

export class MovieActionsMenuComponent {
  @Input() movie!: Movie;
  constructor(private dialogService: DialogService, private movieService: MovieService) {}

  onEdit(): void {
    this.dialogService.openMovieFormModal(MovieActionType.Edit, this.movie);
  }

   onDelete(): void {
    this.dialogService.openDeleteMovieModal(this.movie);
   }
}
  

