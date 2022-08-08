import {COLORS} from '@assets';
import {ByOS, theme} from '@utils';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ByOS(COLORS.ATHENS_GRAY, COLORS.WHITE),
  },
  section: {
    backgroundColor: COLORS.WHITE,
    marginBottom: theme.scaleHeight(15),
    alignItems: 'center',
    paddingVertical: theme.scaleHeight(30),
  },
  containerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: theme.scaleWidth(36, 24),
    marginTop: theme.scaleHeight(284, 160),
  },
  button: {
    width: theme.scaleWidth(164, 151),
    height: theme.scaleHeight(48),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.DODGER_BLUE,
    borderRadius: theme.scaleHeight(22),
  },
  reset: {
    backgroundColor: COLORS.ALTO,
  },
  sectionText: {
    marginTop: theme.scaleHeight(14),
    marginBottom: theme.scaleHeight(6),
    textTransform: 'uppercase',
    marginLeft: theme.scaleWidth(20),
    color: COLORS.TUNA,
  },
});
