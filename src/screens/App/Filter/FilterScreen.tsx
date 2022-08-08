import React, {FC, useCallback, useState} from 'react';
import {Pressable, View} from 'react-native';
import {Filters, Header, Rating, Typography} from '@components';
import {IFilterScreen} from './FilterScreen.types';
import {translate} from '@i18n';
import {EAppRoutes} from '@routes';
import {FILTERS} from '@constants';
import styles from './FilterScreen.styles';
import {COLORS} from '@assets';

export const FilterScreen: FC<IFilterScreen> = ({navigation}) => {
  const [rating, setRating] = useState(0);
  const [sort, setSort] = useState('');
  const [activeIndex, setActiveIndex] = useState(-1);
  const onPressStar = useCallback(rate => {
    setRating(rate);
  }, []);

  const onGoBack = useCallback(
    (applyFilters: boolean = false) => {
      if (!applyFilters) {
        return navigation.goBack();
      } else {
        return navigation.navigate(EAppRoutes.HOME_SCREEN, {
          rating,
          sort,
        });
      }
    },
    [navigation, rating, sort],
  );

  const onPressFilter = useCallback((key: string, index: number) => {
    setSort(key);
    setActiveIndex(index);
  }, []);

  const onPressReset = useCallback(() => {
    setActiveIndex(-1);
    setSort('');
    setRating(0);
  }, []);

  return (
    <View style={styles.container}>
      <Header
        onPressGoBack={() => onGoBack()}
        showBackButton
        text={translate('filter_screen.title')}
      />
      <Typography variant="section" style={styles.sectionText}>
        {translate('filter_screen.sort_by')}
      </Typography>
      {FILTERS.map(({title, key}, index) => (
        <Filters
          key={`${key}-${index}`}
          isActive={index === activeIndex}
          onPressFilter={() => onPressFilter(key, index)}
          text={title}
        />
      ))}
      <Typography style={styles.sectionText} variant="section">
        {translate('filter_screen.filter_by')}
      </Typography>
      <View style={styles.section}>
        <Rating
          disabled={false}
          rating={rating}
          onPressStar={onPressStar}
          width={30}
          height={30}
        />
      </View>
      <View style={styles.containerButtons}>
        <Pressable onPress={onPressReset} style={[styles.button, styles.reset]}>
          <Typography color={COLORS.SCORPION} variant="button">
            {translate('reset')}
          </Typography>
        </Pressable>
        <Pressable onPress={() => onGoBack(true)} style={styles.button}>
          <Typography color={COLORS.WHITE} variant="button">
            {translate('apply')}
          </Typography>
        </Pressable>
      </View>
    </View>
  );
};
