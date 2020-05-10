$("document").ready(function(){
	$(".box4-simple-button").click(function(){
		let x = this.id;
		if (x == "box4-simple-button1") {
			// меняем box4-more
			document.getElementById("box4-more1").style.display = "block";
			document.getElementById("box4-more2").style.display = "none";
			document.getElementById("box4-more3").style.display = "none";
			// меняем box4-simple-content
			document.getElementById("box4-simple-content1").style.display = "block";
			document.getElementById("box4-simple-content2").style.display = "none";
			document.getElementById("box4-simple-content3").style.display = "none";

			document.getElementById("box4-simple-button1").style.backgroundColor = "#fff";
			document.getElementById("box4-simple-button2").style.backgroundColor = "#bbb";
			document.getElementById("box4-simple-button3").style.backgroundColor = "#bbb";

			document.getElementById("box4-simple-button1").style.borderBottom = "solid #000 0";
			document.getElementById("box4-simple-button2").style.borderBottom = "solid #000 2px";
			document.getElementById("box4-simple-button3").style.borderBottom = "solid #000 2px";
		}
		else if(x == "box4-simple-button2") {
			// меняем box4-more
			document.getElementById("box4-more1").style.display = "none";
			document.getElementById("box4-more2").style.display = "block";
			document.getElementById("box4-more3").style.display = "none";
			// меняем box4-simple-content
			document.getElementById("box4-simple-content1").style.display = "none";
			document.getElementById("box4-simple-content2").style.display = "block";
			document.getElementById("box4-simple-content3").style.display = "none";

			document.getElementById("box4-simple-button1").style.backgroundColor = "#bbb";
			document.getElementById("box4-simple-button2").style.backgroundColor = "#fff";
			document.getElementById("box4-simple-button3").style.backgroundColor = "#bbb";

			document.getElementById("box4-simple-button1").style.borderBottom = "solid #000 2px";
			document.getElementById("box4-simple-button2").style.borderBottom = "solid #000 0";
			document.getElementById("box4-simple-button3").style.borderBottom = "solid #000 2px";
		}
		else if(x == "box4-simple-button3") {
			// меняем box4-more
			document.getElementById("box4-more1").style.display = "none";
			document.getElementById("box4-more2").style.display = "none";
			document.getElementById("box4-more3").style.display = "block";
			// меняем box4-simple-content
			document.getElementById("box4-simple-content1").style.display = "none";
			document.getElementById("box4-simple-content2").style.display = "none";
			document.getElementById("box4-simple-content3").style.display = "block";

			document.getElementById("box4-simple-button1").style.backgroundColor = "#bbb";
			document.getElementById("box4-simple-button2").style.backgroundColor = "#bbb";
			document.getElementById("box4-simple-button3").style.backgroundColor = "#fff";

			document.getElementById("box4-simple-button1").style.borderBottom = "solid #000 2px";
			document.getElementById("box4-simple-button2").style.borderBottom = "solid #000 2px";
			document.getElementById("box4-simple-button3").style.borderBottom = "solid #000 0";
		}
	})
})