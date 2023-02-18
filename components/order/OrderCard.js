import React from "react";
import { Text, View } from "react-native";
import Card from "../ui/Card";
import { StyleSheet } from "react-native";
import Smile from "../svg/Smile";

const OrderCard = ({ name }) => (
  <Card style={styles.container}>
    <View style={{ flex: 3 }}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.grayText}>роль: </Text>
    </View>
    <View style={{ flex: 1, alignItems: "flex-end" }}>
      <Smile />
    </View>
  </Card>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontWeight: "500",
    fontSize: 16,
    marginBottom: 5,
  },
  grayText: {
    color: 'grey'
  },
});

export default OrderCard;
