import { View, Text, Touchable, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const HomeHeader = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-row w-full h-[100px] justify-between px-5 shadow pt-14">
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu-outline" size={30} color="#000000" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push("Notifications")}>
        <Ionicons name="notifications-outline" size={28} color="#000000" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;
