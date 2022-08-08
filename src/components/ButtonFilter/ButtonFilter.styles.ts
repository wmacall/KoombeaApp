import {COLORS} from '@assets';
import {theme} from '@utils';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: theme.scaleHeight(40),
    backgroundColor: COLORS.AZURE_RADIANCE,
    marginRight: theme.scaleWidth(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  isFirst: {
    marginLeft: theme.scaleWidth(16),
  },
  isActive: {
    backgroundColor: COLORS.CONGRESS_BLUE,
  },
  button: {
    paddingHorizontal: theme.scaleWidth(11),
  },
});
