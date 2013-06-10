jQuery.fn.monteserinGallery = function(event){
	var counter = -1;
	var counterNextImg = -1;
	var imagesArray;
	var initPosX = 0
	var initPosY = 0;
	var displayPosX = 0;
	var displayPosY = 0;
	var endPosX = 0;
	var endPosY = 0;
	var inTime = 500;
	var outTime = 500;
	var displayTime = 1000;

	if(event.initPosX)initPosX = event.initPosX;
	if(event.initPosY)initPosY = event.initPosY;
	if(event.endPosX)endPosX = event.endPosX;
	if(event.endPosY)endPosY = event.endPosY;
	if(event.inTime)inTime = event.inTime;
	if(event.outTime)outTime = event.outTime;
	if(event.displayTime)displayTime = event.displayTime;
	size = $("li", this).length;
		imagesArray = $("img", this),

	imagesArray.css({"opacity" : "0"});
	loop( counter);

	function loop(counter){
		counter++;
		if(counter>=size){counter=0;}
imagesArray.eq(counter).css({"margin-left" : initPosX});
	imagesArray.eq(counter).animate({margin: displayPosY+"px 0px 0px "+displayPosX+"px", opacity:"1"},inTime).delay(displayTime).queue(function(nxt){loop(counter); imagesArray.eq(counter).animate({margin: endPosY+" 0px 0px "+endPosX, opacity:"0"},outTime); nxt() })

}
}

