import React, {FC} from 'react';
import {Pressable, SafeAreaView, StatusBar, View} from 'react-native';
import {FilterIcon, BackIcon, COLORS} from '@assets';
import {Typography} from '../Typography';
import {IHeaderProps} from './Header.types';
import styles from './Header.styles';
import {useNavigation} from '@react-navigation/native';

export const HeaderAndroid: FC<IHeaderProps> = ({
  text,
  showBackButton,
  showFilterButton,
}) => {
  const {goBack} = useNavigation();
  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor={COLORS.CERULEAN_BLUE}
        barStyle="light-content"
      />
      <View style={styles.headerAndroid}>
        <View style={styles.containerContentAndroid}>
          {showBackButton ? (
            <Pressable style={styles.backButtonAndroid} onPress={goBack}>
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
          <Pressable style={styles.filterIconAndroid}>
            <FilterIcon />
          </Pressable>
        ) : null}
      </View>
    </SafeAreaView>
  );
};
