/*
 이름입력 버튼과 나이입력 버튼을 각각 클릭하여 input 나타내어 이름과 나이 입력하세요
 등록 버튼을 클릭하여 화면에 이름, 나이, 태어난년도를 출력하세요.
*/

$(function(){
  $("#name").hide();

  $("#age").hide();

  $("#nameInput").click( nameStart );

  $("#ageInput").click( ageStart );

 $("#enroll").click( regist );

  // $("#enroll").on("click" , function(){
  //   let name = $("#name").val();
  //   let age = parseInt($("#age").val());
  //   let year = 2024 - age;

  //   $("#nameView").text(name);
  //   $("#ageView").html(age);
  //   $("#yearView").text(year);
  // });

  $(document).keyup( function(a){
    if( a.keyCode === 13 ){
      regist();
    }
  });
})


function nameStart(){
  $("#name").show();

  $("#name").focus();
}

function ageStart(){
  $("#age").fadeIn();
  // show, hide, fadeIn, fadeOut은 display의 값을 변경하므로
  // 교차해서 사용이 가능하다

  $("#age").focus();
}

function regist(){
  var userName = $("#name").val();

  var userAge = $("#age").val();

  var bornYear = 2024 - userAge;

  console.log(bornYear);
  var isCheck = userData( userName , userAge );

  if(isCheck){
    $("#nameView").html(userName);

    $("#ageView").html(userAge);

    $("#yearView").html(bornYear);
  }
}

function userData( name , age ){
  if( name === ''){
    alert("이름을 입력하세요");

    $("#name").focus();

    return false;
  }
  else if( age === ''){
    alert("나이를 입력하세요");

    $("#age").focus();

    return false;
  }
  else if( isNaN(age) ){
    alert("나이를  숫자로 입력하세요");

    $("#age").val('');

    $("#age").focus();

    return false;
  }
  return true;
}