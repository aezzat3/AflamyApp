import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/Splash';
import MoviesList from '../screens/MoviesList';
import MovieDetails from '../screens/MovieDetails';
import styles from './styles';
import { Genre, Movie } from '../utils';
import { COLORS } from '../common';

export type MainStackParams = {
  Splash: undefined;
  MoviesList: undefined;
  MovieDetails: {
    movie: Movie;
    genres: Genre[];
  };
};

const MainStack = createStackNavigator<MainStackParams>();

export default () => (
  <MainStack.Navigator
    screenOptions={{
      headerTitleAlign: 'left',
      headerTitleStyle: styles.headerTitleStyle,
      headerTintColor: COLORS.dark,
      headerTruncatedBackTitle: '',
      headerBackTitle: '',
    }}>
    <MainStack.Screen component={Splash} name="Splash" options={{ headerShown: false }} />
    <MainStack.Screen component={MoviesList} name="MoviesList" options={{ title: 'Movies' }} />
    <MainStack.Screen
      component={MovieDetails}
      name="MovieDetails"
      options={{
        headerTransparent: true,
        title: '',
      }}
    />
  </MainStack.Navigator>
);
