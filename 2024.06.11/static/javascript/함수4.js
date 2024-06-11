// 출력으로 바로 1번

window.onload=function(){
  document.getElementById("calc").addEventListener( 'click' , 출력 );
}

function 총점계산( a , b , c , d ){ // 총점 계산만 하는 함수
  var sum = a + b + c + d ;
  return sum;
}

function 평균계산( total ){ // 평균 계산만 하는 함수
  var ever = (total / 4) ;
  return ever;
}

function 출력(){ // 총점과 평균을 화면에 출력하는 함수
  var korean = Number(document.getElementById("kor").value);
  var math = Number(document.getElementById("mat").value);
  var english = Number(document.getElementById("eng").value);
  var history = Number(document.getElementById("his").value);
  var totalCalc = 총점계산( korean , math , english , history );
  var everage = 평균계산( 총점계산( korean , math , english , history ) );
  document.getElementById("total").innerText="총점 : " + totalCalc;
  document.querySelector("#avg").innerText="평균 : " + everage;
}


// 출력으로 바로 2번

window.onload=function(){
  document.getElementById("calc").addEventListener( 'click' , function(){
    var korean = Number(document.getElementById("kor").value);
    var math = Number(document.getElementById("mat").value);
    var english = Number(document.getElementById("eng").value);
    var history = Number(document.getElementById("his").value);
    출력( korean , math , english , history );
  } );
}

function 총점계산( a , b , c , d ){ // 총점 계산만 하는 함수
  var sum = a + b + c + d ;
  return sum;
}

function 평균계산( total ){ // 평균 계산만 하는 함수
  var ever = (total / 4) ;
  return ever;
}

function 출력( a , b , c , d ){ // 총점과 평균을 화면에 출력하는 함수
  var totalCalc = 총점계산( a , b , c , d );
  var everage = 평균계산( 총점계산( a , b , c , d ) );
  document.getElementById("total").innerText="총점 : " + totalCalc;
  document.querySelector("#avg").innerText="평균 : " + everage;
}

// 선생님 

// window.onload = function(){  
//   document.getElementById("calc").addEventListener('click', function(){
//      var k = Number( document.getElementById("kor").value );
//      var m = Number( document.getElementById("mat").value );
//      var e = Number( document.getElementById("eng").value );
//      var h = Number( document.getElementById("his").value );
//      총점계산(k,m,e,h);
//   } );
// }
// function 총점계산(a, b, c, d){ // 총점 계산 만 하는 함수
//  var total = a+ b+ c+ d;
//  평균계산( total );
// }
// function 평균계산( total ){ // 평균 계산만 하는함수
//  var avg = total/4 ;
//  출력( total , avg);
// }
// function 출력(tot, avg){ // 총점과 평균을 화면에 출력하는 함수

//  document.getElementById("total").innerText = `총점 : ${tot}점`;
//  document.getElementById("avg").innerText = `평균 : ${avg}점`;
// }

// 숙제 1~50까지 숫자를 랜덤하게 표시
// 1줄에 4개씩 5줄로 표시하기( 반복문 사용 )
// 버튼을 클릭하면 화면에 숫자들 표시
// 함수 두개 사용 함수의 기능은 알아서 정하기