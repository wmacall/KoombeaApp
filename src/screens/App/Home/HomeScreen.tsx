import React, {FC, useCallback} from 'react';
import {Button, View} from 'react-native';
import {EAppRoutes} from '@routes';
import {IHomeScreenProps} from './HomeScreen.types';

export const HomeScreen: FC<IHomeScreenProps> = ({navigation}) => {
  const onPressDetail = useCallback(() => {
    navigation.navigate(EAppRoutes.DETAIL_SCREEN);
  }, [navigation]);

  return (
    <View>
      <Button onPress={onPressDetail} title="go to detail" />
    </View>
  );
};
