import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import GameScreen from "./screens/GameScreen";
import StartGame from "./screens/StartGame";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let game = <StartGame onStartGame={startGameHandler} />;

  if (userNumber) {
    game = <GameScreen />;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {game}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
