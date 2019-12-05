import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CommonBtn } from "./components/CommonBtn";
import { movies } from "./api/movies";
//{} : 어딘가 안에서 꺼내올때 사용

class App extends React.Component {
  //state : 값이 변경되면 화면을 재시작
  state = { viewNowPlaying: null, loading: false };

  //render() 후 자동으로 실행되는 function
  // => consloe.log()를 통해 순서 확인

  //async - await : await이 완료될 때까지 기다려
  componentDidMount = async () => {
    // console.log("component");

    //실시간으로 변경될 수 있기때문에 let이라는 변수로 만들어줌
    let NowPlaying, UpComing;

    //실행하세요
    try {
      NowPlaying = await movies.getNowPlaying();
      UpComing = await movies.getUpComing();
    } catch (error) {
      //만약 에러가 나면 잡아줘
      alert("영화 데이터를 가져오는데 실패ㅠㅠ");
    } finally {
      //정상구동 하든, 에러가 나든 마지막에 나를 거쳐
      // console.log(NowPlaying.data.results);
      NowPlaying = NowPlaying.data.results;
      // console.log(NowPlaying.length);
      UpComing = UpComing.data.results;
      // console.log(UpComing.length);

      this.setState({
        viewNowPlaying: NowPlaying,
        loading: true
      });
    }
  };

  render() {
    // console.log("render");
    const { viewNowPlaying, loading } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.btnArea}>
          <CommonBtn>NowPlaying</CommonBtn>
          <CommonBtn>UpComing</CommonBtn>
        </View>

        {/* 로딩이 false이면 아무것도 하지마
        로딩이 ture로 바뀌면 실행 */}
        {/* loading이 true라면 ?앞에꺼 실행 :아니면 뒤에꺼 실행 */}
        {loading ? (
          viewNowPlaying.map(movie => <Text>{movie.title}</Text>)
        ) : (
          <Text>Loading....</Text>
        )}
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
  btnArea: {
    flexDirection: "row",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  },
  title: { fontSize: 30 }
});

export default App;
