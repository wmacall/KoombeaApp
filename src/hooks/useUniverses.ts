import {useCallback, useState} from 'react';
import {IUniverses, getUniverses} from '@api';
import {onFormatUniverses} from '@utils';

export const useUniverses = () => {
  const [isLoadingUniverses, setIsLoadingUniverses] = useState(true);
  const [universes, setUniverses] = useState<IUniverses[] | undefined>([]);

  const onGetUniverses = useCallback(async () => {
    setIsLoadingUniverses(true);
    // try {
    //   const data = await getUniverses();
    //   setUniverses(onFormatUniverses(data?.data));
    //   setIsLoadingUniverses(false);
    // } catch (error) {
    //   setIsLoadingUniverses(false);
    // }
  }, []);

  return {
    universes,
    isLoadingUniverses,
    onGetUniverses,
  };
};
