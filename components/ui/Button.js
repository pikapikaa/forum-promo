import React from "react";
import { TouchableHighlight, View, StyleSheet, Text } from "react-native";

export default function Button({
  title,
  onPress,
  backgroundColor = "#2196F3",
  textColor = "black",
}) {
  return (
    <TouchableHighlight onPress={onPress} underlayColor="white">
      <View style={[styles.button, { backgroundColor }]}>
        <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 350,
    alignItems: "center",
    borderRadius: 15,
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    fontSize: 20
  },
});
