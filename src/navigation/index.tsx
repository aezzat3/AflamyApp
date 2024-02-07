import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';
import { OfflineNotice } from '../components/OfflineNotice';

export default () => (
  <NavigationContainer>
    <OfflineNotice />
    <MainStack />
  </NavigationContainer>
);
