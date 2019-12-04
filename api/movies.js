//axios를 통해서 영화 데이터를 가져오는 function을 만듬

//https://api.themoviedb.org/3/movie/now_playing?api_key=b431ba6f03980392bd531710f1fac895&language=en-US&page=1
// base URL : https://api.themoviedb.org/3/             0
// get : movie/now_playing
// get : movie/upcoming
// prarms : api_key=b431ba6f03980392bd531710f1fac895    0
// params : language=en-US&page=1                       0

//axois가져오기
import axios from "axios";

//axios기본설정
//1. 기본 URL
//2. params

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: { api_key: "b431ba6f03980392bd531710f1fac895", language: "en-US" }
});

export const movies = {
  getNowPlaying: () => api.get("movie/now_playing"),
  getUpComing: () => api.get("movie/upcoming")
};
