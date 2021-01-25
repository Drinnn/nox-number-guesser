import React from "react";
import { Button, StyleSheet, View } from "react-native";
import DefaultText from "../components/DefaultText";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <DefaultText>The Game is Over!</DefaultText>
      <DefaultText>Number of rounds: {props.roundsNumber}</DefaultText>
      <DefaultText>Number was: {props.userNumber}</DefaultText>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOver;
