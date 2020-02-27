$("document").ready(function(){
	clock();
})

function clock(){
	getClock();
	setInterval(function(){
    	getClock();
	}, 1000);
}

function getClock(){
	let today = new Date();

	let day = today.getDay();
	switch(day){
		case 1:
			document.getElementById("day").innerHTML = "MON";
		break;
		case 2:
			document.getElementById("day").innerHTML = "TUE";
		break;
		case 3:
			document.getElementById("day").innerHTML = "WED";
		break;
		case 4:
			document.getElementById("day").innerHTML = "THU";
		break;
		case 5:
			document.getElementById("day").innerHTML = "FRI";
		break;
		case 6:
			document.getElementById("day").innerHTML = "SAT";
		break;
		case 0:
			document.getElementById("day").innerHTML = "SUN";
		break;
	}
	let date = today.getDate();
	document.getElementById("date").innerHTML = date;
	let month = today.getMonth() + 1;
	document.getElementById("month").innerHTML = fix10(month);
	let	year = today.getFullYear();
	document.getElementById("year").innerHTML = fix10(year);
	let	hours = today.getHours();
	document.getElementById("hours").innerHTML = fix10(hours);
	let	minutes = today.getMinutes();
	document.getElementById("minutes").innerHTML = fix10(minutes);
	let seconds = today.getSeconds();
	if(seconds==0){
		alarmClock(day,hours,minutes);
	}
	document.getElementById("seconds").innerHTML = fix10(seconds);
}

function fix10(a){
	if (a<10) {
		a = "0" + a;
	}
	return a;
}

function alarmClock(day,hour,minute){
	if (day == 2 && hour == 9 && minute == 45) {
		alert("Work");
	}
}