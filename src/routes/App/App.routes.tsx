import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EAppRoutes, TAppStackRouter} from './App.routes.types';
import {DetailScreen, HomeScreen} from '@screens';

const AppStack = createNativeStackNavigator<TAppStackRouter>();

export const AppRoutes = () => (
  <AppStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <AppStack.Screen name={EAppRoutes.HOME_SCREEN} component={HomeScreen} />
    <AppStack.Screen name={EAppRoutes.DETAIL_SCREEN} component={DetailScreen} />
  </AppStack.Navigator>
);
