import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Settings from "./screens/Settings";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false, swipeEdgeWidth: 400 }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
