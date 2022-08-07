import React from 'react';
import {Pressable} from 'react-native';
import {ArrowIcon} from '@assets';
import {useOnBoardingStore} from '@hooks';
import styles from './ButtonSlider.styles';

export const ButtonSliderAndroid = () => {
  const onComplete = useOnBoardingStore(state => state.onCompleteOnBoarding);
  return (
    <Pressable onPress={onComplete} style={styles.buttonAndroid}>
      <ArrowIcon />
    </Pressable>
  );
};
