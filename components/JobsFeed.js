import { View, Text, ScrollView } from "react-native";
import React from "react";
import JobsCard from "./JobsCard";

const JobsFeed = () => {
  return (
    <ScrollView
      className="w-full p-4 flex-row"
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <JobsCard color="#AAC4FF" />
      <JobsCard color="#B1B2FF" />
      <JobsCard color="#F4BFBF" />
    </ScrollView>
  );
};

export default JobsFeed;
