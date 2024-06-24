
$(function(){

  // input 태그에 event등록 이미지를 넣어 value의 값이 바뀜
  // value의 값이 변하는 event는 change
  $("#portrait").on("change" , function(e /*매개변수로 input에 삽입된 이미지를 함수로 보내줌 */ ){
    // console.log($(this).val());  val()의 value값은 파일의 이름만 들어가고 경로는 없음
    // 서버에 전달하려면 val()의 값을 보내야함
    console.log( e.target.files ); // 파일의 데이터를 가져올 수 있음
    var file = e.target.files[0]; // 파일의 데이터는 0번 index에 있음
    // input태그로 선택한 파일의 정보 
    // 파일명, 파일유형, 수정일자, 크기
    var reader = new FileReader(); // 파일열기 객체 생성
    // 자바스크립트의 객체는 생성자 함수를 통해 만들어짐

    // 파일의 데이터를 이용하려면 파일의 로딩이 끝나고 작동해야함
    reader.onload=function(e){ // 파일 열기가 끝났다.
      console.log( e.target.result ); // 데이터의 값이 64진수로 나옴
      // 64진수 안에 경로도 들어있다.
      // 나온 데이터 값을 넣어주면 이미지 미리보기가 가능하다
      var path = e.target.result;
      $("#preview").css( "background" , "url("+path+") no-repeat center");
      // div태그라서 backgground로 넣어줌
      // img태그는 img.attr( "src" , 경로 );
      $("#preview").css( "background-size" , "contain" )
    }
    reader.readAsDataURL(file);
    
  });


  $("#signup").on('click', requiredCheck);
  // 버튼에 클릭이벤트 등

  // 체크박스 선택하였을경우 어떻게 값이 나오나
  // $("#signup").on('click' , function(){

  //   // jquery에서 checkbox중 체크한 것만 가져오려면
  //   // $("input[name=interest]:checked")
  //   // checked를 붙여야함
  //   //alert( $("input[name=interest]:checked").length );
  //   // checkbox의 값은 배열로 가져옴 체크한 수가 반환됨

  //   // 체크한 value 값 전부 확인하려면
  //   let itr = $("input[name=interest]:checked");
  //   let value = [];
  //   for( var i = 0 ; i < itr.length ; i++ ){
  //     value.push( itr.eq(i).val() );
  //     //value.push( $(itr[i]).val() );
  //   }
  //   alert( "체크한 관심분야 : " + value );

  //   //let interest = $("input[name=interest]:checked").val();

  //   //alert(interest);
  //   $("#signupForm").submit();

  // });
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

  // localstorage에 저장 
  // 아이디 = id, 비밀번호 = pw, 이메일 - email, 연락처 = tel, 주소 = addr
   var user = { id : id.val() , pw : pw.val() , email : email.val() , 
    tel : tel.val() , addr : addr.val() };
  
  // 저장은 문자열만 가능해서 객체를 문자열로 변경
    localStorage.setItem( "user" , JSON.stringify(user) );  

    $("#signupForm").submit();
  }
}