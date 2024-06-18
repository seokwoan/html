
const com = ["scissors.png" , "rock.png" , "paper.png"];
let record = []; // 전적저장
let comHd = 0; //컴퓨터 이미지 보이기 위한 setInterval값
let comSelect = 0; // 컴퓨터 가위바위보 값

$(function(){ // window.onload

  $("#comImg").attr('src' , './static/image/'+com[0] );

  $("#game").click( startAndStop );

});

function startAndStop(){
  if( $(this).text() === '종료'){  // 가위바위보 진행중
    $(this).text('시작');
    clearInterval( comHd ); // 컴퓨터 이미지 변경되는 setInterval 종료
    $("#userImg").off('click');  // 종료시 유저 가위바위보 클릭 이벤트 해제
  }
  else{  // 가위바위보 시작전
    $(this).text('종료'); 
    comStart();
  
  $(".userImg").click( userSelect ); // 유저 가위바위보 클릭이벤트  

  }
}

function comStart(){
  comHd = setInterval( function(){
    if( comSelect == 2 ){
      comSelect = -1 ;
    }
    $("#comImg").attr( 'src', './static/image/' + com[++comSelect] );
  } , 50);  // 지정된 시간에 한번씩 실행, 시간단위는 밀리세컨드 1000이 1초
}

function userSelect(){
  var idx = $(".userImg").index($(this)); // 내가 클릭한 가위바위보 찾기
  // userImg클래스들을 배열로 가져오고 그 중에서 클릭한 userImg의 index를 줌
  // 몇번재 index를 눌렀나를 출력

  $(this).css( 'border' , '1px solid red' );
  // 내가 클릭한 가위바위보 이미지 표시

  clearInterval(comHd);
  // 컴퓨터의 가위바위보 이미지 변경 멈추기 (clearInterval)

  //alert( `user : ${idx} com : ${comSelect}`) ;
  outCom( idx , comSelect);
  // 결과 띄우기 (승, 패, 무)

  comStart();
  // 다시 컴푸터 가위바위보 이미지 변경 되게( setInterval)

  $(this).css( 'border' , '' );
  // $(this)/removeAttr('style'); -> jquery로 추가한 모든 스타일이 제거됨
  // 내가 클릭한 가위바위보 이미지 표시 해제
}

function outCom( u , c ){
  // 0 가위 , 1 바위 , 2보자기
  var result = "승";
  var winner = u - c;
  if( winner == -1){
    result = "패";
  }
  else if( winner == 0 ){
    result = "무";
  }
  else if( winner == -2 ){
  }

  // 유저와 컴퓨터 가위바위보 비교하여 승 패 무 출력 되게 하세요

  $("body").append(`<div class="result">${result}</div>`);
}