import React from 'react';
import { View, Text, Image } from 'react-native';
import { IMAGES } from '../../common';
import { Cast, getImageSource } from '../../utils';
import styles from './styles';

interface Props {
  cast: Cast;
}
const CastCard: React.FC<Props> = ({ cast }) => {
  return (
    <View style={styles.card}>
      <Image
        source={getImageSource(cast.profile_path, IMAGES.avatar_placeholder)}
        style={styles.avatar}
      />
      <Text style={styles.name}>{cast.name}</Text>
    </View>
  );
};

export default CastCard;
