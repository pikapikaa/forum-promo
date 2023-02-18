import React, { useEffect, useState } from "react";
import {  View, Animated, Dimensions } from "react-native";
import axios from "axios";
import Carousel from "../../components/main/Carousel";
import { ExpandingDot } from "react-native-animated-pagination-dots";
const { height } = Dimensions.get("window");

const MainScreen = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const scrollX = React.useRef(new Animated.Value(0)).current;

  const getData = async () => {
    try {
      let res = await axios({
        method: "get",
        url: `https://test.magnatmedia.com/events`,
        headers: {
          Authorization: `Bearer testtoken`,
          "Content-Type": "application/json",
          Accept: "*/*",
        },
      }).then((response) => {
        return response.data;
      });
      setEvents(res);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <Carousel
        data={events}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
      />
      <ExpandingDot
        data={events}
        expandingDotWidth={30}
        scrollX={scrollX}
        inActiveDotOpacity={0.6}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 5,
          
        }}
        activeDotColor="black"
        inActiveDotColor="grey"
        containerStyle={{
          top: height - 250,
        }}
      />
    </View>
  );
};

export default MainScreen;
