$("document").ready(function(){
	clock();
	clock2();
});

function clock(){
	setDate();
	setInterval(function(){
		setDate();
	},1000);
}

function fix10(a){
	if (a<10) {
		return "0" + a;
	}else{
		return a;
	}
}

function setDate(){
	let today = new Date();
	// document.getElementById("today").innerHTML = today;
	let hours = today.getHours();
	document.getElementById("clock-hours").innerHTML = fix10(hours);
	let minutes = today.getMinutes();
	document.getElementById("clock-minutes").innerHTML = fix10(minutes);
	let seconds = today.getSeconds();
	document.getElementById("clock-seconds").innerHTML = fix10(seconds);
}

function clock2(){
	setDate2();
	setInterval(function(){
		setDate2();
	},16.6666666666666666666666666666666666666666666666666666666666667);//изменение 1: обновление 60 раз в секунду, то есть по колличеству кадров на экране
}

function setDate2(){
	let today = new Date();
	let hours = today.getHours();
	let minutes = today.getMinutes();
	let seconds = today.getSeconds();
	let mseconds = today.getMilliseconds();//изменение 2: узнаем миллисекунды, необходимо для плавности
	
	let deg	= 30*hours + 30*minutes/60 + 30*seconds/3600 + 30*mseconds/3600000;//изменение 3: при расчете положения часовой стрелки учитываеться количество минут, секунд и миллисекунд
	let rotate = "rotate(" + deg + "deg)";
	document.getElementById("hours-line").style.transform = rotate;
	
	deg	= 6*minutes + 6*seconds/60 + 6*mseconds/60000;//изменение 4: при расчете положения минутной стрелки учитываеться количество секунд и миллисекунд
	rotate = "rotate(" + deg + "deg)";
	document.getElementById("minutes-line").style.transform = rotate;
	
	deg	= 6*seconds + 6*mseconds/1000;//изменение 5: при расчете положения секундной стрелки учитываеться и количество миллисекунд
	rotate = "rotate(" + deg + "deg)";
	document.getElementById("seconds-line").style.transform = rotate;
}