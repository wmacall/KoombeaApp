import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  EOnBoardingRoutes,
  TOnBoardingStackRouter,
} from './OnBoarding.routes.types';
import {OnBoardingScreen} from '@screens';

const OnBoardingStack = createNativeStackNavigator<TOnBoardingStackRouter>();

export const OnBoardingRoutes = () => (
  <OnBoardingStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <OnBoardingStack.Screen
      name={EOnBoardingRoutes.ON_BOARDING}
      component={OnBoardingScreen}
    />
  </OnBoardingStack.Navigator>
);
