import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import GameOver from "./screens/GameOver";
import GameScreen from "./screens/GameScreen";
import StartGame from "./screens/StartGame";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  };

  let game = <StartGame onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    game = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
  } else if (guessRounds > 0) {
    game = <GameOver />;
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
