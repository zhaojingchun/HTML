var can1;
var can2;

var ctx1;
var ctx2;

var lastTime;
var deltaTime;

var canWidth;
var canHeight;

document.body.onload=game;

var bgPic = new Image();
function game(){
    init();
    lastTime = Date.now();
    gameloop();
    deltaTime = 0;
}
function init(){
    //获取convas context；
    can1 = document.getElementById("canvas1"); //前
    ctx1 = can1.getContext("2d");
    can2 = document.getElementById("canvas2");//后  background，ane，fruits
    ctx2 = can2.getContext("2d");

    bgPic.src = "./src/background.jpg";

    canWidth = can1.width;
    canHeight = can1.height;
    drawBackground();
}
function gameloop(){
    window.requestAnimFrame(gameloop);
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    console.log(deltaTime);
}
