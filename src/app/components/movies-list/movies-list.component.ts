import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../data/models/movie.model';
import { CardMovieComponent } from '../card-movie/card-movie.component';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule, CardMovieComponent, MatGridListModule],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss'
})
export class MoviesListComponent {
  @Input() movies: Movie[] = [];
}
