/*

let arr = [];
arr.push( 데이터 );
arr.push( 데이터 );
arr.push( 데이터 );
arr.push( 데이터 );
for( var i = 0 ; i < arr.length ; i++){
  arr[1] 출력 또는 계산
}

*/

// 객체 - 직접 손으로 만질수 있는 물건, 변수, 10, "이순신"(문자열), tag, 배열
//      - 모양, 행동을 가지고 있는 대상
//      - 데이터, 함수를 가질수 있는 대상
// 모니터 객체
//  출력, 전원버튼, 메뉴버튼 -> 색, 비율, 초기화, 음량
//  모델명, 제조사

// 배열 - a = []; , b = new Array();
// 배열이라는 객체가 만들어짐
// 데이터 -> 배열의 공간에 저장되어있는 값
//        -> 배열의 크기
// 기능    -> push(), indexOf(), splice(), ......

window.onload=function(){
  let d = document.getElementById("box");
  console.log(d);
  let div = document.querySelector("#box");
  console.log(div);
  let box = $("#box");
  console.log(box);
}