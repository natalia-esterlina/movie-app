import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Movie } from '../../data/models/movie.model';

@Component({
  selector: 'app-movie-delete-modal',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './movie-delete-modal.component.html',
  styleUrls: ['./movie-delete-modal.component.scss']
})
export class MovieDeleteModalComponent {
  constructor(
    public dialogRef: MatDialogRef<MovieDeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { movie: Movie }
  ) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
