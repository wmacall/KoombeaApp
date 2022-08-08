import {theme} from '@utils';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: theme.scaleHeight(50),
    marginBottom: theme.scaleHeight(50),
  },
});
