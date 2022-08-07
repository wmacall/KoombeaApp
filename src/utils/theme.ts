import {Dimensions, PixelRatio, Platform} from 'react-native';
import {ByOS} from './platform';

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
  scaleWidth: (ios: number, android: number | null = null): number => {
    if (!android) {
      return widthToDp(ios);
    }
    return widthToDp(ByOS(ios, android));
  },
  scaleHeight: (ios: number, android: number | null = null): number => {
    if (!android) {
      return heightToDp(ios);
    }
    return heightToDp(ByOS(ios, android));
  },
  scaleFont: (ios: number, android: number | null = null): number => {
    if (!android) {
      return heightToDp(ios);
    }
    return heightToDp(ByOS(ios, android));
  },
};
