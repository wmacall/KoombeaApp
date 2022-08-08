import React, {FC, useCallback} from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Header, Rating, Typography} from '@components';
import {translate} from '@i18n';
import {COLORS} from '@assets';
import {IDetailScreenProps} from './DetailScreen.types';
import styles from './DetailScreen.styles';

export const DetailScreen: FC<IDetailScreenProps> = ({route, navigation}) => {
  const fighter = route.params.item;

  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Header onPressGoBack={onGoBack} showBackButton text={fighter.name} />
      <View style={styles.containerContent}>
        <View>
          <Typography variant="h1">{fighter.name}</Typography>
          <Typography style={styles.universe} variant="detail">
            {fighter.universe}
          </Typography>
          <Rating rating={fighter.rate} />
          <Typography variant="detail">
            {translate('detail.downloads', {downloads: fighter.downloads})}
          </Typography>
          <View style={styles.price}>
            <Typography variant="h2" color={COLORS.WHITE}>
              ${fighter.price}
            </Typography>
          </View>
        </View>
        <FastImage
          resizeMode={FastImage.resizeMode.contain}
          style={styles.image}
          source={{
            uri: fighter.imageURL,
            priority: FastImage.priority.high,
          }}
        />
      </View>
      <Typography style={styles.description}>{fighter.description}</Typography>
    </View>
  );
};
