import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Genre, Movie } from '../../utils/types';
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
      <View style={styles.content}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.averageRate}>{movie.vote_average * 10}%</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
