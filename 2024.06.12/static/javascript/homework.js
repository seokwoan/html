



let randomNumber = Math.floor(Math.random() * 50) + 1;

function getRandomNumber() {
  return Math.floor(Math.random() * 50) + 1;
}

//innerHTML은 변수와 비슷하다.
// a = 10; a = 20; 인 경우에 a 변수에 10이 남아 있지 않다. 
a = 10 ;
a = a + "" + 20;

function print(){
  let div = document.getElementById("result");

  div.innerHTML = makeRandom();
}

function makeRandom(){
  let 내용 = '';
  for (let i = 0; i < 5; i++) { // 5줄을 표현하기위한 반복문
    var line = '';
    for (let j = 0; j < 4; j++) { // 한줄에 4개씩 숫자 표현하기위한 반복문
      let randomNumber = Math.floor(Math.random() * 50) + 1;
      line = line + ' ' + randomNumber ;
    }
    내용 = 내용 + line + "<br>";
  }
  return 내용;
}

window.onload=function(){

}