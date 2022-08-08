import React, {FC} from 'react';
import {Pressable, View} from 'react-native';
import {COLORS, StarIcon} from '@assets';
import {IRatingProps} from './Rating.types';
import styles from './Rating.styles';

export const Rating: FC<IRatingProps> = ({
  rating,
  width,
  height,
  onPressStar,
  disabled = true,
}) => (
  <View style={styles.container}>
    {Array.from({length: 5}).map((_, index) => (
      <Pressable
        disabled={disabled}
        onPress={() => onPressStar(index + 1)}
        key={index}>
        <StarIcon
          width={width}
          height={height}
          fill={index < rating ? COLORS.SUPER_NOVA : COLORS.DUSTY_GRAY}
        />
      </Pressable>
    ))}
  </View>
);
