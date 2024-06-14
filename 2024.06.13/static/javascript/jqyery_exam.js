$(function(){
  

  // keyup은 눌렀다 땠을때니까  입력되고 알림창
  // down은 누르면 나와서 알림창 뜨고 입력
  // 키보드 누르면 눌렀다 신호만 전달
  // 키보드를 떼야 키값전달
  // 계속 키보드 키를 눌러도 키가 입력이 되는것은
  // 눌렀다 신호가 여러 번  전달되면 입력 처리로 변경

  $("#detail").on( 'keyup' , function(){ //keypress는 특수키에 반응하지않음
    //alert("키보드눌렀다");
     //5자 이상 입력해야 버튼 활성화
    if( $("#detail").val().length >= 5  ){
      $("#save").removeAttr('disabled');
    }else{
      $("#save").attr('disabled','disabled');
  }
  });

  $("#save").click(function(){
    let text = $("#detail").val();
    addList(text); //input태그 입력값 ul에 넣기 
    // input 태그에 아무것도 입력하지 않았다면??
    // if( text  === '' ){ // input 태그가 비어있다.
    //   alert("내용을 입력하세요");
    //   $("#detail").focus();
    //   return; // 함수 강제 종료를 위해
    // }

  });
}); //$(function) end
// onload는 dom구조가 형성되고 추가되어야하는 기능을 넣어주고
// 기능에 필요한 함수는 밖에 위치해도됨

function addList( text ){
  $("#list").append('<li>'+text+'</li>');
}