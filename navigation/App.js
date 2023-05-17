import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from 'expo-font';
import ShopNavigator from './src/navigation/ShopNavigator';

export default function App() {

  const [loaded] = useFonts({
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }


  return (
    /* <View style={styles.container}>
      <Text>corriendo la app!</Text>
      <StatusBar style="auto" />
    </View> */
    <ShopNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
