import { NavigationProp, useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text } from 'react-native';
import { MainStackParams } from '../../navigation/MainStack';
import styles from './styles';

const Splash = () => {
  const navigation = useNavigation<NavigationProp<MainStackParams>>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>MOVIES APP</Text>
    </View>
  );
};

export default Splash;
