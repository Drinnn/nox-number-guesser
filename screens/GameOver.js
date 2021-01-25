import React from "react";
import { Button, Image, StyleSheet, View } from "react-native";
import DefaultText from "../components/DefaultText";
import TitleText from "../components/TitleText";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/success.png")} />
      </View>
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
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default GameOver;
