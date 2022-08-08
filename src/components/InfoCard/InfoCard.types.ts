import {IFighter} from '@api';

export interface IInfoCardProps extends IFighter {
  onPressCard: (item: any) => void;
}
