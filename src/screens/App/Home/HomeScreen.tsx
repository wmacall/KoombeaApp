import React, {FC, useCallback, useEffect, useMemo, useState} from 'react';
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeUniverse, setActiveUniverse] = useState('');
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
    setIsRefreshing(false);
  }, [onGetFighters]);

  const onPressFilter = (index: number, universe: string) => {
    setActiveIndex(index);
    setActiveUniverse(universe);
  };

  const fighterToShow = useMemo(() => {
    const universeToFilter = activeUniverse !== '' ? activeUniverse : '';
    if (universeToFilter !== '') {
      return (
        fighters?.filter(({universe}) => universe === universeToFilter) || []
      );
    }
    return fighters;
  }, [fighters, activeUniverse]);

  useEffect(() => {
    onGetFighters();
  }, [onGetFighters]);

  return (
    <View style={styles.container}>
      <View>
        <ScrollView
          bounces={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
          horizontal>
          {UNIVERSES.map(({name, objectID}, index) => (
            <ButtonFilter
              onPressFilter={() => onPressFilter(index, name)}
              isFirst={index === 0}
              isActive={index === activeIndex}
              name={name}
              key={`${objectID}-${name}`}
            />
          ))}
        </ScrollView>
      </View>
      {isLoadingFighters ? (
        <ActivityIndicator color={COLORS.MERCURY} />
      ) : (
        <FlatList
          data={fighterToShow}
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
