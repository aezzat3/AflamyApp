import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { IMAGES } from '../../common';
import { getImageSource } from '../../utils';

const ErrorComponent = () => {
  return (
    <View style={styles.container}>
      <Image
        source={IMAGES.not_found}
        style={styles.avatar}
          />
          <Text style={styles.errorText}>Something went Wrong ...!</Text>
    </View>
  );
};



export default ErrorComponent;
