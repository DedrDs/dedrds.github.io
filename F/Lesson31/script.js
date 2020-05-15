$("document").ready(function(){
	$("body").removeClass("preload");
	let x = 1;
	setInterval(function(){
		if (x == 1) {
			document.getElementById("box1-slide1").style.display = "none";
			document.getElementById("box1-slide2").style.display = "block";
			x = 0;
		}
		else{
			document.getElementById("box1-slide2").style.display = "none";
			document.getElementById("box1-slide1").style.display = "block";
			x = 1;
		}
	}, 5000);
});