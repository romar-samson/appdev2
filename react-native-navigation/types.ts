import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;              
  Settings: { userId: string }; 
  Profile: undefined;        
};

export type SettingsScreenProps = NativeStackScreenProps<RootStackParamList, 'Settings'>;
export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;