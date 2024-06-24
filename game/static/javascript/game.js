var selection = 0;
var selOne = -1;
var selTwo = -1;
var selNumF = -1;
var selNumS = -1;
var cardBox = document.getElementsByTagName("cardBox");
var img = document.getElementsByTagName("img");
// var cardBox = $(".cardBox");
// var img = $("img");

window.onload=function(){
  document.getElementById("startB").addEventListener( 'click' , start );
}

function start(){
  var event = document.getElementsByClassName("reverse");
  // img.reverse에 클릭이벤트 추가 

  /* 새로운배열을 하나 만들고
  클릭한 카드의 배열인덱스를 가져오고
  가져온 배열인덱스를 새로운배열에 넣어 2개의 인덱스 값을 비교
  2번 누르면 실행이아니고 누를때마다 배열의 값을 확인하고 
  다르면 false 같으면 true return을 통해 확인 */
  for( var i = 0 ; i < event.length ; i++ ){
    event[i].addEventListener( 'click' , reverse);
  }
  // timer
  $("#timer").text( '00:30'  );
  // timer 함수 만들어서 실햄
}

// reverse click event
function reverse(){
  $(this).removeAttr('class');
  $(this).attr( 'class' , 'open' );
  selection++;

  if( selNumF == -1 ){
    for( var i = 0 ; i < img.length ; i++ ){
      if( this.alt=== img[i].alt ){
        selNumF = i;
        break;
      }
    }
  }
  else if( selNumS == -1 ){
    for( var i = 0 ; i < img.length ; i++ ){
      if( this.alt=== img[i].alt ){
        selNumS = i;
        break;
      }
    }
  }

  if( selOne == -1 ){
    selOne = img[selNumF-1].alt;
  }
  else if( selTwo == -1 ){
    selTwo = img[selNumS-1].alt;
  }
  console.log(selNumF, selNumS);

  if( selection == 2 ){
    console.log(selNumF, selNumS);
    if( selOne == selTwo ){
      // 두개가 같을때도 timeout을 이용해 보여주고 사라지게 하기
      // same함수를 만들어서 클래스 변경, event off 
      // hide, show가 아니라 클래스명을 바꿔주는 작업을 통해 디스플레이 조절을 해야
      // 카드의 위치가 변경되지 않음
      same( selNumF, selNumS );
      console.log( selNumF, selNumS );
      // $(".cardBox").eq(Math.floor(selNumF / 2)).hide();
      // $(".cardBox").eq(Math.floor(selNumS / 2)).hide();
      // 두개 div가 display none으로 변경해 남은 카드의 위치가 변경됨
      /* .reverse의 css에서 이미지를 #cardBox와 같게
      z-index를 2로
      .reverse의 클릭 함수 제거 */
      // 두개 사라지면 맞춤변수(전역)++
      // 변수의 값이 img.length/2와 같아지면 end함수 실햄
      // end함수는 실행
    }  
    else if( selOne != selTwo ){
      reset( selNumF, selNumS );
    }
    selection = 0;
    selOne = -1;
    selTwo = -1;
    selNumF = -1;
    selNumS = -1;
  }
}

function same( selNumF, selNumS ){
  setTimeout( function(){
    console.log( selNumF, selNumS );
    $('img').eq(selNumF).removeAttr('class');
    $('img').eq(selNumS).removeAttr('class');
    $('img').eq(selNumF).attr( 'class' , 'reverse');
    $('img').eq(selNumS).attr( 'class' , 'reverse');
  }, 200);
}

function reset( selNumF, selNumS ){
  console.log( selNumF, selNumS );
  setTimeout( function(){
    $('img').eq(selNumF).show();
    $('img').eq(selNumS).show();
  }, 200);
}

// end
// end 함수 
// end함수는 매개변수를 가짐
// timer 종료 스위치 또는 이프로 매개변수 전달
// 받은 매개변수가 승리면 승리 모달출력 축하메세지, 다음단계 버튼
// 다음 단계 버튼을 누르면 모달창이 사라지고 카드가 늘어남
// 똑같이 시작을 눌러서 시작
// 받은 매개변수가 타임아웃이면 실패 모달 출력
// 실패 모달은 시간종료 메세지 출력 다시도전 버튼
// 다시 도전하면 처음부터 도전?


// timer
// timer 함수는 시간변수(전역) 1초당 1씩 감소
// 설정된 시간이 끝나면 end함수 실행