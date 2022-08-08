import React from 'react';
import {Image, View} from 'react-native';
import {translate} from '@i18n';
import {Typography} from '../Typography';
import styles from './EmptyResult.styles';

export const EmptyResult = () => (
  <View style={styles.container}>
    <Image
      style={styles.image}
      resizeMode="contain"
      source={require('../../assets/images/Empty/empty.png')}
    />
    <Typography variant="header">{translate('no_data_found')}</Typography>
  </View>
);
