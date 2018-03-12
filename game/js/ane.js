var aneobj = function () {
	this.x=[];
	this.len=[];
}

aneobj.prototype.num=50;

aneobj.prototype.inait=function () {
	for (var i = 0; i < this.num; i++) {
		this.x[i]=i*16+Math.random()*20;
		this.len[i]=200+Math.random()*50;
	}
}

aneobj.prototype.draw=function () {
	ctx2.save();
	ctx2.globalAlpha=0.6;
	ctx2.lineWidth=20;
	ctx2.lineCap="round";
	ctx2.strokeStyle="#3b154e";
	for (var i = 0; i < this.num; i++) {
		ctx2.beginPath();
		ctx2.moveTo(this.x[i],canheight);
		ctx2.lineTo(this.x[i],canheight-this.len[i]);
		ctx2.stroke();
	}
	ctx2.restore();//save()和restore()表示for这些样式只在这端之间起作用
    
}

