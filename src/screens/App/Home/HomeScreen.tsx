import React, {FC, useCallback} from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {DATA, UNIVERSES} from '@constants';
import {ButtonFilter, InfoCard} from '@components';
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
      <ScrollView
        bounces={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        horizontal>
        {UNIVERSES.map(({name, objectID}, index) => (
          <ButtonFilter
            isFirst={index === 0}
            isActive={index === 3}
            name={name}
            key={`${objectID}-${name}`}
          />
        ))}
      </ScrollView>
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
