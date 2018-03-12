var fruitobj=function () {
	this.alive=[];
	this.x=[];
	this.y=[];
	this.l=[];
	this.spd=[];
	this.fruittype=[];
	this.orange=new Image();
	this.blue=new Image();

}
fruitobj.prototype.num=30;
fruitobj.prototype.inait=function () {
	for (var i = 0; i < this.num; i++) {
		this.alive[i]=true;
		this.x[i]=0;
		this.y[i]=0;
		this.spd[i]=Math.random()*0.017+0.003;
		this.born(i);
	}
	this.orange.src="./src/fruit.png";
	this.blue.src="./src/blue.png";
}
fruitobj.prototype.draw=function () {
	for (var i = 0; i < this.num; i++) {
		if (this.alive[i]) {
			if (this.fruittype[i]=="blue") {
				var pic=this.blue;
			} else {
				var pic=this.orange;
			}
			if (this.l[i]<=14) {
			this.l[i]+=this.spd[i]*deltatime;
			} 
			else {
				this.y[i]-=this.spd[i]*7*deltatime;
			}
			ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
			if (this.y[i]<10) {
				this.alive[i]=false;
			}
		}
	}
}
fruitobj.prototype.born=function (i) {
	var aneid=Math.floor(Math.random()*ane.num);
	this.x[i]=ane.x[aneid];
	this.y[i]= canheight- ane.len[aneid];
	this.l[i]=0;
	this.alive[i]=true;
	var ran=Math.random();
	if (ran<0.3) {
		this.fruittype[i]="blue";
	}
	else{
		this.fruittype[i]="orange";
	}
}
fruitobj.prototype.dead=function(i){
	this.alive[i]=false;
}
function fruitmonit(){
	var num=0;
	for (var i = 0; i < fruit.num; i++) {
		if (fruit.alive[i]) num++;
	}
	if (num<15) {
		sendfruit();
		return;
	}
}
function sendfruit() {
	for (var i = 0; i < fruit.num; i++) {
		if (!fruit.alive[i]) {
			fruit.born(i);
			return;
		}
	}
}
/*fruitobj.prototype.update=function () {
	var num=0;
	for (var i = 0; i < this.num; i++) {
		if(this.alive[i]){
			num++;
		}
	}
}*/ 