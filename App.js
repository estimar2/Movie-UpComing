import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { CommonBtn } from "./components/CommonBtn";
import { movies } from "./api/movies";
import MovieContainer from "./components/MovieContainer";
//{} : 어딘가 안에서 꺼내올때 사용

class App extends React.Component {
  //state : 값이 변경되면 화면을 재시작
  state = {
    viewNowPlaying: null,
    viewUpComing: null,
    upComingBtn: false,
    nowPlayingBtn: false,
    loading: false
  };

  //render() 후 자동으로 실행되는 function
  // => consloe.log()를 통해 순서 확인

  //async - await : await이 완료될 때까지 기다려
  componentDidMount = async () => {
    // console.log("component");

    //실시간으로 변경될 수 있기때문에 let이라는 변수로 만들어줌
    let NowPlaying, UpComing;

    //실행하세요
    try {
      nowPlaying = await movies.getNowPlaying();
      upComing = await movies.getUpComing();
    } catch (error) {
      //만약 에러가 나면 잡아줘
      // console.log(error)
      alert("영화 데이터를 가져오는데 실패ㅠㅠ");
      console.log(error);
    } finally {
      //정상구동 하든, 에러가 나든 마지막에 나를 거쳐
      // console.log(NowPlaying.data.results);
      nowPlaying = nowPlaying.data.results;
      // console.log(NowPlaying);
      upComing = upComing.data.results;
      console.log(upComing);

      this.setState({
        viewNowPlaying: nowPlaying,
        viewUpComing: upComing,
        loading: true
      });
    }
  };

  /* 로딩이 false이면 아무것도 하지마 로딩이 ture로 바뀌면 실행 */
  /*loading이 true라면 ?앞에꺼 실행 :아니면 뒤에꺼 실행 */
  render() {
    const {
      viewNowPlaying,
      viewUpComing,
      upComingBtn,
      nowPlayingBtn,
      loading
    } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.btnArea}>
          <TouchableOpacity onPress={this._clickNowPlaying} style={styles.btn}>
            <Text style={styles.txt}>NowPlaying</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this._clickUpComing} style={styles.btn}>
            <Text style={styles.txt}>UpComing</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          {nowPlayingBtn ? (
            loading ? (
              viewNowPlaying.map(movie => (
                <MovieContainer
                  key={movie.id}
                  id={movie.id}
                  poster={movie.poster_path}
                  title={movie.title}
                  vote={movie.vote_average}
                  release={movie.release_date}
                />
              ))
            ) : (
              <Text>Loading ...</Text>
            )
          ) : null}

          {upComingBtn ? (
            loading ? (
              viewUpComing.map(movie => (
                <MovieContainer
                  key={movie.id}
                  id={movie.id}
                  poster={movie.poster_path}
                  title={movie.title}
                  vote={movie.vote_average}
                  release={movie.release_date}
                />
              ))
            ) : (
              <Text>Loading ...</Text>
            )
          ) : null}
        </ScrollView>
      </View>
    );
  }

  _clickNowPlaying = () => {
    this.setState({
      nowPlayingBtn: true,
      upComingBtn: false
    });
  };

  _clickUpComing = () => {
    this.setState({
      nowPlayingBtn: false,
      upComingBtn: true
    });
  };
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
  title: { fontSize: 30 },
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

export default App;
