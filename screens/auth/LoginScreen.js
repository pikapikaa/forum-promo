import React, { useRef, useMemo, useCallback } from "react";
import { StyleSheet, View, SafeAreaView, Dimensions, Text } from "react-native";
import Button from "../../components/ui/Button";
import Logo from "../../components/svg/Logo";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

const WINDOW_HEIGHT = Dimensions.get("screen").height;

export default function LoginScreen() {
  // ref
  const bottomSheetModalRef = useRef(0);

  // variables
  const snapPoints = useMemo(() => ["10%", "32%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {}, []);

  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <View style={styles.footer}>
        <Button
          title="войти через аккаунт"
          backgroundColor="#C60033"
          textColor="white"
        />
        <View style={styles.divider}></View>
        <Button
          title="у меня нет аккаунта"
          backgroundColor="#F6F0F0"
          onPress={handlePresentModalPress}
        />
      </View>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        style={styles.sheetContainer}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.title}>У меня нет аккаунта</Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Создать аккаунт"
              backgroundColor="black"
              textColor="white"
            />
            <View style={styles.divider}></View>
            <Button
              title="Войти без аккаунта"
              backgroundColor="#F6F0F0"
              onPress={handlePresentModalPress}
            />
          </View>
        </View>
      </BottomSheetModal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "white",
    //padding: 10,
  },
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
  buttonContainer: {
    alignItems: "center",
    marginTop: 25,
  },
  footer: {
    position: "absolute",
    alignSelf: "center",
    top: WINDOW_HEIGHT - 180,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingStart: 15,
    paddingTop: 15,
  },
  divider: {
    height: 10,
  },
});
