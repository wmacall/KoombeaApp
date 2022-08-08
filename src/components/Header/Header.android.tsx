import React, {FC, useCallback} from 'react';
import {Pressable, SafeAreaView, StatusBar, View} from 'react-native';
import {FilterIcon, BackIcon, COLORS} from '@assets';
import {Typography} from '../Typography';
import {IHeaderProps} from './Header.types';
import styles from './Header.styles';

export const HeaderAndroid: FC<IHeaderProps> = ({
  text,
  showBackButton,
  showFilterButton,
  onPressFilterButton,
  onPressGoBack,
}) => {
  const onPressBack = useCallback(() => {
    if (onPressGoBack) {
      onPressGoBack();
    }
  }, [onPressGoBack]);

  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor={COLORS.CERULEAN_BLUE}
        barStyle="light-content"
      />
      <View style={styles.headerAndroid}>
        <View style={styles.containerContentAndroid}>
          {showBackButton ? (
            <Pressable style={styles.backButtonAndroid} onPress={onPressBack}>
              <BackIcon />
            </Pressable>
          ) : null}
          <Typography
            color={COLORS.WHITE}
            style={styles.titleAndroid}
            variant="header">
            {text}
          </Typography>
        </View>
        {showFilterButton ? (
          <Pressable
            onPress={onPressFilterButton}
            style={styles.filterIconAndroid}>
            <FilterIcon />
          </Pressable>
        ) : null}
      </View>
    </SafeAreaView>
  );
};
