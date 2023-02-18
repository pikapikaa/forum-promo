import React, { useMemo, useRef, useState } from "react";
import {
  Animated,
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableHighlight,
} from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

import Swiper from "react-native-swiper";
import { ExpandingDot } from "react-native-animated-pagination-dots";
import Button from "../../components/ui/Button";
import Advantage1 from "../../components/svg/Advantage1";
import Advantage2 from "../../components/svg/Advantage2";
import Advantage3 from "../../components/svg/Advantage3";

const { height } = Dimensions.get("window");

const advantages = [
  {
    id: 0,
    name: "преимущество 1",
    text: `описательный, красивый, небольшой 
  текст, который никто, никогда не читает`,
    component: Advantage1,
  },
  {
    id: 1,
    name: "преимущество 2",
    text: `описательный, красивый, небольшой 
  текст, который никто, никогда не читает`,
    component: Advantage2,
  },
  {
    id: 2,
    name: "преимущество 3",
    text: `описательный, красивый, небольшой 
  текст, который никто, никогда не читает`,
    component: Advantage3,
  },
];

const AdvantageScreen = ({ bottomSheetModalRef }) => {
  const [index, setIndex] = useState(0);

  const snapPoints = useMemo(() => ["10%", "90%"], []);
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef();

  const onPressTouch = () => {
    if (index === 2) bottomSheetModalRef.current.close();
    else scrollRef.current?.scrollBy(1, true);
  };

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={1}
      snapPoints={snapPoints}
      style={styles.sheetContainer}
    >
      <Swiper
        ref={scrollRef}
        showsPagination={false}
        loop={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        scrollEventThrottle={16}
        onIndexChanged={(index) => setIndex(index)}
      >
        {advantages.map((a) => {
          return (
            <View
              key={a.id}
              style={{
                height: height - 230,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <a.component />
              <View style={{ alignItems: "center" }}>
                <Text style={styles.title}>{a.name}</Text>
                <Text style={styles.text}>{a.text}</Text>
                <Button
                  title={index === 2 ? "начать" : "далее"}
                  backgroundColor="black"
                  textColor="white"
                  onPress={() => onPressTouch()}
                />
                <TouchableHighlight
                  onPress={() => bottomSheetModalRef.current.close()}
                  underlayColor="transparent"
                >
                  <Text style={styles.grayText}>пропустить</Text>
                </TouchableHighlight>
              </View>
            </View>
          );
        })}
      </Swiper>

      <ExpandingDot
        data={[23, 24, 345]}
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
          top: height - 180,
        }}
      />
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  sheetContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  },
  title: {
    fontWeight: "bold",
    fontSize: 23,
    marginBottom: 15,
  },
  text: {
    marginBottom: 15,
  },
  grayText: {
    marginTop: 15,
    color: "gray",
  },
});

export default AdvantageScreen;
