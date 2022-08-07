import {Platform} from 'react-native';

const ByOS = (ios: any, android?: any) => Platform.select({ios, android});

export default ByOS;
