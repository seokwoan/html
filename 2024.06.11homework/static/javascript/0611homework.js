// 숙제 
// 1~50까지 숫자를 랜덤하게 표시
// 1줄에 4개씩 5줄로 표시하기( 반복문 사용 )
// 버튼을 클릭하면 화면에 숫자들 표시
// 함수 두개 사용 함수의 기능은 알아서 정하기


window.onload=function(){
  document.getElementById("createNum").addEventListener( 'click' , display )
}

function display(){
  var num1 = create(1);
  var num2 = create(2);
  var num3 = create(3);
  var num4 = create(4);
  var num5 = create(5);
  var line = document.getElementById("numBox");
  line.innerHTML = num1 + "<br>" + num2 + "<br>" + num3 + "<br>" + num4 + "<br>" + num5 + "<br>";
}



function create(x){
  for( var i = 1 ; i <= 1 ; i++){
    var a = Math.floor( Math.random() * 50 ) + 1 ;
    for( var j = 1 ; j <= 1 ; j++){
      var b = Math.floor( Math.random() * 50 ) + 1 ;
      for( var k = 1 ; k <= 1 ; k++){
        var c = Math.floor( Math.random() * 50 ) + 1 ;
        for( x = 1 ; x <= 5 ; x++){
          // var a = Math.floor( Math.random() * 50 ) + 1 ;
          // var b = Math.floor( Math.random() * 50 ) + 1 ;
          // var c = Math.floor( Math.random() * 50 ) + 1 ;
          var d = Math.floor( Math.random() * 50 ) + 1 ;
          num = ` ${a}  ${b}  ${c}  ${d} ` ;
          return num;
        }
      }
    }
  }
}


// window.onload=function(){
//   document.getElementById("createNum").addEventListener( 'click' , display )
// }

// function display(){
//   var num1 = create();
//   var num2 = create();
//   var num3 = create();
//   var num4 = create();
//   var num5 = create();
//   var line = document.getElementById("numBox");
//   line.innerHTML = num1 + num2 + num3 + num4 + num5 ;
// }



// function create(){
//   for( x = 1 ; x <= 5 ; x++){
//     var a = Math.floor( Math.random() * 50 ) + 1 ;
//     var b = Math.floor( Math.random() * 50 ) + 1 ;
//     var c = Math.floor( Math.random() * 50 ) + 1 ;
//     var d = Math.floor( Math.random() * 50 ) + 1 ;
//     num = ` ${a}  ${b}  ${c}  ${d} <br> ` ;
//     return num;
//   }
// }
// document.getElementById("numBox").innerText=`${a} ${b}  ${c}  ${d}`;