var waveobj=function () {
	this.x=[];
	this.y=[];
	this.alive=[];
	this.r=[];
}
waveobj.prototype.num=10;
waveobj.prototype.inait=function(){
	for (var i = 0; i < this.num; i++) {
		this.alive[i]=false;
		this.r[i]=0;
	}
}
waveobj.prototype.draw=function(){
	for (var i = 0; i < this.num; i++) {
		if (!this.alive[i]) {
			this.r[i]+=deltatime*0.1;
			var alpha=1-this.r[i]/100;
			//draw
			ctx1.beginPath();
			ctx1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
			ctx1.closePath();
			ctx1.strokeStyle="rgba(255,255,255,"+alpha+")";
		}
	}
}
waveobj.prototype.born=function (x,y) {
	for (var i = 0; i < this.num; i++) {
		if (!this.alive[i]) {
			this.alive[i]=true;
			this.r[i]=20;
			this.x[i]=x;
			this.y[i]=y;
			//born
			return;
		}
	}
}