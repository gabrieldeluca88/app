import OrdersScreen from "../screens/OrdersScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from '../constants/colors'

const Stack = createNativeStackNavigator();

export default OrdersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={{
        headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: COLORS.quaternary,
        headerShadowVisible: false,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Orders"
        component={OrdersScreen}
        options={{ title: "Ordenes" }}
      />
    </Stack.Navigator>
  );
};