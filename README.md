# UpComing-Movie-App

anywhere, anywhen...
You want watching the movie when this app recommended things...

## To Do

- [ ] NowPlaying Movie
- [ ] UpComing Movie

## PROGRESS

1. API에서 영화 데이터를 가져온다.
   -> NowPlaying && UpComing
2. 버튼을 눌렀을 때, 해당 목록을 보여준다.

## ISSUE

- axios install => [npm install axios@0.18.0]으로 실행
- 최신버전 0.19.0은 버그가 있음

- axios실행 후, 에러가 발생한 경우 => npm install을 실행 후 서버 재시작

- 401 error : axios version 0.19.일떄 || API_KEY가 잘못되었을 경우

- map 사용시 unique key 관련 경고가 발생되면 => 최상단 컴포넌트에게 key값을 부여한다.

## USE API

- moviedb.org
