import React, { useState, useCallback, useEffect } from 'react';
import { FlatList, ActivityIndicator, Text, Platform, ActivityIndicatorComponent } from 'react-native';
import { useInfiniteQuery, useQuery } from 'react-query';
import MovieCard from '../../components/MovieCard';
import MoviesFilterTabs from '../../components/MoviesFilterTabs';
import { fetchGenres, fetchMoviesList } from '../../services';
import { GenresResponse, Movie, MoviesFilter, MoviesResponse } from '../../utils/types';
import styles from './styles';

const MoviesList = () => {
  const [filter, setFilter] = useState<MoviesFilter>(MoviesFilter.UPCOMMING);

  const { data, isLoading, error, refetch, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery<MoviesResponse>(
      `movies-${filter}`,
      ({ pageParam = 1 }) => fetchMoviesList({ filter, page: pageParam }),
      {
        getNextPageParam: (lastPage) =>
          lastPage.page < lastPage.total_pages ? lastPage.page + 1 : false,
      },
    );

  const {
    data: genres,
    isLoading: genresLoading,
    error: genresError,
  } = useQuery<GenresResponse>('genres', fetchGenres);

  useEffect(() => {
    refetch();
  }, [filter]);

  const getGeneresByIds = useCallback(
    (ids: number[]) => {
      if (genres && genres.genres) {
        return genres.genres.filter((g) => ids.includes(g.id));
      }
      return [];
    },
    [genres],
  );

  const getFlattenArray = useCallback(() => {
    if (data && data.pages) {
      const result: Movie[] = [];
      data.pages.forEach((p) => p.results.forEach((m) => result.push(m)));
      return result;
    }
    return [];
  }, [data]);

  if (isLoading || genresLoading) {
    return <ActivityIndicator />;
  }
  if (error || genresError) {
    return <Text>Something went Wrong ...!</Text>;
  }

  return (
    <>
      <MoviesFilterTabs selected={filter} onPress={(f) => setFilter(f)} />
      <FlatList
        contentContainerStyle={styles.contentContainer}
        keyExtractor={(item) => `item--${item.id}`}
        data={getFlattenArray()}
        renderItem={({ item }) => (
          <MovieCard
            movie={item}
            genres={getGeneresByIds(item.genre_ids)}
            onPress={(movie, genres) => {}}
          />
        )}
        onEndReachedThreshold={Platform.OS === 'android' ? 0.2 : 0}
        onEndReached={() => {
          if (!isFetchingNextPage && hasNextPage) {
            fetchNextPage();
          }
        }}
        ListFooterComponent={isFetchingNextPage ? <ActivityIndicator /> : undefined}
      />
    </>
  );
};

export default MoviesList;
