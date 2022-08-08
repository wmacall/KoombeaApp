import React, {FC} from 'react';
import {Pressable, View} from 'react-native';
import {COLORS, StarIcon} from '@assets';
import {IRatingProps} from './Rating.types';
import styles from './Rating.styles';

export const Rating: FC<IRatingProps> = ({rating}) => (
  <Pressable style={styles.container}>
    {Array.from({length: 5}).map((_, index) => (
      <View key={index}>
        <StarIcon
          fill={index < rating ? COLORS.SUPER_NOVA : COLORS.DUSTY_GRAY}
        />
      </View>
    ))}
  </Pressable>
);
