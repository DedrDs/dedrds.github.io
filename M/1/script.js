$("document").ready(function(){
	$(".box4-simple-btn").click(function(){
		let x = this.id;
		if (x == "box4-simple-btn1"){
			document.getElementById("box4-more1").style.display = "block";
			document.getElementById("box4-more2").style.display = "none";
			document.getElementById("box4-more3").style.display = "none";

			document.getElementById("box4-simple-content1").style.display = "block";
			document.getElementById("box4-simple-content2").style.display = "none";
			document.getElementById("box4-simple-content3").style.display = "none";

			document.getElementById("box4-simple-btn1").style.backgroundColor = "#ddd"; //светлый
			document.getElementById("box4-simple-btn2").style.backgroundColor = "#bbb"; //темный
			document.getElementById("box4-simple-btn3").style.backgroundColor = "#bbb"; //темный

			document.getElementById("box4-simple-btn1").style.borderBottom = "none";
			document.getElementById("box4-simple-btn2").style.borderBottom = "solid #000 2px";
			document.getElementById("box4-simple-btn3").style.borderBottom = "solid #000 2px";
		}
		else if (x == "box4-simple-btn2"){
			document.getElementById("box4-more1").style.display = "none";
			document.getElementById("box4-more2").style.display = "block";
			document.getElementById("box4-more3").style.display = "none";

			document.getElementById("box4-simple-content1").style.display = "none";
			document.getElementById("box4-simple-content2").style.display = "block";
			document.getElementById("box4-simple-content3").style.display = "none";

			document.getElementById("box4-simple-btn1").style.backgroundColor = "#bbb"; //темный
			document.getElementById("box4-simple-btn2").style.backgroundColor = "#ddd"; //светлый
			document.getElementById("box4-simple-btn3").style.backgroundColor = "#bbb"; //темный

			document.getElementById("box4-simple-btn1").style.borderBottom = "solid #000 2px";
			document.getElementById("box4-simple-btn2").style.borderBottom = "none";
			document.getElementById("box4-simple-btn3").style.borderBottom = "solid #000 2px";
		}
		else if (x == "box4-simple-btn3"){
			document.getElementById("box4-more1").style.display = "none";
			document.getElementById("box4-more2").style.display = "none";
			document.getElementById("box4-more3").style.display = "block";

			document.getElementById("box4-simple-content1").style.display = "none";
			document.getElementById("box4-simple-content2").style.display = "none";
			document.getElementById("box4-simple-content3").style.display = "block";

			document.getElementById("box4-simple-btn1").style.backgroundColor = "#bbb"; //темный
			document.getElementById("box4-simple-btn2").style.backgroundColor = "#bbb"; //темный
			document.getElementById("box4-simple-btn3").style.backgroundColor = "#ddd"; //светлый

			document.getElementById("box4-simple-btn1").style.borderBottom = "solid #000 2px";
			document.getElementById("box4-simple-btn2").style.borderBottom = "solid #000 2px";
			document.getElementById("box4-simple-btn3").style.borderBottom = "none";
		}
	})
})