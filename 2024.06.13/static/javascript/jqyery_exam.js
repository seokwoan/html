$(function(){
  

  // keyup은 눌렀다 땠을때니까  입력되고 알림창
  // down은 누르면 나와서 알림창 뜨고 입력
  $("#detail").on( 'keyup' , function(){ //keypress는 특수키에 반응하지않음
    alert("키보드눌렀다");
  });

  $("#save").click(function(){
    let txet = $("#detail").val();
    // input 태그에 아무것도 입력하지 않았다면??
    // if( text  === '' ){ // input 태그가 비어있다.
    //   alert("내용을 입력하세요");
    //   $("#detail").focus();
    //   return; // 함수 강제 종료를 위해
    // }

  });
});