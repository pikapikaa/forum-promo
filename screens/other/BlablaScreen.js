import React from "react";
import { Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/MaterialIcons";

const BlablaScreen = () => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
    }}
  >
    <Ionicons name="ramen-dining" color='#212122' size={30} />
    <Text style={{marginTop: 10}}>Экран пока в разработке</Text>
  </View>
);

export default BlablaScreen;
