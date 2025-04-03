import { Movie } from '../models/movie.model';
import { ApiMovie } from '../models/api-movie.model';

export const mapApiMoviesToMovies = (apiMovies: ApiMovie[]): Movie[] => {
  return apiMovies.map(apiMovie => ({
    id: apiMovie.id,
    title: apiMovie.title,
    image: apiMovie.imageSet?.verticalPoster?.w720 || '',
    description: apiMovie.overview,
    releaseYear: apiMovie.releaseYear || 0,
    duration: apiMovie.runtime || 0,
    rating: apiMovie.rating || 0,
    genres: apiMovie.genres || [],
    isFavorite: false
  }));
}; 