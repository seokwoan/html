// 1~3반
// 각반 학생 성적들 저장하여 평균을 낸다.
// let stdScore = [50, 77, 88, 99, 34];
// let stdScore2 = [];
// let stdScore3 = [];

// 배열에 배열을 넣는다. - 2차원 배열


let stdScore = [
  [50, 77, 88, 99, 34],
  [78, 67, 56, 45, 32],
  [98, 87, 76, 65, 54]
];

console.log(stdScore[1][2]);
// 2차원 배열에서 index는 2개다 바깥 배열의 index, 안쪽 배열의 index
// stdScore[index1][index2]
for( var i = 0; i < 3 ; i++){
  for ( var k = 0 ; k < 5 ; k++){
    document.write(stdScore[i][k]+"&nbsp;");
  }
}

// 주차장 1~4층 건물이다.
// 각 층별 주차 차량수와 잔여 주차구역을 표시 하고자 한다면
// 2차원 배열을 사용한다.
let pk = [ new Array(15).fill(0), new Array(15).fill(0), new Array(15).fill(0), new Array(20).fill(0)];

for( var i = 0 ; i < pk.length ; i++){
  for( var k = 0 ; k < pk[i].length ; k++){ 
    // pk의 1차원 배열들의 길이만큼 (i번 index의 길이 만큼 )
    document.write( pk[i][k]+"&nbsp;");
  }
  document.write("<br>");
}

// 다음 2차원배열의 각 행의 총합을 구하여 출력하세요
// 각 행은 num[0], num[1], num[2] 입니다.
let num = [ [10, 20, 30, 40], [1, 4, 5], [23, 45, 56, 3, 9, 5] ];
let sum = 0;
for( var i = 0 ; i < num.length ; i++){
  for( var k = 0 ; k < num[i].length ; k++){
    sum = sum + num[i][k];
  }
  document.write( ` ${i} 행의 합은 : ${sum} 입니다. <br>`);
  sum = 0;
} // 출력만 하려면 하나의 변수를 통해 저장해서 초기화 해도 되지만
  // 출력만이 아니라 나온 값을 사용하려면 나온값을 배열에 저장해준다.

let numTotal = [ 0, 0, 0 ];
for( var i = 0 ; i < num.length ; i++){
  for( var k = 0 ; k < num[i].length ; k++){
    numTotal[i] += num[i][k];
  }
  document.write(numTotal[i] + "<br>");
}
// 나온 값을 배열에 저장해두고 배열의 값을 가져오면 쉽게 사용가능
// 
