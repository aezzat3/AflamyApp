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

const { MovieApiModule } = NativeModules;


describe('MovieApiModule', () => {
  it('should fetch movies list', async () => {
    // Set up test data
    const filter = 'upcoming';
    const page = 1;
    const moviesList = [{ id: 1, title: 'Movie 1' }, { id: 2, title: 'Movie 2' }];
    NativeModules.MovieApiModule.fetchMoviesList.mockResolvedValueOnce(moviesList);

    const response = await MovieApiModule.fetchMoviesList({ filter, page });

    expect(NativeModules.MovieApiModule.fetchMoviesList).toHaveBeenCalledWith({"filter": "upcoming", "page": 1});

    expect(response).toEqual(moviesList);
  });

  it('should fetch genres', async () => {
    const genresList = [{ id: 1, name: 'Genre 1' }, { id: 2, name: 'Genre 2' }];
    NativeModules.MovieApiModule.fetchGenres.mockResolvedValueOnce(genresList);

    const response = await MovieApiModule.fetchGenres();

    expect(NativeModules.MovieApiModule.fetchGenres).toHaveBeenCalled();

    expect(response).toEqual(genresList);
  });

  it('should fetch credits', async () => {
    const movieId = 123;
    const credits = { id: 123, cast: [{ name: 'Actor 1' }, { name: 'Actor 2' }] };
    NativeModules.MovieApiModule.fetchCredits.mockResolvedValueOnce(credits);

    const response = await MovieApiModule.fetchCredits(movieId);

    expect(NativeModules.MovieApiModule.fetchCredits).toHaveBeenCalledWith(movieId);

    expect(response).toEqual(credits);
  });
});
