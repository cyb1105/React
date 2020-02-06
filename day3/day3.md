git clone 

npm install

npm start

youtube api key값 index.js에 저장

npm install --save youtube-api-search 설치



index.js -> class component

생성자 함수 추가

​	videos : [Array]을 state에서 초기화

 YTSearch함수를 생성자 함수로 이동

YTSearch함수에서 검색 된 video의 목록을 state에 업데이트





// YTSearch({ key:API_KEY, term:'surfboard'}, function(data){

//   console.log(data);

//  })



 // YTSearch({ key:API_KEY, term:'surfboard'},(data)=> {

 // console.log(data);

//  })





  this video = props.video;

  this video = props.url;

  const {video , url} = props