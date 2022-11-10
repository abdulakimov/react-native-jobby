import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import HomeHeader from "../components/HomeHeader";
import SearchBar from "../components/SearchBar";
import JobsFeed from "../components/JobsFeed";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white">
      <HomeHeader />
      <SearchBar />
      <JobsFeed />
    </View>
  );
};

export default Home;
