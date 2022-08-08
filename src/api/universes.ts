import {AxiosResponse} from 'axios';
import {dispatchRequest} from './dispatchRequest';

export interface IUniverses {
  objectID: string;
  name: string;
  description: string;
}

export const getUniverses = (): Promise<
  AxiosResponse<IUniverses[]> | undefined
> =>
  dispatchRequest({
    method: 'get',
    url: 'universes',
  });
