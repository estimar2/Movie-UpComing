// 1.리엑트를 시작한다.
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

// 2.필요한 컴포넌트를 리엑트 네이티브에서 가져온다.

// 3.컴포넌트를 시작한다.(class)

export class CommonBtn extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.txt}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    margin: 10,
    width: 160,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#e66767",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9
  },
  txt: { color: "#fff" }
});

// 4.외부에서 사용할 수 있도록 export한다.
export default CommonBtn;
