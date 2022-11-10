import { View, Text, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const SearchBar = () => {
  return (
    <View className="flex-row items-center bg-gray-200 p-3 m-5 rounded-full shadow">
      <Ionicons name="search-outline" size={22} color="#777" />
      <TextInput
        placeholder="Izlash..."
        className="w-full ml-3 text-base"
        maxLength={30}
        autoCorrect={true}
      />
    </View>
  );
};

export default SearchBar;
