import { NavigationProp, useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { MainStackParams } from '../../navigation/MainStack';
import styles from './styles';

const Splash = () => {
  const navigation = useNavigation<NavigationProp<MainStackParams>>();
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({ routes: [{ name: 'MoviesList' }] });
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MOVIES APP</Text>
    </View>
  );
};

export default Splash;
