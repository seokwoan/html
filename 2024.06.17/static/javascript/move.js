
const board = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

let x = 0;
let y = 0;

$(function(){

  let out ="<table>";

  for( var i = 0 ; i < board.length ; i++){
    out +="<tr>"

    for( var k = 0 ; k < board[i].length ; k++){
      var tdClass = "wall";
      if( board[i][k] == 0 ) tdClass = "blank";
      if( board[i][k] == 2 ){
       tdClass = "me";
       y = i;
       x = k;
      } 
      out += `<td class="${tdClass}">`;

      out +="</td>"
    }

    out +="</tr>"
  }

  out += "</table>"

  $("#wrap").html(out);

});


$(document).keyup(function( event ){
  // w - 87 , a - 65 , s - 83 , d - 68
  var key = event.keyCode;
  //alert( typeof key); 데이터 타입확인 console.log( typeof key)로 더 많은 정보확인가능
  switch(key){
    case 87: 
      board[y][x]=0;
      $("td").eq(y*21+x).removeClass("me");
      $("td").eq(y*21+x).addClass("blank"); // 현재 위치에 클래스명 blank로 변경
      y--;
      board[y][x]=2;
      $("td").eq(y*21+x).removeClass("blank");
      $("td").eq(y*21+x).addClass("me");
      break;

    case 65 : 
      board[y-1][x] = 2;
      board[y][x] = 0;
      break;

    case 83 : 
      board[y-1][x] = 2;
      board[y][x] = 0;
      break;

     case 68 : 
      board[y-1][x] = 2;
      board[y][x] = 0;
      break;  
  }
});

// 숙제 4방향 다 움직이고 가장자리의 벽을 못 뚫게 하기
// 가능하면 코드 압축하기
// 코드 압축까지 했으면 미로 만들기..?