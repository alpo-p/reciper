/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useFonts } from 'expo-font';

export default function useLoadFonts () {
  const [fontsLoaded, error] = useFonts({
    'OpenSans-Bold': require('../../assets/fonts/OpenSans-Bold.ttf'),
    'OpenSans-Light': require('../../assets/fonts/OpenSans-Light.ttf'),
    'TangerineBold': require('../../assets/fonts/TangerineBold.ttf'),
  }); 

  return [fontsLoaded, error];
}