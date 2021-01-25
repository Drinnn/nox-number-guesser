import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import GameOver from "./screens/GameOver";
import GameScreen from "./screens/GameScreen";
import StartGame from "./screens/StartGame";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  const setupGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  };

  let game = <StartGame onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    game = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
  } else if (guessRounds > 0) {
    game = (
      <GameOver
        roundsNumber={guessRounds}
        userNumber={userNumber}
        onRestart={setupGameHandler}
      />
    );
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
