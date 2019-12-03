//react를 시작
import React from "react";

//필요한 컴포넌트를 react-native에서 가져옴
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

//component를 사용
class commonBtn extends React.Component {
  //App.js에서 호출할 때, props를 전달해줄 것을 예상하고 미리 받는 로직을 작성해줌
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Text>{this.props.children}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#193b68" }
});

//외부에서 사용할 수 있도록 export
export default commonBtn;
