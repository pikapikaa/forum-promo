import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyleSheet, SafeAreaView, View, Text, FlatList } from "react-native";
import SegmentTab from "../../components/order/SegmentTab";
import OrderCard from "../../components/order/OrderCard";

const baseUrl = "https://test.magnatmedia.com/user/requests";
const orderState = [
  { id: 0, value: "rejected" },
  { id: 1, value: "waiting" },
  { id: 2, value: "accepted" },
];

export default function OrdersScreen() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [orders, setOrders] = useState([]);

  const handleIndexChange = (index) => setSelectedIndex(index);

  const postData = async (state) => {
    try {
      let res = await axios({
        method: "get",
        url: `${baseUrl}/${state}`,
        headers: {
          Authorization: `Bearer testtoken`,
          "Content-Type": "application/json",
          Accept: "*/*",
        },
      }).then((response) => {
        return response.data;
      });
      setOrders(res);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    postData(orderState[selectedIndex].value);
  }, [selectedIndex]);

  const ItemView = ({ item }) => {
    return <OrderCard name={item.name}></OrderCard>;
  };

  const ItemSeparatorView = () => {
    return <View style={{ height: 10, width: "100%" }} />;
  };

  let content = null;

  if (orders.length) {
    content = (
      <FlatList
        data={orders}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
        keyExtractor={(item) => item.id.toString()}
        style={styles.flatListContainer}
      />
    );
  }

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <SegmentTab
          selectedIndex={selectedIndex}
          handleIndexChange={handleIndexChange}
        ></SegmentTab>
        {content}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 20,
  },
  tabStyle: {
    borderColor: "#D52C43",
  },
  activeTabStyle: {
    backgroundColor: "#D52C43",
  },
  flatListContainer: {
    paddingTop: 15,
  },
});
