import {StyleSheet} from 'react-native';
import {COLORS} from '@assets';
import {ByOS} from '@utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ByOS(COLORS.ATHENS_GRAY, COLORS.WHITE),
  },
});
