import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from 'expo-font';
import ShopNavigator from './src/navigation/ShopNavigator';
import BottonTabNavigator from './src/navigation/BottonTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { COLORS } from './src/constants/colors';

export default function App() {

  const [loaded] = useFonts({
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }


  return (
    <NavigationContainer>
      <BottonTabNavigator/>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
