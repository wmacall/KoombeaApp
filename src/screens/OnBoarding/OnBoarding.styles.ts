import {StyleSheet} from 'react-native';
import {COLORS} from '@assets';
import {screen, theme} from '@utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DODGER_BLUE,
  },
  containerSlide: {
    width: screen.width,
    flex: 1,
  },
  image: {
    marginTop: theme.scaleHeight(144),
    alignSelf: 'center',
  },
  textSlide: {
    position: 'absolute',
    bottom: theme.scaleHeight(310, 124),
    alignSelf: 'center',
    textAlign: 'center',
  },
  containerDots: {
    position: 'absolute',
    zIndex: 1,
    bottom: theme.scaleHeight(242, 56),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    backgroundColor: COLORS.WHITE,
    height: theme.scaleWidth(8),
    width: theme.scaleWidth(8),
    borderRadius: theme.scaleWidth(4),
    marginRight: theme.scaleWidth(8),
  },
  activeDot: {
    backgroundColor: COLORS.CERULEAN_BLUE,
  },
});
