import React, { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

const rock = require("../assets/rock.png");
const paper = require("../assets/paper.png");
const scissors = require("../assets/scissors.png");

export default function PlayScreen() {
  const [counter, setCounter] = useState(3);

  const RPS = () => {
    const sign = [rock, paper, scissors];
    const random = Math.floor(Math.random() * 3);
    return sign[random];
  };

  const bgColor = ["#ff6b6b", "#48dbfb", "#1dd1a1"];

  useEffect(() => {
    if (counter === 0) return;
    const timer = setTimeout(() => {
      setCounter(counter - 1);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <View
      style={StyleSheet.compose(styles.container, {
        backgroundColor: bgColor[counter - 1],
      })}
    >
      {counter > 0 ? (
        <Text style={{ fontSize: 150, fontWeight: "700" }}>{counter}</Text>
      ) : (
        <View style={styles.container}>
          <Image style={{ width: 200, height: 200 }} source={RPS()} />
          <View style={{ marginTop: 100 }}>
            <Button title="PLAY AGAIN" onPress={() => setCounter(3)} />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
});
