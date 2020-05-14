$("document").ready(function(){
	$(".box6-simple-btn").click(function(){
		let x = this.id;
		if (x == "box6-simple-btn1") {
			document.getElementById("box6-simple-main1").style.transform = "scale(1)";
			document.getElementById("box6-simple-main2").style.transform = "scale(0)";
			document.getElementById("box6-simple-main3").style.transform = "scale(0)";

			document.getElementById("box6-more1").style.transform = "scale(1)";
			document.getElementById("box6-more2").style.transform = "scale(0)";
			document.getElementById("box6-more3").style.transform = "scale(0)";

			document.getElementById("box6-simple-btn1").style.background = "#ddd"; //светлый
			document.getElementById("box6-simple-btn2").style.background = "#bbb"; //темный
			document.getElementById("box6-simple-btn3").style.background = "#bbb"; //темный
		}
		else if(x == "box6-simple-btn2"){
			document.getElementById("box6-simple-main1").style.transform = "scale(0)";
			document.getElementById("box6-simple-main2").style.transform = "scale(1)";
			document.getElementById("box6-simple-main3").style.transform = "scale(0)";

			document.getElementById("box6-more1").style.transform = "scale(0)";
			document.getElementById("box6-more2").style.transform = "scale(1)";
			document.getElementById("box6-more3").style.transform = "scale(0)";

			document.getElementById("box6-simple-btn1").style.background = "#bbb"; //темный
			document.getElementById("box6-simple-btn2").style.background = "#ddd"; //светлый
			document.getElementById("box6-simple-btn3").style.background = "#bbb"; //темный
		}
		else if(x == "box6-simple-btn3"){
			document.getElementById("box6-simple-main1").style.transform = "scale(0)";
			document.getElementById("box6-simple-main2").style.transform = "scale(0)";
			document.getElementById("box6-simple-main3").style.transform = "scale(1)";

			document.getElementById("box6-more1").style.transform = "scale(0)";
			document.getElementById("box6-more2").style.transform = "scale(0)";
			document.getElementById("box6-more3").style.transform = "scale(1)";

			document.getElementById("box6-simple-btn1").style.background = "#bbb"; //темный
			document.getElementById("box6-simple-btn2").style.background = "#bbb"; //темный
			document.getElementById("box6-simple-btn3").style.background = "#ddd"; //светлый
		}
	})
})