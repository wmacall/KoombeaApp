import React, {FC, useCallback} from 'react';
import {Button, Text, View} from 'react-native';
import {EAppRoutes} from '@routes';
import {translate} from '@i18n';
import {IHomeScreenProps} from './HomeScreen.types';

export const HomeScreen: FC<IHomeScreenProps> = ({navigation}) => {
  const onPressDetail = useCallback(() => {
    navigation.navigate(EAppRoutes.DETAIL_SCREEN);
  }, [navigation]);

  return (
    <View>
      <Text>{translate('home_screen')}</Text>
      <Button onPress={onPressDetail} title="go to detail" />
    </View>
  );
};
