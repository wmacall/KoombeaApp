import React, {FC, useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  ScrollView,
  View,
} from 'react-native';
import {UNIVERSES} from '@constants';
import {ButtonFilter, InfoCard} from '@components';
import {IHomeScreenProps} from './HomeScreen.types';
import {useFighters} from '@hooks';
import {EAppRoutes} from '@routes';
import {COLORS} from '@assets';
import styles from './HomeScreen.styles';

export const HomeScreen: FC<IHomeScreenProps> = ({navigation}) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const {fighters, isLoadingFighters, onGetFighters} = useFighters();
  const onPressCard = useCallback(
    item => {
      navigation.navigate(EAppRoutes.DETAIL_SCREEN, {item});
    },
    [navigation],
  );
  const onRefresh = useCallback(() => {
    setIsRefreshing(true);
    onGetFighters();
  }, [onGetFighters]);

  useEffect(() => {
    onGetFighters();
  }, [onGetFighters]);

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
      {isLoadingFighters ? (
        <ActivityIndicator color={COLORS.MERCURY} />
      ) : (
        <FlatList
          data={fighters}
          keyExtractor={({objectID, name}) => `${objectID}-${name}`}
          refreshControl={
            <RefreshControl
              colors={[COLORS.AZURE_RADIANCE]}
              tintColor={COLORS.AZURE_RADIANCE}
              onRefresh={onRefresh}
              refreshing={isRefreshing}
            />
          }
          renderItem={({item}) => (
            <InfoCard onPressCard={() => onPressCard(item)} {...item} />
          )}
        />
      )}
    </View>
  );
};
