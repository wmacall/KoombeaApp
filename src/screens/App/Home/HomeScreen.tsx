import React, {FC, useCallback} from 'react';
import {FlatList, View} from 'react-native';
import {DATA} from '@constants';
import {InfoCard} from '@components';
import {IHomeScreenProps} from './HomeScreen.types';
import styles from './HomeScreen.styles';
import {EAppRoutes} from '@routes';

export const HomeScreen: FC<IHomeScreenProps> = ({navigation}) => {
  const onPressCard = useCallback(
    item => {
      navigation.navigate(EAppRoutes.DETAIL_SCREEN, {item});
    },
    [navigation],
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={({objectID, name}) => `${objectID}-${name}`}
        renderItem={({item}) => (
          <InfoCard onPressCard={() => onPressCard(item)} {...item} />
        )}
      />
    </View>
  );
};
