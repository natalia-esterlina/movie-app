import { Routes } from '@angular/router';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/movies', pathMatch: 'full'},
    { path: 'movies', component: MoviesPageComponent},
];
