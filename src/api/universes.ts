import {dispatchRequest} from './dispatchRequest';

export const getUniverses = () =>
  dispatchRequest({
    method: 'get',
    url: 'universes',
  });
