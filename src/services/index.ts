import { NativeModules } from 'react-native';
import { MoviesFilter } from '../utils/types';

const { MovieApiModule } = NativeModules;

export interface FetchMoviesParams {
  filter: MoviesFilter;
  page: number;
}

export const fetchMoviesList = async (params: FetchMoviesParams) => {
  const { filter, page } = params;

 try {
      return await MovieApiModule.fetchMoviesList(filter, page);
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
};

export const fetchGenres = async () => {
 try {
      return await MovieApiModule.fetchGenres();
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
};

export const fetchCredits = async (movieId: number) => {
 try {
      return await MovieApiModule.fetchCredits(movieId);
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
};
