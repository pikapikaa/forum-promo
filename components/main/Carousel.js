import React, { useState, useEffect } from "react";
import { View, Dimensions, FlatList } from "react-native";
import MainCard from "./MainCard";

const { width, height } = Dimensions.get("window");

const Carousel = ({ data, onScroll }) => {
  if (data && data.length) {
    return (
      <View>
        <FlatList
          data={data}
          keyExtractor={(item) => String(item.id)}
          showsHorizontalScrollIndicator={false}
          snapToOffsets={[...Array(data.length)].map(
            (x, i) => i * (width * 0.8 - 40) + (i - 1) * 40
          )}
          onScroll={onScroll}
          horizontal
          snapToAlignment={"start"}
          scrollEventThrottle={16}
          decelerationRate="fast"
          style={{ marginTop: 20 }}
          renderItem={({ item }) => <MainCard item={item} />}
        />
      </View>
    );
  }
  return null;
};
export default Carousel;
