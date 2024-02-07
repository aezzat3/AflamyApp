export enum MoviesFilter {
  TOP_RATED = 'top_rated',
  UPCOMMING = 'upcoming',
  POPULAR = 'popular',
}

export interface Movie {
  genre_ids: number[];
  id: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  overview: string;
}

export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface GenresResponse {
  genres: Genre[];
}

export interface Cast {
  id: number;
  name: string;
  profile_path: string;
}

export interface CreditResponse {
  id: number;
  cast: Cast[];
}

export interface CacheAdapter {
  read: (key: string) => Promise<any>;
  write: (key: string, value: any) => Promise<void>;
  invalidate: (key: string) => Promise<void>;
}