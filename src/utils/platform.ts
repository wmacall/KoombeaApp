import {Platform} from 'react-native';

export const ByOS = (ios: any, android?: any) =>
  Platform.select({ios, android});
