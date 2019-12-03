import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { commonBtn } from "./components/commonBtn";

class App extends React.Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <Text>Movie UpComing</Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  title: { fontSize: 30 }
});

export default App;
