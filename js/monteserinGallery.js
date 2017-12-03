	jQuery.fn.monteserinGallery = function(event){

		var counter = -1;
		var counterNextImg = -1;
		var imagesArray;
		var initPosX = -300
		var initPosY = 0;
		var displayPosX = 0;
		var displayPosY = 0;
		var endPosX = 300;
		var endPosY = 0;
		var inTime = 1000;
		var outTime = 1000;
		var displayTime = 2500;


		if(event !== undefined){
			if(event.initPosX !== undefined)initPosX = event.initPosX;
			if(event.initPosY !== undefined)initPosY = event.initPosY;
			if(event.endPosX !== undefined)endPosX = event.endPosX;
			if(event.endPosY !== undefined)endPosY = event.endPosY;
			if(event.inTime !== undefined)inTime = event.inTime;
			if(event.outTime !== undefined)outTime = event.outTime;
			if(event.displayTime !== undefined)displayTime = event.displayTime;
		}
		$this = $(this);

 //$(window).load(function(){
 	$thisFirstChild = $this.find("img:first-child");
 	var width = $thisFirstChild.css("width");
 	var height = $thisFirstChild.css("height");
 	$this.css({"width": width,"height": height, "position":"relative", "list-style":"none", "padding":"0"});

 	$this.find("li").css({"margin": "0", "padding": "0"});
 	$this.find("img").css({"width": width,"height": height,"position":"absolute" });

 	size = $("li", this).length;
 	imagesArray = $("img", this),

 	imagesArray.css({"opacity" : "0"});
 	loop( counter);

 	function loop(counter){
 		counter++;
 		if(counter>=size){counter=0;}
 		imagesArray.eq(counter).css({"margin-left" : initPosX,"margin-top":initPosY});
 		imagesArray.eq(counter).animate({margin: displayPosY+"px 0px 0px "+displayPosX+"px", opacity:"1"},inTime).delay(displayTime).queue(function(nxt){loop(counter); imagesArray.eq(counter).animate({margin: endPosY+" 0px 0px "+endPosX, opacity:"0"},outTime); nxt() })

 	}


		//});
	}






