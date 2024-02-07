import { RouteProp, useRoute } from '@react-navigation/core';
import { useHeaderHeight } from '@react-navigation/elements';
import React from 'react';
import { Text, ScrollView, Image, FlatList } from 'react-native';
import { useQuery } from 'react-query';
import CastCard from '../../components/CastCard';
import GenresList from '../../components/GenresList';
import Spinner from '../../components/Spinner';
import { MainStackParams } from '../../navigation/MainStack';
import { fetchCredits } from '../../services';
import {  CreditResponse, getImageSource } from '../../utils';
import styles from './styles';

const MovieDetails = () => {
  const {
    params: { movie, genres },
  } = useRoute<RouteProp<MainStackParams, 'MovieDetails'>>();
  const { isLoading, error, data } = useQuery<CreditResponse>(`credits-${movie.id}`, () =>
    fetchCredits(movie.id),
  );

  const height = useHeaderHeight();
  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <Text>Something Went Wrong ...!</Text>;
  }
  return (
    <ScrollView
      contentContainerStyle={[styles.container, { paddingTop: height }]}
      showsVerticalScrollIndicator={false}>
      <Image source={getImageSource(movie.poster_path)} style={styles.image} />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.averageRate}>{movie.vote_average * 10}%</Text>

      <Text style={styles.sectionTitle}>Overview</Text>
      <Text style={styles.overview}>{movie.overview}</Text>
      <Text style={styles.sectionTitle}>Genres</Text>
      <GenresList genres={genres} style={styles.genresList} />

      <Text style={styles.sectionTitle}>Credits</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `item--${item.id}`}
        data={data?.cast}
        renderItem={({ item }) => <CastCard cast={item} />}
        horizontal
      />
    </ScrollView>
  );
};

export default MovieDetails;
