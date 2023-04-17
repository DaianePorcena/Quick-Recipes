import { SplashScreen } from 'react-native';
import { useFonts, Cookie_400Regular } from '@expo-google-fonts/cookie';
import { Inter_700Bold, Inter_400Regular } from '@expo-google-fonts/inter';

import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/Routs';

export default function App() {
  let [fontsLoaded, error] = useFonts({
    Cookie_400Regular,
    Inter_700Bold,
    Inter_400Regular
  });

  if (!fontsLoaded || error){
    return;
  }

  return(
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  )
}

