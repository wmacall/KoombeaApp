import React, {FC} from 'react';
import {Pressable, View} from 'react-native';
import {Typography} from '../Typography';
import {IFilters} from './Filters.types';
import styles from './Filters.styles';

export const Filters: FC<IFilters> = ({text, onPressFilter, isActive}) => {
  return (
    <Pressable style={styles.container} onPress={onPressFilter}>
      <View style={styles.row}>
        <Typography variant="option">{text}</Typography>
        <View style={[styles.option, isActive && styles.isActive]} />
      </View>
      <View style={styles.separator} />
    </Pressable>
  );
};
