import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {OnBoardingRoutes} from '@routes';
import './src/utils/networking';
const App = () => {
  return (
    <NavigationContainer>
      <OnBoardingRoutes />
    </NavigationContainer>
  );
};

export default App;
