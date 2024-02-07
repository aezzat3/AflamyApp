import React from 'react';
import { ActivityIndicator } from 'react-native';
import { COLORS } from '../../common';
import styles from './styles';

const Spinner = () => {
  return <ActivityIndicator style={styles.spinner} color={COLORS.green} size="large" />;
};

export default Spinner;
