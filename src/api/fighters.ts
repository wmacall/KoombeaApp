import {AxiosResponse} from 'axios';
import {dispatchRequest} from './dispatchRequest';

export interface IFighter {
  objectID: string;
  name: string;
  universe: string;
  price: string;
  popular: boolean;
  rate: number;
  downloads: string;
  description: string;
  created_at: string;
  imageURL: string;
}

export const getFighters = (): Promise<AxiosResponse<IFighter[]> | undefined> =>
  dispatchRequest({
    method: 'get',
    url: 'fighters',
  });
