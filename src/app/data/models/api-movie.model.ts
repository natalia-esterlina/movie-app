export interface ApiMovie {
  id: string;
  title: string;
  imageSet?: {
    verticalPoster?: {
      w720: string;
    };
  };
  overview: string;
  genres?: { id: string; name: string; }[];
  releaseYear?: number;
  rating?: number;
  runtime?: number;
}

export interface ApiResponse {
  shows: ApiMovie[];
} 