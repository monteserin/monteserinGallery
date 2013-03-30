jQuery.fn.monteserinGallery = function(event){
	var counter = -1;
	var initPosX = 0
	var initPosY = 0;
	var displayPosX = 0;
	var displayPosY = 0;
	var endPosX = 0;
	var endPosY = 0;
	var initWidth = 100;
	var inTime = 500;
	var outTime = 500;
	var displayTime = 1000;

	if(event.initPosX)initPosX = event.initPosX;
	if(event.initPosY)initPosY = event.initPosY;
	if(event.endPosX)endPosX = event.endPosX;
	if(event.endPosY)endPosY = event.endPosY;
	if(event.initWidth)initWidth = event.initWidth;
	if(event.inTime)inTime = event.inTime;
	if(event.outTime)outTime = event.outTime;
	if(event.displayTime)displayTime = event.displayTime;
	size = $("li", this).length;
	$("img", this).css({"margin-left" : initPosX+"px", "position" : "absolute", "width" : initWidth+"px", "opacity" : "0"});
	loop(this);

	function loop(me){
		if(counter>=size-1){counter=0;}
		else{ counter++;}

		$("img", me).eq(counter)
	//top, right, bottom, left
	.animate({margin: displayPosY+"px 0px 0px "+displayPosX+"px", opacity:"1"},inTime).delay(displayTime)
	.animate({margin: endPosY+"px 0px 0px "+endPosX+"px", opacity:"0"},outTime)
	//reset image
	.animate({margin: initPosY+"px 0px 0px "+initPosX+"px"},0,function(){loop(me)});
}
}

