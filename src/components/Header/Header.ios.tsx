import React, {FC, useCallback} from 'react';
import {Pressable, SafeAreaView, StatusBar, View} from 'react-native';
import {Typography} from '../Typography';
import styles from './Header.styles';
import {IHeaderProps} from './Header.types';
import {ArrowLeftIcon, COLORS, FilterIcon} from '@assets';

export const HeaderIOS: FC<IHeaderProps> = ({
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
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.containerIOS}>
        <StatusBar barStyle="dark-content" />
        <View
          style={[
            styles.containerButtons,
            {
              justifyContent: `flex-${showBackButton ? 'start' : 'end'}`,
            },
          ]}>
          {showBackButton ? (
            <Pressable onPress={onPressBack} style={styles.backButtonIOS}>
              <ArrowLeftIcon />
            </Pressable>
          ) : null}
          {showFilterButton ? (
            <Pressable
              onPress={onPressFilterButton}
              style={styles.filterButtonIOS}>
              <FilterIcon fill={COLORS.DODGER_BLUE} />
            </Pressable>
          ) : null}
        </View>
        <Typography style={styles.titleIOS} variant="header">
          {text}
        </Typography>
      </View>
    </SafeAreaView>
  );
};
