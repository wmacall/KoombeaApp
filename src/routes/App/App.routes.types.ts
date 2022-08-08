import {IFighter} from '@api';

export enum EAppRoutes {
  HOME_SCREEN = 'HOME_SCREEN',
  DETAIL_SCREEN = 'DETAIL_SCREEN',
  FILTER_SCREEN = 'FILTER_SCREEN',
}

export type TAppStackRouter = {
  [EAppRoutes.HOME_SCREEN]: {rating?: number; sort: string};
  [EAppRoutes.DETAIL_SCREEN]: {item: IFighter};
  [EAppRoutes.FILTER_SCREEN]: undefined;
};
