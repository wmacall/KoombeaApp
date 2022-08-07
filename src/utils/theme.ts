import {Dimensions, PixelRatio, Platform} from 'react-native';
import ByOS from './platform';

const BASE_WIDTH = ByOS(414, 360);
const BASE_HEIGHT = ByOS(896, 760);
const dimensionType = Platform.OS === 'ios' ? 'screen' : 'window';
export const screen = Dimensions.get(dimensionType);

const widthToDp = (givenWidth: number): number => {
  let widthValue = (givenWidth * 100) / BASE_WIDTH;
  widthValue = widthValue / 100;
  widthValue = screen.width * widthValue;
  return PixelRatio.roundToNearestPixel(widthValue);
};
const heightToDp = (givenHeight: number): number => {
  let heightValue = (givenHeight * 100) / BASE_HEIGHT;
  heightValue = heightValue / 100;
  heightValue = screen.height * heightValue;
  return PixelRatio.roundToNearestPixel(heightValue);
};

export const theme = {
  scaleWidth: (ios: number): number => widthToDp(ios),
  scaleHeight: (ios: number): number => heightToDp(ios),
  scaleFont: (ios: number): number => heightToDp(ios),
};
