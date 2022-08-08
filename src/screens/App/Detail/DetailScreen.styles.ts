import {COLORS} from '@assets';
import {ByOS, theme} from '@utils';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ByOS(COLORS.ATHENS_GRAY, COLORS.WHITE),
  },
  containerContent: {
    marginTop: theme.scaleHeight(36, 20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: theme.scaleWidth(19),
  },
  universe: {
    marginBottom: theme.scaleHeight(23),
  },
  price: {
    backgroundColor: COLORS.AZURE_RADIANCE,
    height: theme.scaleHeight(40),
    width: theme.scaleWidth(84),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.scaleWidth(7),
    marginTop: theme.scaleHeight(5, 18),
  },
  image: {
    height: theme.scaleHeight(160),
    width: theme.scaleWidth(160),
  },
  description: {
    marginTop: theme.scaleHeight(23),
    marginLeft: theme.scaleWidth(16),
    marginRight: theme.scaleWidth(13),
  },
});
