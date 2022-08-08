import React, {FC, useCallback, useEffect, useMemo, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  ScrollView,
  View,
} from 'react-native';
import {ButtonFilter, EmptyResult, Header, InfoCard} from '@components';
import {IHomeScreenProps} from './HomeScreen.types';
import {useFighters, useUniverses} from '@hooks';
import {EAppRoutes} from '@routes';
import {COLORS} from '@assets';
import styles from './HomeScreen.styles';
import {translate} from '@i18n';
export const HomeScreen: FC<IHomeScreenProps> = ({navigation, route}) => {
  const params = route.params;
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeUniverse, setActiveUniverse] = useState('');
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

  const onPressFilterButton = useCallback(() => {
    navigation.navigate(EAppRoutes.FILTER_SCREEN);
  }, [navigation]);

  const fighterToShow = useMemo(() => {
    const FILTERS = {
      rating: params?.rating || 0,
      sort: params?.sort || '',
    };
    const universeToFilter = activeUniverse !== '' ? activeUniverse : '';
    return (
      fighters
        ?.filter(({universe, rate}) => {
          if (FILTERS.rating || FILTERS.sort) {
            return (
              universe.includes(universeToFilter) && rate >= FILTERS.rating
            );
          }
          return universe.includes(universeToFilter);
        })
        .sort((a, b) => {
          if (FILTERS.sort === 'name') {
            return a.name > b.name;
          }
          if (FILTERS.sort !== 'name') {
            return a[FILTERS.sort as keyof {}] - b[FILTERS.sort as keyof {}];
          }
        }) || []
    );
  }, [activeUniverse, fighters, params?.rating, params?.sort]);

  useEffect(() => {
    onGetFighters();
    onGetUniverses();
  }, [onGetFighters, onGetUniverses]);

  return (
    <View style={styles.container}>
      <Header
        onPressFilterButton={onPressFilterButton}
        showFilterButton
        text={translate('fighters')}
      />
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
                name={name || 'All'}
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
            ListEmptyComponent={<EmptyResult />}
            refreshControl={
              <RefreshControl
                colors={[COLORS.AZURE_RADIANCE]}
                tintColor={COLORS.AZURE_RADIANCE}
                onRefresh={onRefresh}
                refreshing={isRefreshing}
              />
            }
            contentContainerStyle={styles.contentContainerStyleList}
            renderItem={({item}) => (
              <InfoCard onPressCard={() => onPressCard(item)} {...item} />
            )}
          />
        )}
      </View>
    </View>
  );
};
