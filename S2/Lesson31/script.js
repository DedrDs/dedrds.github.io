$("document").ready(function(){
	let s = 1;
	setInterval(function(){
		if (s == 1) {
			document.getElementById("box1-element1").style.display = "none";
			document.getElementById("box1-element2").style.display = "block";
			s = 2;
		}
		else{
			document.getElementById("box1-element2").style.display = "none";
			document.getElementById("box1-element1").style.display = "block";
			s = 1;
		}
	}, 5000);
})