import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Movie } from '../../data/models/movie.model';
import { MovieService } from '../../services/movie/movie.service';
@Component({
  selector: 'app-favorite-button',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatTooltipModule],
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss']
})
export class FavoriteButtonComponent implements OnInit {
  @Input() movie!: Movie;
  isFavorite = false;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.isFavorite = this.movie.isFavorite;
  }

  toggleFavorite(): void {
    if (this.isFavorite) {
      this.movieService.updateMovie(this.movie.id, { ...this.movie, isFavorite: false });
    } else {
      this.movieService.updateMovie(this.movie.id, { ...this.movie, isFavorite: true });
    }
    this.isFavorite = !this.isFavorite;
  }

}
