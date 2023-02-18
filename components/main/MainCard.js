import React from "react";
import { Text, View, Dimensions, StyleSheet } from "react-native";
import Avatar from "../svg/Avatar";
import Heart from "../svg/Heart";
import Share from "../svg/Share";

const { width, height } = Dimensions.get("window");

const MainCard = ({ item }) => (
  <View style={styles.container}>
    <View style={styles.top}>
      <Avatar />
      <View style={{ flexDirection: "row" }}>
        <Heart style={{ marginRight: 10 }} />
        <Share />
      </View>
    </View>
    <View style={styles.bottom}>
      <Text style={styles.dateText}>
        {item.dateStart} | {item.venue}
      </Text>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.location}>{item.location}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212122",
    height: height - 300,
    width: width * 0.8 - 20,
    marginHorizontal: 10,
    borderRadius: 15,
    padding: 20,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottom: { flex: 1, justifyContent: "flex-end" },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 15
  },
  dateText: {
    color: "white",
    fontSize: 15,
    marginBottom: 15
  },
  location: {
    color: "white",
    fontSize: 13,
  },
});

export default MainCard;
