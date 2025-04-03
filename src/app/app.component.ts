import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { StorageService } from './services/storage/storage.service';
import { MovieService } from './services/movie/movie.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, MatTabsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'movie-app';

  constructor(private movieService: MovieService, private storageService: StorageService) {
  }
  
  ngOnInit(): void {
    this.movieService.clearMoviesCache();
    this.storageService.clear();
  }
}
