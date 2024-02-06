import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/Splash';
import styles from './styles';
import MoviesList from '../screens/MoviesList';

export type MainStackParams = {
  Splash: undefined;
  MoviesList: undefined;
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
    <MainStack.Screen component={MoviesList} name="MoviesList" options={{ title: 'Movies' }} />

  </MainStack.Navigator>
);
