// 배열 - 데이터를 저장하기 위한 연속적인 메모리공간
// 배열의 각각의 공간은 변수와 같다
// 배열의 인덱스는 0부터 시작한다
// 인덱스가 1씩 증가하는 형태이기 때문에 반복문이 필요하다. 필수는 아님
// 배열 선언 > var보다는 let이 
// let arr1 = []; // 비어있는 배열 선언
// let arr2 = [10,20,40]; // 3개의 데이터가 저장되어 있는 배열 선언
// let arr3 = new Array(); // 비어있는 배열 선언
// let arr4 = new Array(5); // 5개의 공간을 생성하고 각각의 공간은 비어있다
// let size = 10;
// let arr5 = new Array(size); // 10개의 공간이 생성된다
// 자바스크립트의 배열은 공간이 늘어나기도하고 줄어들기도 하는 동적 배열이다.
// 자바는 고정된 정적 배열이다.
// 배열은 자료구조의 가장 기본이 되는 구조이다.

// const a = 10;
// const arr6 = [10,20,30];
// console.log( arr6);
// arr6[1] = 50;
// console.log(arr6);
// let arr7 = [1,2,3];
// let arr8 = arr7;
// console.log(arr8);

//let score = [ 89 , 92 , 65 ,71 , 78 , 83 , 96 , 100 , 73 , 85 ] ;
// let score = []; // 비어있는 배열, score를 배열로 사용하겠다 선언
// // 1 ~ 100 중의 랜덤값 배열에 저장, 배열에 몇개 저장 할 것인가도 랜덤으로
// // 배열에 저장될 데이터의 수는 10~30 중 하나

// let len = Math.floor(Math.random()*21)+10;
// for(var i = 1 ; i <= len ; i++ ){
//   score.push( Math.floor(Math.random() * 100 + 1 ) ) ; 
// }


// var small = score[0];

// for( var i = 0 ; i < score.length ; i++ ){
//   //var small = score[0];
//   if ( small > score[ i ] ) {small = score[ i ];}
// }
// document.write( "가장 작은 수 : " + small ) ;
// document.write(" 가장 작은 수는 몇번째냐 " + (score.indexOf(small)+1));

// let score = [ 68 , 79 , 83 , 95 , 65];
// let stdName = [ "이순신" , "김유신" , "장영실" , "한석봉" , "임꺽정" ];
// .indexOf(데이터)는 배열에서 해당 데이터가 몇번째 인덱스에 있는지
// 인덱스 값을 반환한다. 배열에 해당 데이터가 없다면 -1이 나온다.
// 이순신은 68점 , 김유신은 79점 , 장영실은 83점 , 한석봉은 95점 , 임꺽정은 65점
// 학생들중 가장 점수가 높은 학생은 누구인가?

// let high = score[ 0 ] ; 
// // 스코어 변수가 for문 안에 있으면 score0의 값이 계속 초기화 되므로
// // score배열의 첫번째인 68과의 비교로만 작동해 
// // 마지막 반복에서 첫 배열값인 68과 마지막 배열값인 65의 비교값이 결과로 나오게 됨

// for( i = 0 ; i < score.length ; i++){
//   if( high < score[i] ){
//     high = score[i];
//   }
// }

// var highStd = stdName[score.indexOf(high)];

// document.write("점수가 가장 높은 학생은 " + highStd);

// 학생의 이름을 입력하여 학생의 점수를 출력한다면

// var inputName = "장영실";
// let idx = score[stdName.indexOf(inputName)]; //학생이름이 몇번째 인덱스에 있는가?
// document.write( inputName + "학생 점수는 : " + idx );

let imgName = [ "1.jpg" , "2.jpg" , "3.jpg" ];
let i = 0 ;

$(function(){

  // for( i = 0 ; i < imgName.length; i++){
  //   // 시간 
  //   $("#bg").attr('src' , './static/image/'+imgName[i]);
  // }
  // 반복문은 반복문이 끝나야 결과가 화면에 표시됨
  // 과정은 표시되지 않음 

  // 시간 - setInterval, setTimeout 이라는 함수로 시간적용
  // setInterval - 지정된 시간 간격으로 실행 5초마다 작동
  // setTimeout - 지정된 시간 이후에 실행 5초가 지나야 실행후 끝남
  // setTimeout( 함수 , ms );

  setInterval(function(){
    $("#bg").attr( 'src' , './static/image/' + imgName[i] );
    i++;
    if( i >= imgName.length ){
       i = 0;
    }
  } , 3000 );
  // i변수 값을 지역변수가 아닌 전역변수로 설정해야 하는 이유는 
  // 함수의 첫 반복이 끝나면 익명함수가 끝나고 데이터가 사라짐
  // 3초가 지나고 다시 실행될때 지역변수면 i의 초기값을 가져와 같은 값만을 사용

  // setTimeout( function(){
  //   $("#bg").attr( 'src' , './static/image/' + imgName[1] );
  // } , 3000 );
  // setTimeout( function(){
  //   $("#bg").attr( 'src' , './static/image/' + imgName[2] );
  // } , 6000 );

  setInterval(function(){
    $("#print").text("지금 이미지 인덱스 : " + i ) ;
  } , 2000);


});
