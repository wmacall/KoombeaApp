import React, {FC} from 'react';
import {Pressable} from 'react-native';
import {Typography} from '../Typography';
import {COLORS} from '@assets';
import {IButtonFilterProps} from './ButtonFilter.types';
import styles from './ButtonFilter.styles';

export const ButtonFilter: FC<IButtonFilterProps> = ({
  name,
  isActive,
  isFirst,
  onPressFilter,
}) => (
  <Pressable
    onPress={onPressFilter}
    style={[
      styles.container,
      isFirst && styles.isFirst,
      isActive && styles.isActive,
    ]}>
    <Typography color={COLORS.WHITE} style={styles.button} variant="detail">
      {name}
    </Typography>
  </Pressable>
);
