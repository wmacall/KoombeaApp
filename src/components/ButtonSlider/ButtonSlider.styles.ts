import {StyleSheet} from 'react-native';
import {COLORS} from '@assets';
import {theme} from '@utils';

export default StyleSheet.create({
  buttonAndroid: {
    width: theme.scaleWidth(56),
    height: theme.scaleWidth(56),
    borderRadius: theme.scaleWidth(28),
    backgroundColor: COLORS.WHITE,
    position: 'absolute',
    bottom: theme.scaleHeight(32),
    right: theme.scaleWidth(16),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: theme.scaleHeight(12),
    },
    elevation: theme.scaleHeight(12),
  },
  buttonIOS: {
    position: 'absolute',
    bottom: theme.scaleHeight(134),
    alignSelf: 'center',
    backgroundColor: COLORS.WHITE,
    width: theme.scaleWidth(337),
    height: theme.scaleHeight(48),
    borderRadius: theme.scaleHeight(22),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
