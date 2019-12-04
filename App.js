import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CommonBtn } from "./components/CommonBtn";

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.btnArea}>
          <CommonBtn>NowPlaying</CommonBtn>
          <CommonBtn>UpComing</CommonBtn>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 50
  },
  btnArea: { flexDirection: "row" },
  title: { fontSize: 30 }
});

export default App;
