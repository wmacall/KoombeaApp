import React, {FC, useCallback, useEffect, useMemo, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  ScrollView,
  View,
} from 'react-native';
import {ButtonFilter, InfoCard} from '@components';
import {IHomeScreenProps} from './HomeScreen.types';
import {useFighters, useUniverses} from '@hooks';
import {EAppRoutes} from '@routes';
import {COLORS} from '@assets';
import styles from './HomeScreen.styles';
export const HomeScreen: FC<IHomeScreenProps> = ({navigation}) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeUniverse, setActiveUniverse] = useState('All');
  const {fighters, isLoadingFighters, onGetFighters} = useFighters();
  const {universes, isLoadingUniverses, onGetUniverses} = useUniverses();
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
    if (universeToFilter !== 'All') {
      return (
        fighters?.filter(({universe}) => universe === universeToFilter) || []
      );
    }
    return fighters;
  }, [fighters, activeUniverse]);

  useEffect(() => {
    onGetFighters();
    onGetUniverses();
  }, [onGetFighters, onGetUniverses]);

  return (
    <View style={styles.container}>
      <View>
        {isLoadingUniverses ? (
          <ActivityIndicator />
        ) : (
          <ScrollView
            bounces={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.contentContainerStyle}
            horizontal>
            {universes?.map(({name, objectID}, index) => (
              <ButtonFilter
                onPressFilter={() => onPressFilter(index, name)}
                isFirst={index === 0}
                isActive={index === activeIndex}
                name={name}
                key={`${objectID}-${name}`}
              />
            ))}
          </ScrollView>
        )}
      </View>
      <View>
        {isLoadingFighters ? (
          <ActivityIndicator />
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
    </View>
  );
};
