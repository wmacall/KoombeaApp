import {IFighter, IUniverses} from '@api';

function numberSeparator(number: number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const onFormatFighters = (fighters: IFighter[] | undefined) => {
  return fighters?.map(fighter => ({
    ...fighter,
    downloads: numberSeparator(Number(fighter?.downloads)),
  }));
};

export const onFormatUniverses = (universes: IUniverses[] | undefined) => {
  const newUniverse = {
    description: 'Custom filter',
    name: '',
    objectID: 'AF',
  };

  if (universes) {
    return [newUniverse, ...universes];
  }

  return [newUniverse];
};
