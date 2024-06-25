const roomImg = [ "room1.jpg" , "room2.jpg" , "room3.jpg" ];
var showImg = roomImg.length-1;


console.log(roomImg[showImg]);

window.onload=function(){

  setInterval(function(){
    console.log(showImg);
    $("#showImg").attr( 'src', './static/image/'+roomImg[showImg] );
    showImg--;
    if( showImg == -1 ){
      showImg = roomImg.length-1;
    }
  } , 1000 );

}
