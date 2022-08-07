import React from 'react';
import {Pressable} from 'react-native';
import {translate} from '@i18n';
import {Typography} from '../Typography';
import {useOnBoardingStore} from '@hooks';
import styles from './ButtonSlider.styles';

export const ButtonSliderIOS = () => {
  const onComplete = useOnBoardingStore(state => state.onCompleteOnBoarding);
  return (
    <Pressable onPress={onComplete} style={styles.buttonIOS}>
      <Typography variant="button">
        {translate('on_boarding.lets_go')}
      </Typography>
    </Pressable>
  );
};
