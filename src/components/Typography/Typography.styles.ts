import {COLORS} from '@assets';
import {ByOS, theme} from '@utils';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  title: {
    color: COLORS.WHITE,
    fontSize: theme.scaleFont(25),
    lineHeight: theme.scaleFont(29),
  },
  button: {
    color: COLORS.DODGER_BLUE,
    fontSize: theme.scaleFont(16, 20),
    lineHeight: theme.scaleFont(20, 25),
    fontWeight: '500',
  },
  header: {
    fontSize: theme.scaleFont(34, 20),
    lineHeight: theme.scaleFont(41, 23),
    fontWeight: ByOS('700', '500'),
  },
  detail: {
    color: COLORS.BLACK,
    fontSize: theme.scaleFont(14),
    lineHeight: theme.scaleFont(20),
  },
  subtitle: {
    color: COLORS.BLACK,
    fontSize: theme.scaleFont(16),
    lineHeight: theme.scaleFont(24),
    fontWeight: '700',
  },
  section: {
    color: COLORS.DUSTY_GRAY,
    fontSize: theme.scaleFont(13, 14),
    lineHeight: theme.scaleFont(18, 24),
  },
  option: {
    color: COLORS.BLACK,
    fontSize: theme.scaleFont(17),
    lineHeight: theme.scaleFont(22),
  },
  default: {
    color: COLORS.WHITE,
    fontSize: theme.scaleFont(15),
    lineHeight: theme.scaleFont(19),
  },
  h1: {
    color: COLORS.BLACK,
    fontSize: theme.scaleFont(24),
    lineHeight: theme.scaleFont(24),
    fontWeight: '700',
  },
  h2: {
    color: COLORS.BLACK,
    fontSize: theme.scaleFont(22),
    lineHeight: theme.scaleFont(27),
    fontWeight: '700',
  },
});
