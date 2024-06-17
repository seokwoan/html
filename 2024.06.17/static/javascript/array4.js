
const name = ["김유신","이순신","장보고","임꺽정","홍길동","최영","최무선","정약용"];

$(function(){ // window.onload -> 브라우저에 모두 표시되면 실행
  // jquery에서 여러개의 태그를 선택한경우 인덱스 표헌은 .eq(인덱스)
  let item = $(".item"); // documemt.getElementsByClassName("item")
  // jquery로 태그를 가져왔으면 계속 jqeury를 써야함
  // console.log(item.length);
  for( var i = 0 ; i < item.length ; i++){
    // name 배열의 값을 li태그에 출력한다. 무작위로
    var idx = Math.floor( Math.random() * name.length )
    item.eq(i).text( name[idx] ); // 자바스크립트 - item[i]
    // 자바스크립트만 이용했을때 (바닐라 상태)
    // 배열의 index는 []를 사용
    // jquery는 eq.() 사용
  }
})


let num = new Array(26); // 26개의 빈 공간 생성
let word = "i like tomato";
num[5] = 20;
for( var i = 0 ; i < num.length ; i++){
  num[i] = 0; //num 배열의 모든 값을 0으로 초기화
}

// console.log( 'a'.charCodeAt(0) ); 문자의 아스키 코드값
// i like tomato 에서 각 알파벳이 몇개 있는가?
for( var i = 0 ; i < word.length ; i++){
  if( word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122 ){
    num[ word.charCodeAt(i) - 97 ]++;
    // word에 있는 값을 num배열의 인덱스로 사용?
    // a의 아스키코드값이 97, z가 122 이므로
    // a면 num의 0번째 배열의 값이 증가, i면 num의 9번째 배열의 값이 증가 
    // 증가된 값을 확인하면 무슨 알파벳이 얼마나 들어갔나 알수있음
    // ?????? 
  }  
  //console.log( word.charCodeAt(i) );
}

// 문자열은 배열이다. 
// 문자열은 문자가 2개이상 연속적으로 표현 된것을 의미한다.
// "abcd" 문자 4개 , "a"
// console.log(word[0]);
// var a =["abc","edfg"]
//  var a = ["대전광역시" ,emfg]
// var는 재선언이 가능하다 , 함수 스코프
// 함수 안의 "{}"에 재상용 가능 영역, 제어문{} 벗어난다.
// 함수 안에서 var배열을 사용하면
// 배열의 주소가 첫번째 문자열의 주소로 지정되는 경우가 발생한다.
// 문자열을 외부로부터 받아오는 경우 주로 발생 

// console.log(a[0]);
// console.log(a[1]);
// console.log(a);
// console.log(a[0][1]);
// 인덱스의 2차원 배열

let score = [ 70, 30, 40, 80, 0, 10, 50, 90, 60, 100]
let stdName = [ "이순신" , "강감찬" , "장보고" , "최무선" , "문익점" , "장영실" , "정도전" , "이성계" , "이방원" , "계백"];

let temp = [];
for( var i = 0 ; i < score.length ; i++){
  temp.push(score[i]); //score의 배열의값 temp에 저장하기
}
temp.sort( (a,b) => b-a ); // 오름차순 정렬 .sort( (a,b) => b-a );로 정렬하면 내림차순
console.log(temp);
//temp.reverse(); // 오름차순을 역순으로 정렬 내림차순으로 변경 가장 높은 점수가 
                // 가장 위로 올라옴
//console.log(temp);  
let rank = [] ;
var high = score[0];
for( var i = 0 ; i < score.length ; i++){
  rank.push( score.indexOf( temp[i] ) );
}

console.log(rank);
console.log( "1등 : " + stdName[rank[0]] ); 
// 2개 이상의 배열에서 a배열의 값을 b배열의 인덱스로 활용 가능

//let rank = [ 10, 8, 4, 1, 9, 7, 3, 2, 6, 5 ];
// 1등 : stdName[ rank[0]-1 ] -> index의 값이 0부터 시작이므로 9가 끝