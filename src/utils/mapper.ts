import {IFighter} from '@api';

function numberSeparator(number: number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const onFormatFighters = (fighters: IFighter[] | undefined) => {
  return fighters?.map(fighter => ({
    ...fighter,
    downloads: numberSeparator(Number(fighter?.downloads)),
  }));
};
