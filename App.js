import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import PlayScreen from "./components/PlayScreen";

export default function App() {
  const [paly, setPlay] = useState(false);

  return paly ? (
    <PlayScreen />
  ) : (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "700", marginBottom: 30 }}>
        ROCK PAPER SCISSORS
      </Text>
      <Text style={{ fontSize: 65 }}>✊ ✋ ✌️</Text>
      <View style={{ marginTop: 50, width: 220 }}>
        <Button title="PLAY" onPress={() => setPlay(true)} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
