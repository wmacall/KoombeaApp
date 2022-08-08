import {StyleSheet} from 'react-native';
import {COLORS} from '@assets';
import {theme} from '@utils';

export default StyleSheet.create({
  safeArea: {
    backgroundColor: COLORS.WHITE,
  },
  containerIOS: {
    borderBottomWidth: 1,
    borderColor: COLORS.FRENCH_GRAY,
  },
  containerButtons: {
    flexDirection: 'row',
    marginBottom: theme.scaleHeight(7),
  },
  backButtonIOS: {
    paddingHorizontal: theme.scaleWidth(12),
  },
  filterButtonIOS: {
    paddingHorizontal: theme.scaleWidth(19),
  },
  titleIOS: {
    marginLeft: theme.scaleWidth(20),
    marginTop: theme.scaleHeight(8),
    marginBottom: theme.scaleHeight(8),
  },
  headerAndroid: {
    height: theme.scaleHeight(56),
    backgroundColor: COLORS.AZURE_RADIANCE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerContentAndroid: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonAndroid: {
    paddingRight: theme.scaleWidth(20),
    paddingLeft: theme.scaleWidth(20),
  },
  titleAndroid: {
    marginLeft: theme.scaleWidth(16),
  },
  filterIconAndroid: {
    paddingRight: theme.scaleWidth(22),
  },
});
