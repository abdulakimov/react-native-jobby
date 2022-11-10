import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "./Drawer";
import Details from "./screens/Details";
import Notifications from "./screens/Notifications";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Drawer"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Drawer" component={DrawerNavigation} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Notifications" component={Notifications} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
