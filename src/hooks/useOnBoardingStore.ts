import create from 'zustand';
import {persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IOnBoardingState {
  isFirstTime: boolean;
  onCompleteOnBoarding: () => void;
}

export const useOnBoardingStore = create<IOnBoardingState, []>(
  persist(
    (set, _) => ({
      isFirstTime: false,
      onCompleteOnBoarding: () =>
        set({
          isFirstTime: true,
        }),
    }),
    {
      name: 'firstTime-storage',
      getStorage: () => AsyncStorage,
    },
  ),
);
