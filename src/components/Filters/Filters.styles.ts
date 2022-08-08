import {COLORS} from '@assets';
import {theme} from '@utils';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: theme.scaleWidth(20),
    paddingVertical: theme.scaleHeight(11),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  option: {
    width: theme.scaleWidth(20),
    height: theme.scaleWidth(20),
    borderRadius: theme.scaleWidth(10),
    borderColor: COLORS.FRENCH_GRAY,
    borderWidth: 2,
  },
  isActive: {
    backgroundColor: COLORS.DODGER_BLUE,
    borderWidth: 0,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.FRENCH_GRAY,
    position: 'absolute',
    bottom: 0,
    left: theme.scaleWidth(20),
  },
});
