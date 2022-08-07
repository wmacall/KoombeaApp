import React from 'react';
import {Alert, Pressable} from 'react-native';
import {translate} from '@i18n';
import {Typography} from '../Typography';
import styles from './ButtonSlider.styles';

export const ButtonSliderIOS = () => (
  <Pressable
    onPress={() => {
      Alert.alert('Next');
    }}
    style={styles.buttonIOS}>
    <Typography variant="button">{translate('on_boarding.lets_go')}</Typography>
  </Pressable>
);
