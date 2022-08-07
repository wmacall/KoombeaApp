import {StyleSheet} from 'react-native';
import {COLORS} from '@assets';
import {theme} from '@utils';

export default StyleSheet.create({
  container: {
    borderBottomWidth: theme.scaleWidth(1),
    borderBottomColor: COLORS.MERCURY,
    flexDirection: 'row',
    paddingLeft: theme.scaleWidth(13),
    paddingRight: theme.scaleWidth(22),
    height: theme.scaleHeight(104),
    alignItems: 'center',
  },
  image: {
    height: theme.scaleHeight(73),
    width: theme.scaleWidth(73),
    marginRight: theme.scaleWidth(13),
  },
  containerInformation: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerDetail: {
    alignItems: 'flex-end',
  },
});
