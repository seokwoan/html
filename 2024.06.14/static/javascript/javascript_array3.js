let word = [ "한강" , "금강" , "낙동강" , "대전" , "부산" , "광주" , "세종" ];
// 단어를 배열에 저장하려고 한다.
// 단어가 배열에 존재한다면 저장안하고
// 배열에 없는 단어만 저장이 되도록 한다. 

function save(){
  var text = $("#str").val();
  if( word.indexOf(text) == -1){ // indexOf의 값이 -1이면 배열에 없는 데이터
    word.push(text); // 배열에 text값 저장
  }
  else{ //배열에 text값 저장
    $("#error").text("중복 단어 입니다. 다시 입력하세요");
  }
  $("#print").text( word );
}