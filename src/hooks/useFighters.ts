import {useCallback, useState} from 'react';
import {IFighter, getFighters} from '@api';
import {onFormatFighters} from '@utils';

export const useFighters = () => {
  const [isLoadingFighters, setIsLoadingFighters] = useState(true);
  const [fighters, setFighters] = useState<IFighter[] | undefined>([]);

  const onGetFighters = useCallback(async () => {
    try {
      const data = await getFighters();
      setFighters(onFormatFighters(data?.data));
      setIsLoadingFighters(false);
    } catch (error) {
      setIsLoadingFighters(false);
    }
  }, []);

  return {
    fighters,
    isLoadingFighters,
    onGetFighters,
  };
};
