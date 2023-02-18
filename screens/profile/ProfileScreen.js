import React, { useEffect, useState, useCallback, useRef } from "react";
import axios from "axios";
import Ionicons from "@expo/vector-icons/MaterialIcons";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import Toast from "react-native-root-toast";

import Card from "../../components/ui/Card";
import Smile from "../../components/svg/Smile";
import AdvantageScreen from "../auth/AdvantageScreen";

const menu = [
  { id: 0, name: "Мои мероприятия" },
  { id: 1, name: "Заявки" },
  { id: 2, name: "Услуги" },
  { id: 3, name: "Настройки аккаунта" },
  { id: 4, name: "Онлайн-поддержка" },
  { id: 5, name: "Чат" },
];

const ProfileScreen = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async (state) => {
    try {
      let res = await axios({
        method: "get",
        url: `https://test.magnatmedia.com/user`,
        headers: {
          Authorization: `Bearer testtoken`,
          "Content-Type": "application/json",
          Accept: "*/*",
        },
      }).then((response) => {
        return response.data;
      });
      setUserInfo(res);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const bottomSheetModalRef1 = useRef(0);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef1.current?.present();
  }, []);

  const onPress = (menu) => {
    if (menu.id === 1) navigation.navigate("Orders");
    else if (menu.id === 0) handlePresentModalPress();
    else Toast.show(`Переход к экрану "${menu.name}"`);
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.cardContainer}>
        <Image source={{ uri: userInfo?.avatar }} style={styles.photo} />
        <View style={styles.info}>
          <Text style={styles.fio}>{userInfo?.name}</Text>
          <Card style={styles.statusContainer}>
            <Text style={styles.statusText}>{userInfo?.status}</Text>
          </Card>
        </View>
      </Card>

      <Card style={styles.menuContainer}>
        {menu.map((m, index, array) => {
          return (
            <TouchableHighlight
              key={m.id}
              onPress={() => {
                onPress(m);
              }}
              underlayColor="transparent"
            >
              <View
                style={[
                  styles.menuItem,
                  index !== array.length - 1
                    ? { borderBottomWidth: 0.2, borderColor: "grey" }
                    : null,
                ]}
              >
                <Text style={styles.menuItemText}>{m.name}</Text>
                <Ionicons name="chevron-right" color="black" size="25" />
              </View>
            </TouchableHighlight>
          );
        })}
      </Card>

      <Card style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.exitText}>Выйти из аккаунта</Text>
        </TouchableOpacity>

        <Ionicons name="exit-to-app" color="red" size="25" />
      </Card>

      <AdvantageScreen bottomSheetModalRef={bottomSheetModalRef1} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 20,
    backgroundColor: "white",
  },
  cardContainer: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    backgroundColor: "#F6F0F0",
    borderWidth: 1,
    borderColor: "#F6F0F0",
    marginBottom: 15,
  },
  menuContainer: {
    padding: 0,
    paddingLeft: 15,
    paddingVertical: 0,
    backgroundColor: "#F6F0F0",
    borderWidth: 1,
    borderColor: "#F6F0F0",
  },
  buttonContainer: {
    marginTop: 15,
    padding: 15,
    backgroundColor: "#F6F0F0",
    borderWidth: 1,
    borderColor: "#F6F0F0",
    justifyContent: "center",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  photo: {
    width: 66,
    height: 58,
    borderRadius: 30,
  },
  fio: {
    fontSize: 20,
    fontWeight: "500",
  },
  statusContainer: {
    padding: 2,
    width: 50,
    alignItems: "center",
    backgroundColor: "black",
    marginTop: 7,
  },
  info: { flex: 1, marginStart: 15 },
  statusText: { color: "white" },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 15,
  },
  menuItemText: {
    fontWeight: "500",
    fontSize: 17,
  },
  exitText: { fontSize: 17, fontWeight: "500", color: "red", marginRight: 10 },
});

export default ProfileScreen;
