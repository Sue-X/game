var  babyobjet=function(){
	this.x;
	this.y;
	this.angle
	this.babyeye=new Image();
	this.babybody=new Image();
	this.babytail=new Image();
	this.babyeyetimer=0;
	this.babyeyecount=0;
	this.babyeyeinterval=1000;

	this.babybodytime=0;
	this.babybodycount=0;
}
babyobjet.prototype.inait=function () {
	this.x=canwidth*0.5-50;
	this.y=canheight*0.5+50;
	this.angle=0;
	this.babytail.src="./src/babyTail0.png";
	
}
babyobjet.prototype.draw=function () {
	this.x=lerpDistance(mom.x,this.x,0.98);
	this.y=lerpDistance(mom.y,this.y,0.98);
	var deltaY=mom.y-this.y;
	var deltaX=mom.x-this.x;
	var beta=Math.atan2(deltaY,deltaX)+Math.PI;
	this.angle=lerpAngle(beta,this.angle,0.6);

	this.babyeyetimer+=deltatime;
	if (this.babyeyetimer>this.babyeyeinterval) {
		this.babyeyecount=(this.babyeyecount+1)%2;
		this.babyeyetimer%=this.babyeyeinterval;
		if (this.babyeyecount==0) {
			this.babyeyeinterval=Math.random()*1500+2000;
		}
		else{
			this.babyeyeinterval=150;
		}
	}
	this.babybodytime+=deltatime;
	if (this.babybodytime>300) {
		this.babybodycount=this.babybodycount+1;
		this.babybodytime%=300;
		if (this.babybodycount>19) {
			this.babybodycount=19;
			data.gameover=true;
			
		}
	}
	
	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	ctx1.drawImage(this.babytail,-this.babytail.width*0.5+20,-this.babytail.height*0.5);
	var babybodycount=this.babybodycount;
	ctx1.drawImage(babybody[babybodycount],-babybody[babybodycount].width *0.5,-babybody[babybodycount].height*0.5);
	var babyeyecount=this.babyeyecount;
	ctx1.drawImage(babyeye[babyeyecount],-babyeye[babyeyecount].width*0.5,-babyeye[babyeyecount].height*0.5);
	ctx1.restore();
}
