import React from "react";
import { Text, View } from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";

const SegmentTab = ({ selectedIndex, handleIndexChange }) => (
  <SegmentedControlTab
    values={["Отклоненные", "В ожидании", "Одобренные"]}
    selectedIndex={selectedIndex}
    onTabPress={handleIndexChange}
    borderRadius={5}
    tabsContainerStyle={{ backgroundColor: "black", borderRadius: 5 }}
    tabStyle={{
      backgroundColor: "black",
      borderWidth: 0,
      borderColor: "transparent",
    }}
    activeTabStyle={{
      backgroundColor: "white",
      margin: 2,
      borderRadius: 5,
    }}
    tabTextStyle={{ color: "white" }}
    activeTabTextStyle={{ color: "black" }}
  />
);

export default SegmentTab;
