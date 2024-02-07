import React from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import { Genre } from '../../utils';
import styles from './styles';

interface Props {
  genres: Genre[];
  style?: StyleProp<ViewStyle>;
}

const GenresList: React.FC<Props> = ({ genres, style }) => {
  return (
    <View style={[styles.container, style]}>
      {genres.map((g) => (
        <View style={styles.genre} key={g.id}>
          <Text style={styles.genreText}>{g.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default GenresList;
