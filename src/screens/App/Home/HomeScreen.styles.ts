import {StyleSheet} from 'react-native';
import {COLORS} from '@assets';
import {ByOS, theme} from '@utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ByOS(COLORS.ATHENS_GRAY, COLORS.WHITE),
  },
  contentContainerStyle: {
    backgroundColor: COLORS.WHITE,
    paddingBottom: theme.scaleHeight(12, 10),
    paddingTop: theme.scaleHeight(17, 20),
  },
});
