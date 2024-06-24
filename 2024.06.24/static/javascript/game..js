function timeStart(){
  setInterval(function(){
    time++;
    $("#step").text( `${time}초` );;
  } , 1000 );
}

let clickStop = true;

function imgClick(){
  if( !clickStop) return;

  var idx = $(".item").index($(this));  // 클릭한 div의 index
  var $clickImg = $(".item").eq(idx).find("img"); // 클릭한 div의 img태그

  // 클릭한 이미지 화면에 표시 
  $clickImg.removeClass('hide');
  $clickImg.addClass('select');

  if( selectImg.length == 1 ){
    if( selectImg[0].div == idx ){
      return; 
      // 이미 클릭한 이미지는 다시 클릭해도 실행 안되게 막아줌
    }
  }
  selectImg.push( { 이미지 : imgPlace[idx] , div:idx } ); 
  //  현재 화면에 클릭해서 보이는 이미지 imgPlace 배열의 값은 
  //  imgName에서 이미지의 위치이다.
  //  imgPlace[1]에 3이 있다면 imgName의 index3 이미지가 나온것

  if( selectImg.length == 2 ){
    if( matching() ){ // 두개의 이미지가 서로 같다
      score++;
      // 같은 이미지니까 빨강 테두리 제거 - select클래스 제거
      $(".item").eq( selectImg[0].div).find("img").removeClass('select');
      $(".item").eq( selectImg[1].div).find("img").removeClass('select');
      // 해당 이미지들 클릭 이벤트 해제
      $(".item").eq( selectImg[0].div).off('click');
      $(".item").eq( selectImg[1].div).off('click');
      selectImg = [];
    }
    else{ // 두개의 이미지가 서로 다르다
      clickStop = false;
      // 서로 다른 이미지니까 1초 뒤에 두개의 이미지 감추기
      setTimeout( function(){
        $(".item").eq( selectImg[0].div ).find("img").removeClass("select");
        $(".item").eq( selectImg[1].div ).find("img").removeClass('select');
        $(".item").eq( selectImg[0].div ).find("img").addClass('hide');
        $(".item").eq( selectImg[1].div ).find("img").addClass('hide');
        selectImg = [];
        clickStop = true;
      } , 1000 );
    }
  }
  updateState();
}

function matching(){
  if( selectImg[0].이미지 === selectImg[1].이미지 ){
    return true;
  }
  else{
    return false;
  }

}

function updateState(){
  clickCount++;
  $("#score").text(`점수 : ${score}점`);
  $("#click").text(`클릭횟수 : ${clickCount}/30`);

  if( clickCount == 31 ){
    $(".item").off('click');
    alert( " 횟수 초과로 게임오버 " );
  }
}