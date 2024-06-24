$(function(){

  // 로그인화면에서 로그인 모달 닫기
  $("#back").click(function(){
    $("#modal").hide();
  });

  // 로그인 화면에서 로그인 버튼 클릭시
  $("#loginBt").click(function(){
    var id = $("#id");
    var pw = $("#pw");
  
    // 아이디와 비밀번호를 입력하지 않으면 로그인 진행 안함
    if( id.val() == '' || pw.val() == '' ){
      alert( "아이디 또는 비밀번호를 입력하세요");
      return;
    }

    // 아이디와 비밀번호를 입력했다면 로그인 진행
    let user = JSON.parse( localStorage.getItem("user") );
    // 저장된 데이터 값을 가져온다. 

    // 아이디 일치
    if( id.val() === user.id ){
      // 아이디가 일치한다면
      if( pw.val() === user.pw ){
        // 아이디와 비밀번호가 일치하면 로그인
        $(".member").html( ` <b>${user.id}</b>
          <a href="javascript:window.location.reload()">로그아웃</a>
          `);
        $("#modal").hide();
        return;  
      }
    }
    alert("아이디 또는 비밀번호가 일치하지 않습니다.");

  });

});



function login(){
  $("#modal").show();
}