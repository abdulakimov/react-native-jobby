import { View, Text, Button, Linking } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text>open menu...</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
