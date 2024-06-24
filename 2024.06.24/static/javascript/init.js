
// 초기 세팅

// var a = function(){}; 
// 익명함수를 변수에 담으면 이름있는 함수명이 있는것 처럼 쓸수있음
// a();

// 전역변수로 함수를 담을 변수를 만들고 변수에 익명 함수를 담아 함수의 구분을 쉽게
// 해줄수 있음
let boardInit; // 게임판 초기화 함수
let stateInit; // 게임 현황 초기화 함수
let imgLocation; // 이미지 배치 함수
let start; // 게임 시작 함수

// 전역변수
let score = 0;
let time = 0;
let clickCount = 0;
const imgName = [ "두리안.jpg" , "람부탄.jpg" , "망고.jpg" , "바나나.jpg" , "배.png" , "수박.jpg" , "용과.jpg" , "자두.jpg" , "파파야.jpg"];

let imgPlace = []; //이미지 배치 값( 1, 2, 3, 4, 5, 6, .....)
let selectImg = []; // 선택 이미지 인덱스
let imgCount = 6; // 사용할 이미지 갯수


$(function(){
  boardInit();

  $("#start").click( start );
});

//게임판 초기화 함수
boardInit = function(){
  console.log($(".item").eq(0));
  $(".item").each(function( i , v ){ 
    // .each는 jquery의 반복문 each(function( index , 배열의 값 ){})
    // .item의 배열의 값을 얻음 .item은 div이므로 div가 출력
    $(this).find("img").addClass("hide");
    // $(this).find("") this의 하위 태그,클래스를 찾아라
    $(this).append( ` <div class="itemHide"></div> ` );
  });
};

// 게임 시작 함수
start = function(){
  stateInit();
  imgLocation();
  $(".item").on( 'click' , imgClick );
  timeStart(); 
  // 게임 진행 시간 시작
  // 같은 html 파일에 2개 이상의 js파일을 이용하면 
  // js 파일의 함수는 공유가 가능하다. 다른 js파일의 함수도 호출가능
};

// 게임현황 초기화 함수
stateInit = function(){
  $("#gameStart").addClass("hide");
  $("#state").removeClass("hide");
  $("#score").text( `점수 : ${score}` );
  // 객체, JSON 에서는 `` 적용이 되지 않음
  $("#step").text( `${time}초` );
  $("#click").text( ` 클릭횟수 : ${clickCount}/30` );
};

// 이미지 배치
imgLocation = function(){
  var temp = [];
  while( temp.length != imgCount ){ // 12칸에 넣을 6장을 랜덤하게 구하기
    var tempNum = Math.floor(Math.random() * imgName.length );
    if( temp.indexOf(tempNum) == -1 ){
      temp.push(tempNum);
    }
  }
  console.log(temp);

  imgPlace = temp.concat(temp);
  console.log(imgPlace);
  // concat 두개의 배열을 하나의 배열로 합치는 함수 배열.concat(배열)
  imgPlace = shuffle();
  console.log(imgPlace);

  $(".item").each(function( i ){
    $(this).find("img").attr( "src" , "./static/image/"+imgName[imgPlace[i]] );
    $(this).find("img").removeClass( "hide" );
  });

  setTimeout(function(){
    $(".item>img").addClass("hide");
  } , 1000 );
}

function shuffle(){
  // 배열의 값을 섞어주려면 랜덤하게 인덱스 값을 하나 뽑아주고
  // 나온 인덱스의 배열 값을 다른 배열 값과 바꿔줌
  for( var i = imgPlace.length - 1 ; i > 0 ; i--){
    var j = Math.floor( Math.random() * ( i + 1) );
    var t = imgPlace[i];
    imgPlace[i] = imgPlace[j];
    imgPlace[j] = t;
  }
  return imgPlace;
}