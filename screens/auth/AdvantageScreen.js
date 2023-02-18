import React, { useMemo } from "react";
import { Text, View, StyleSheet } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

import Button from "../../components/ui/Button";

const AdvantageScreen = ({ bottomSheetModalRef }) => {
  const snapPoints = useMemo(() => ["10%", "90%"], []);
  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={1}
      snapPoints={snapPoints}
      style={styles.sheetContainer}
    >
      <Button
        title="Войти без аккаунта"
        backgroundColor="#F6F0F0"
        onPress={() => {}}
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
});

export default AdvantageScreen;
