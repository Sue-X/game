var momobj=function () {
	this.x;
	this.y;
	this.angle;
	this.bigeye=new Image();
	this.bigtail=new Image();

	this.momtailtimer=0;
	this.momtailcount=0;

	this.momeyetimer=0;
	this.momeyecount=0;
	this.momeyeinterval=1000;
	this.mombodycount=0;
}
momobj.prototype.inait=function(){
	this.x=canwidth*0.5;
	this.y=canheight*0.5;
	this.angle=0;
	
	
}
momobj.prototype.draw=function(){
	this.x=lerpDistance(mx,this.x,0.98);
	this.y=lerpDistance(my,this.y,0.98);
	var deltaY=my-this.y;
	var deltaX=mx-this.x;
	var beta=Math.atan2(deltaY,deltaX)+Math.PI;//注意是反正切，y在前面，x在后面
	this.angle=lerpAngle(beta,this.angle,0.6);

	this.momtailtimer+=deltatime;
	if (this.momtailtimer>50) {
		this.momtailcount=(this.momtailcount+1)%8;
		this.momtailtimer%=50;
	}

	this.momeyetimer+=deltatime;
	if(this.momeyetimer>this.momeyeinterval){
		this.momeyecount=(this.momeyecount+1)%2;
		this.momeyetimer%=this.momeyeinterval;
		if (this.momeyecount==0) {
			this.momeyeinterval=Math.random()*1500+2000;
		} else {
			this.momeyeinterval=150;
		}
	}
	ctx1.save();//表示仅限于这个过程
	ctx1.translate(this.x,this.y);//重置原点
	ctx1.rotate(this.angle);
	var momtailcount=this.momtailcount;
	ctx1.drawImage(momtail[momtailcount],-momtail[momtailcount].width*0.5+28,-momtail[momtailcount].height*0.5);
	var mombodycount=this.mombodycount;
	if (data.double==1) {
		ctx1.drawImage(mombodyora[mombodycount],-mombodyora[mombodycount].width*0.5,-mombodyora[mombodycount].height*0.5);
	} else {
		ctx1.drawImage(mombodyblue[mombodycount],-mombodyblue[mombodycount].width*0.5,-mombodyblue[mombodycount].height*0.5);
	}
	
	var momeyecount=this.momeyecount;
	ctx1.drawImage(momeye[momeyecount],-momeye[momeyecount].width*0.5,-momeye[momeyecount].height*0.5);
	
	ctx1.restore();
}