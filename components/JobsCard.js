import { View, Text } from "react-native";
import React from "react";

const JobsCard = ({ color }) => {
  return (
    <View
      className=" w-[300px] h-[170px] rounded-lg p-2 mr-5 shadow-2xl"
      style={{ backgroundColor: color, shadowColor: color }}
    >
      <Text className="font-semibold text-white text-lg">
        Senior Web developer
      </Text>
    </View>
  );
};

export default JobsCard;
