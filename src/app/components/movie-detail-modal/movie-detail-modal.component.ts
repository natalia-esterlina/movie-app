import { Component, CUSTOM_ELEMENTS_SCHEMA, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { Movie } from '../../data/models/movie.model';

@Component({
  selector: 'app-movie-detail-modal',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './movie-detail-modal.component.html',
  styleUrls: ['./movie-detail-modal.component.scss']
})
export class MovieDetailModalComponent {
  constructor(
    public dialogRef: MatDialogRef<MovieDetailModalComponent>,
    @Inject(MAT_DIALOG_DATA) public movie: Movie
  ) {}

  close(): void {
    this.dialogRef.close();
  }
} 