import React from 'react';
import {Alert, Pressable, Text} from 'react-native';
import {translate} from '@i18n';
import styles from './ButtonSlider.styles';

export const ButtonSliderIOS = () => (
  <Pressable
    onPress={() => {
      Alert.alert('Next');
    }}
    style={styles.buttonIOS}>
    <Text>{translate('on_boarding.lets_go')}</Text>
  </Pressable>
);
