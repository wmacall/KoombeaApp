import React, {FC} from 'react';
import {Pressable, SafeAreaView, StatusBar, View} from 'react-native';
import {Typography} from '../Typography';
import styles from './Header.styles';
import {IHeaderProps} from './Header.types';
import {ArrowLeftIcon, COLORS, FilterIcon} from '@assets';
import {useNavigation} from '@react-navigation/native';

export const HeaderIOS: FC<IHeaderProps> = ({
  text,
  showBackButton,
  showFilterButton,
}) => {
  const {goBack} = useNavigation();
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
            <Pressable onPress={goBack} style={styles.backButtonIOS}>
              <ArrowLeftIcon />
            </Pressable>
          ) : null}
          {showFilterButton ? (
            <Pressable style={styles.filterButtonIOS}>
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
