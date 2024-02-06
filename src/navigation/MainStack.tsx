import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/Splash';
import styles from './styles';

export type MainStackParams = {
  Splash: undefined;
};

const MainStack = createStackNavigator<MainStackParams>();

export default () => (
  <MainStack.Navigator
    screenOptions={{
      headerTitleAlign: 'left',
      headerTitleStyle: styles.headerTitleStyle,
      headerTintColor: '#000',
      headerTruncatedBackTitle: '',
      headerBackTitle: '',
    }}>
    <MainStack.Screen component={Splash} name="Splash" options={{ headerShown: false }} />
  </MainStack.Navigator>
);
