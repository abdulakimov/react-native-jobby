import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
  BackHandler,
} from "react-native";
import React, { useEffect } from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";

import { IMAGES } from "../assets";

const CustomDrawer = (props) => {
  const backAction = () => {
    Alert.alert("Diqqat!", "Dasturdan chiqishni hoxlaysizmi?", [
      {
        text: "Yo'q",
        onPress: () => null,
        style: "cancel",
      },
      {
        text: "Ha",
        onPress: () => BackHandler.exitApp(),
      },
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  return (
    <SafeAreaView className="flex-1">
      <View className="w-[100%] h-[26%] justify-center items-center p-5 bg-[#AAC4FF]">
        <Image
          source={IMAGES.profile}
          resizeMode="cover"
          className="w-20 h-20 rounded-full"
        />
        <Text className="text-md font-bold text-white mt-2">Elon Musk</Text>
        <Text className="text-xs text-white">Mobile Developer</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View className="w-[100%] h-[15%] justify-center items-center p-5">
        <View className="flex-1 justify-between items-end w-full">
          <TouchableOpacity
            onPress={backAction}
            className="flex-row justify-center items-center w-full h-10 "
          >
            <Ionicons name="log-out-outline" size={30} color="#000000" />
            <Text className=" text-sm font-bold text-center ml-5">Chiqish</Text>
          </TouchableOpacity>
        </View>
        <Text className="text-xs text-gray-500 pt-5">version 0.0.1</Text>
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawer;
