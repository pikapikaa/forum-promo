import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyleSheet, SafeAreaView, View, FlatList } from "react-native";
import OrderCard from "../../components/order/OrderCard";

const baseUrl = "https://test.magnatmedia.com/user/events/all";

export default function EventsScreen() {
  const [events, setEvents] = useState([]);

  const getData = async () => {
    try {
      let res = await axios({
        method: "get",
        url: `${baseUrl}`,
        headers: {
          Authorization: `Bearer testtoken`,
          "Content-Type": "application/json",
          Accept: "*/*",
        },
      }).then((response) => {
        return response.data;
      });
      setEvents(res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const ItemView = ({ item }) => {
    return <OrderCard name={item.name}></OrderCard>;
  };

  const ItemSeparatorView = () => {
    return <View style={{ height: 10, width: "100%" }} />;
  };

  let content = null;

  if (events.length) {
    content = (
      <FlatList
        data={events}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
        keyExtractor={(item) => item.id.toString()}
        style={styles.flatListContainer}
      />
    );
  }

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>{content}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    padding: 10,
  },
});
