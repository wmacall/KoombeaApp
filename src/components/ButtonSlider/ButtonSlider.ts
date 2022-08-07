import {ByOS} from '@utils';
import {ButtonSliderAndroid} from './ButtonSlider.android';
import {ButtonSliderIOS} from './ButtonSlider.ios';

export const ButtonSlider = ByOS(ButtonSliderIOS, ButtonSliderAndroid);
