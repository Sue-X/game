var can1;
var can2;
var ctx1;
var ctx2;
var canwidth;
var canhight;
var lastime;
var deltatime;
var bgpic = new Image();
var ane;
var fruit;
var mom;
var mx;
var my;
var baby;
var babyeye=[];
var babybody=[];
var momtail=[];
var momeye=[];
var data;
var mombodyora=[];
var mombodyblue=[];
var wave;

document.body.onload=game;
function game() {
		init();
		lastime=Date.now();
		deltatime=0;
		gameloop();
}
function init() {
	can1=document.getElementById('canvas1');//fished,dust,ui,circle
	ctx1=can1.getContext("2d");
	can2=document.getElementById('canvas2');//backgroud,ane,fruits
	ctx2=can2.getContext("2d");

	can1.addEventListener("mousemove",onMouseMove,false);
	bgpic.src="./src/background.jpg";
	canwidth=can1.width;
	canheight=can1.height;
	ane=new aneobj();
	ane.inait();
	fruit= new fruitobj();
	fruit.inait();
	mom=new momobj();
	mom.inait();
	baby =new babyobjet();
	baby.inait();
	mx=canwidth*0.5;
	my=canheight*0.5;
	for (var i = 0; i < 2; i++) {
		babyeye[i]=new Image();
		babyeye[i].src="./src/babyEye"+i+".png";
	}
	for (var i = 0; i < 20; i++) {
		babybody[i]=new Image();
		babybody[i].src="./src/babyFade"+i+".png";
		
	}
	for (var i = 0; i < 8; i++) {
		momtail[i]=new Image();
		momtail[i].src="./src/bigTail"+i+".png";
	}
	for (var i = 0; i < 2; i++) {
		momeye[i]=new Image();
		momeye[i].src="./src/bigEye"+i+".png";
	}
	data=new dataobj();
	for (var i = 0; i < 8; i++) {
		mombodyora[i]=new Image();
		mombodyblue[i]=new Image();
		mombodyora[i].src="./src/bigSwim"+i+".png";
		mombodyblue[i].src="./src/bigSwimBlue"+i+".png";
	}
	ctx1.font="30px Verdana";
	ctx1.textAlign="center";
	wave=new waveobj();
	wave.inait();
}

function gameloop(){
	window.requestAnimFrame(gameloop);
	var now =Date.now();
	deltatime=now-lastime;
	lastime=now;
	if (deltatime>40) {
		deltatime=40;
	}
	drawBackground();
	ane.draw();
	fruitmonit();
	fruit.draw();
	ctx1.clearRect(0,0,canwidth,canheight);//清空画布，重新绘制
	mom.draw();
	baby.draw();
	momfruitscollision();
	mombabycollidion();
	data.draw();
}
function onMouseMove(e){
	if (!data.gameover) {
		 if (e.offSetX||e.layerX) {
		 //e.layerX——相对当前坐标系的border左上角开始的坐标
		 //e.offsetX——相对当前坐标系的border左上角开始的坐标
		 //两者的区别在于浏览器的兼容性
		 	mx=e.offSetX==undefined?e.layerX:e.offSetX;
		 	my=e.offSetY==undefined?e.layerY:e.offSetY;
		 } 
	}
	
	
}