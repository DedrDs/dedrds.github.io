$("document").ready(function(){
	let i = 0;
	setInterval(function() {
		if (i == 0) {
			document.getElementById("box1-img1").style.display = "none";
			document.getElementById("box1-img2").style.display = "block";
			i = 1;
		}
		else if(i == 1){
			document.getElementById("box1-img1").style.display = "block";
			document.getElementById("box1-img2").style.display = "none";
			i = 0;
		}
	}, 1000);
})