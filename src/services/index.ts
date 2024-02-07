import { NativeModules } from 'react-native';
import { FetchMoviesParams, MoviesFilter } from '../utils/types';
import { API_KEY, BASE_URL } from '../common';

const { MovieApiModule } = NativeModules;

  MovieApiModule.setBaseUrl(BASE_URL);

  MovieApiModule.setApiKey(API_KEY);

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
