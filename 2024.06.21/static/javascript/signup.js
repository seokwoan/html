
$(function(){
  //$("#signup").on('click', requiredCheck);
  // 버튼에 클릭이벤트 등

  // 체크박스 선택하였을경우 어떻게 값이 나오나
  $("#signup").on('click' , function(){

    // jquery에서 checkbox중 체크한 것만 가져오려면
    // $("input[name=interest]:checked")
    // checked를 붙여야함
    //alert( $("input[name=interest]:checked").length );
    // checkbox의 값은 배열로 가져옴 체크한 수가 반환됨

    // 체크한 value 값 전부 확인하려면
    let itr = $("input[name=interest]:checked");
    let value = [];
    for( var i = 0 ; i < itr.length ; i++ ){
      value.push( itr.eq(i).val() );
      //value.push( $(itr[i]).val() );
    }
    alert( "체크한 관심분야 : " + value );

    //let interest = $("input[name=interest]:checked").val();

    //alert(interest);
    $("#signupForm").submit();

  });
});

function requiredCheck(){  // 필수 입력을 모두 입력했는가?
 var id = $("#userId"); // id.val을 통해 id를 가져올수 있음
 var pw = $("#userPw"); // 비밀번호
 var re = $("#pwRe"); //비밀번호 확인
 var email = $("#email"); // 이메일
 var tel = $("#tel"); // 연락처
 var addr = $("#addr"); // 주소

 if( id.val() == '' ){
  alert("아이디 입력하세요");
  id.focus();  // 아이디 input 태그에 포커스 넣기
 }
 else if( pw.val()  == '' ){
  alert("비밀번호를 입력하세요");
  pw.focus(); 
  re.val(''); // input태그에 입력된 값을 공백을 넣어 지워줌
 }
 else if( re.val() == '' ){
  alert("비밀번호 다시 입력해주세요");
  re.focus();
 }
 else if( pw.val() != re.val() ){
  alert("비밀번호가 잘못되었습니다");
  pw.val('');
  re.val('');
  pw.focus();
 }
 else if( email.val() == '' ){
  alert("이메일을 입력하세요");
  email.focus();
 }
 else if( tel.val() == '' ){
  alert("연락처를 입력하세요");
  tel.focus();
 }
 else if( addr.val() == '' ){
  alert("주소를 입력하세요")
  addr.focus();
 }
 else{  // 위의 모든 조건식이 거짓이다 -> 모든 내용 입력
  $("#signupForm").submit();
 }
}