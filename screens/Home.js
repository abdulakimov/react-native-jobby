import { View, Text, Button, Linking } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HomeHeader from "../components/HomeHeader";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white">
      <HomeHeader />
    </View>
  );
};

export default Home;
