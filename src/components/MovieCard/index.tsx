import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { formatDate, getImageSource } from '../../utils';
import { Genre, Movie } from '../../utils/types';
import GenresList from '../GenresList';
import styles from './styles';

interface Props {
  movie: Movie;
  genres: Genre[];
  onPress: (movie: Movie, genres: Genre[]) => void;
}

const MovieCard: React.FC<Props> = ({ movie, genres, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.7}
      onPress={() => onPress(movie, genres)}>
      <Image source={getImageSource(movie.poster_path)} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.date}>{formatDate(movie.release_date)}</Text>
        <GenresList genres={genres} />
        <Text style={styles.averageRate}>{movie.vote_average * 10}%</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
