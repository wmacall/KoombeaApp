import {ByOS} from '@utils';
import {HeaderAndroid} from './Header.android';
import {HeaderIOS} from './Header.ios';

export const Header = ByOS(HeaderIOS, HeaderAndroid);
