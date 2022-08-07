import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppRoutes, OnBoardingRoutes} from '@routes';
import {useOnBoardingStore} from '@hooks';
import './src/utils/networking';
const App = () => {
  const isFirstTime = useOnBoardingStore(state => state.isFirstTime);

  return (
    <NavigationContainer>
      {!isFirstTime ? <OnBoardingRoutes /> : <AppRoutes />}
    </NavigationContainer>
  );
};

export default App;
