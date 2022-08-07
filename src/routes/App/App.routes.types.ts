import {IFighter} from '@api';

export enum EAppRoutes {
  HOME_SCREEN = 'HOME_SCREEN',
  DETAIL_SCREEN = 'DETAIL_SCREEN',
}

export type TAppStackRouter = {
  [EAppRoutes.HOME_SCREEN]: undefined;
  [EAppRoutes.DETAIL_SCREEN]: {item: IFighter};
};
