import { NativeModules } from 'react-native';

jest.mock('react-native', () => {
  return {
    NativeModules: {
      MovieApiModule: {
        fetchMoviesList: jest.fn(),
        fetchGenres: jest.fn(),
        fetchCredits: jest.fn(),
      },
    },
  };
});

describe('MovieApiModule', () => {
  it('should fetch movies list', async () => {
    const { fetchMoviesList } = NativeModules.MovieApiModule;
    await fetchMoviesList('filter', 1);
    expect(fetchMoviesList).toHaveBeenCalledWith('filter', 1);
  });

  it('should fetch genres', async () => {
    const { fetchGenres } = NativeModules.MovieApiModule;
    await fetchGenres();
    expect(fetchGenres).toHaveBeenCalled();
  });

  it('should fetch credits', async () => {
    const { fetchCredits } = NativeModules.MovieApiModule;
    await fetchCredits(123);
    expect(fetchCredits).toHaveBeenCalledWith(123);
  });
});
