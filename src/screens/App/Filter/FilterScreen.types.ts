import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {EAppRoutes, TAppStackRouter} from '@routes';

export type IFilterScreen = NativeStackScreenProps<
  TAppStackRouter,
  EAppRoutes.DETAIL_SCREEN
>;
