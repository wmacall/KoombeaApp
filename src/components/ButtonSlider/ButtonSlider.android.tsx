import React from 'react';
import {Alert, Pressable} from 'react-native';
import styles from './ButtonSlider.styles';

export const ButtonSliderAndroid = () => (
  <Pressable
    onPress={() => {
      Alert.alert('Next');
    }}
    style={styles.buttonAndroid}
  />
);
