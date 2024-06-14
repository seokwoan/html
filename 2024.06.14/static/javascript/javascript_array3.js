// let word = [ "한강" , "금강" , "낙동강" , "대전" , "부산" , "광주" , "세종" ];
// // 단어를 배열에 저장하려고 한다.
// // 단어가 배열에 존재한다면 저장안하고
// // 배열에 없는 단어만 저장이 되도록 한다. 

// function save(){
//   var text = $("#str").val();
//   if( word.indexOf(text) == -1){ // indexOf의 값이 -1이면 배열에 없는 데이터
//     word.push(text); // 배열에 text값 저장
//   }
//   else{ //배열에 text값 저장
//     $("#error").text("중복 단어 입니다. 다시 입력하세요");
//   }
//   $("#print").text( word );
// }

let board = [];

$(function(){
  init();  // 배열에 데이터 저장( 초기화 작업시 init 또는 initial)
  view(); // dic#board 배열값 출력
})

function init(){
  // 1 ~ 50 랜덤값을 배열에 저장 , 25개
    // 중복없이 저장되게 하기 indexOf
  // 25개만 저장 length
  // for( var i = 1 ; i <= 25 ; i++ ){
  //   var tmp = Math.floor( Math.random() * 50 + 1 );
  //   //board.push( tmp );
  //   if( board.indexOf(tmp) == -1 ){
  //     board.push( tmp );
  //   }
  //   else if( board.indexOf(tmp) != -1 ){
  //     var other = true;
  //     while( other ){
  //       tmp = Math.floor( Math.random() * 50 + 1 );
  //       if( board.indexOf(tmp) == -1 ){
  //         board.push( tmp );
  //         other = false;
  //       }  
  //     }
  //   }
  // }

  // 선생님풀이
  while( board.length != 25 ){
    var tmp = Math.floor( Math.random() * 50 + 1 );
    if( board.indexOf( tmp ) == -1 ){
      board.push( tmp );
    }
  } 

}

function view(){
  let num = '';
  for( var row = 0 ; row <= 4 ; row++ ){ //줄
    num += ' <p> ';
    // += 복합대입연산자 
    for( var col = 0 ; col < 5 ; col++ ){ //칸
      num += "<span>" + board[( row * 5 + col )] + "</span>";
    }
    num += '</p>';
  }

  $("#board").html( num );
}