import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";

class MovieContainer extends React.Component {
  //props받을 준비
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // 전달데이터가 4개가 필요함
      <View style={styles.box}>
        <Image
          style={{ width: 120, height: 180 }}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${this.props.poster}`
          }}
        />

        <TouchableOpacity>
          <Text>{this.props.title}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>{this.props.vote}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>{this.props.release}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: { margin: 10, backgroundColor: "#fff" }
});

export default MovieContainer;
