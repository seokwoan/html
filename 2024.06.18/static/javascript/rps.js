
const com = ["scissors.png" , "rock.png" , "paper.png"]; // 이미지 배열에 저장 
let record = []; // 전적저장
let comHd = 0; //컴퓨터 이미지 보이기 위한 setInterval값
let comSelect = 0; // 컴퓨터 가위바위보 값

$(function(){ // window.onload

  // 전적 배열 초기화 세팅
  let storageData = JSON.parse(localStorage.getItem("record"));
  if( storageData){
    record = storageData;
    console.log( storageData);
  }
  else{
    console.log("storage저장 데이터 없음")
  }
  $("#comImg").attr('src' , './static/image/'+com[0] );

  $("#game").click( startAndStop );

  $("#record").click( gameRecord );

});

function gameRecord(){
  $("#modal").show();  // 모달창 보이기

  $("#data").empty();  
  // 전적을 누르면 append가 계속 작동해 같은내용이 계속 추가됨
  // 이전 값을 지워주고 추가된 전적이 있으면 나타냄

  for( var i = 0 ; i < record[0].length ; i++){
    $("#data").append( `
      <tr>
        <td class='user'> <img src="./static/image/${record[0][i]}"> </td>
        <td class='com'> <img src="./static/image/${record[1][i]}"> </td>
        <td class='outCom'>${record[2][i]}</td>
      </tr>
      ` );
  }

  $("#modalBackground").click(function(){
    $("#modal").hide();
  });
}

function startAndStop(){
  if( $(this).text() === '종료'){  // 가위바위보 진행중
    $(this).text('시작');
    clearInterval( comHd ); // 컴퓨터 이미지 변경되는 setInterval 종료
    $(".userImg").off('click');  // 종료시 유저 가위바위보 클릭 이벤트 해제
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

  //$(".rpsImg").css( 'z-index' , -1 );

  $("#game").off('click');

  $(".userImg").off('click');

  // 선택하면 click event를 꺼둬서 실행을 막음 혹시 모를 버그 대비

  setTimeout( function(){
    comStart();
    // 다시 컴푸터 가위바위보 이미지 변경 되게( setInterval)

    $(".userImg").eq(idx).css( 'border' , '' );
    // $(this).removeAttr('style'); -> jquery로 추가한 모든 스타일이 제거됨
    // 내가 클릭한 가위바위보 이미지 표시 해제
    $(".result").remove();

    //$(".rpsImg").css( 'z-index' , 2 );

    $("#game").click( startAndStop );

    $(".userImg").click( userSelect );
    

  }, 3000 ); // 지정된 시간 이후에 한번 실행
}

function outCom( u , c ){
  // 0 가위 , 1 바위 , 2보자기
  var result = "승";
  var winner = u - c;
  if( winner == -1 || winner == 2){
    result = "패";
  }
  else if( winner == 0 ){
    result = "무";
  }

  // 유저와 컴퓨터 가위바위보 비교하여 승 패 무 출력 되게 하세요
  record[0].push( com[u] ); // 유저 가위바위보 저장
  record[1].push( com[c] ); // 컴 가위바위보 저장
  record[2].push( result ); // 승패 저장
  console.log(record);

  localSave();  // 컴퓨터에 저장하기 ( 브라우저에 저장 )

  $("body").append(`<div class="result">${result}</div>`);
}


function localSave(){
  // JSON.stringify(); -> JSON(양식) 이라는 문자열로 변환 시켜준다.
  // 숫자 -> 문자열  10+"" 공백을 더해주면 문자열로 변함

  let recordJSON = JSON.stringify( record );
  // JSON.parse(record) JSON문자열로 바꾼 데이터를 다시 원래 데이터로 돌려줌
  // 문자열 -> 배열 
  localStorage.setItem( "record" , recordJSON );
  // localStorage.getItem("record"); 저장된 값을 가져옴 저장한 이름을 가져와야함

  //localStorage.setItem( "like" , "banana" ); 
  // ( "name" , "data" ) 데이터의 이름을 넣어줘야함, 문자열만 저장가능
  // set은 저장 get은 불러오기
}