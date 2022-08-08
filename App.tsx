import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppRoutes, OnBoardingRoutes} from '@routes';
import {useOnBoardingStore} from '@hooks';
import RNBootSplash from 'react-native-bootsplash';
import './src/utils/networking';
const App = () => {
  const isFirstTime = useOnBoardingStore(state => state.isFirstTime);

  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      {!isFirstTime ? <OnBoardingRoutes /> : <AppRoutes />}
    </NavigationContainer>
  );
};

export default App;
