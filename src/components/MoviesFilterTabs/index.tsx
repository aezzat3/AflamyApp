import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MoviesFilter } from '../../utils/types';
import styles from './styles';

interface Props {
  onPress: (filter: MoviesFilter) => void;
  selected: MoviesFilter;
}

const filter_data = [
  { key: MoviesFilter.UPCOMMING, name: 'Upcomming' },
  { key: MoviesFilter.POPULAR, name: 'Popular' },
  { key: MoviesFilter.TOP_RATED, name: 'Top Rated' },
];
const MoviesFilterTabs: React.FC<Props> = ({ onPress, selected }) => {
  return (
    <View style={styles.row}>
      {filter_data.map((filter) => {
        const isSelected = selected === filter.key;
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={filter.key}
            style={[styles.filterButton, isSelected && styles.selectedButton]}
            onPress={() => onPress(filter.key)}>
            <Text style={[styles.text, isSelected && styles.selectedText]}>{filter.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MoviesFilterTabs;
