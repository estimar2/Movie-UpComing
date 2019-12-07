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
      <View key={this.props.id} style={styles.box}>
        <Image
          style={styles.img}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${this.props.poster}`
          }}
        />

        <View style={styles.box2}>
          <TouchableOpacity>
            <Text style={styles.title}>{this.props.title}</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.vote}>★{this.props.vote}</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text>{this.props.release}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    flexDirection: "row"
  },
  img: { width: 120, height: 180, borderRadius: 20 },
  box2: {
    marginLeft: 20,
    justifyContent: "space-around"
  },
  title: { fontWeight: "bold", fontSize: 20 },
  vote: { color: "#333" }
});

export default MovieContainer;
