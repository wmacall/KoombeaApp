import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppRoutes} from '@routes';
import './src/utils/networking';
const App = () => {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
};

export default App;
