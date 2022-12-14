import React, {FC} from 'react';
import {Pressable, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Typography} from '../Typography';
import {IInfoCardProps} from './InfoCard.types';
import styles from './InfoCard.styles';
import {translate} from '@i18n';

export const InfoCard: FC<IInfoCardProps> = ({
  name,
  universe,
  price,
  rate,
  downloads,
  imageURL,
  onPressCard,
}) => (
  <Pressable onPress={onPressCard} style={styles.container}>
    <FastImage
      resizeMode={FastImage.resizeMode.contain}
      style={styles.image}
      source={{
        uri: imageURL,
        priority: FastImage.priority.high,
      }}
    />
    <View style={styles.containerInformation}>
      <View>
        <Typography variant="subtitle">{name}</Typography>
        <Typography variant="detail">{universe}</Typography>
      </View>
      <View style={styles.containerDetail}>
        <Typography variant="detail">
          {translate('detail.price', {price})}
        </Typography>
        <Typography variant="detail">
          {translate('detail.rate', {rate})}
        </Typography>
        <Typography variant="detail">
          {translate('detail.downloads', {downloads})}
        </Typography>
      </View>
    </View>
  </Pressable>
);
