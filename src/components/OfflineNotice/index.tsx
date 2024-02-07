import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import { useNetInfo } from '@react-native-community/netinfo';

export const OfflineNotice = () => {
  const netInfo = useNetInfo();

  return netInfo.type !== 'unknown' && netInfo.isInternetReachable === false ? (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        No Internet Connection
      </Text>
    </SafeAreaView>
  ) : (
    <View />
  );
};
