$(document).ready(function(){
	pomodoro(1);
	$('#pomodoro>ul li:nth-child(1) button').css({'background':'var(--cor2)'});
	var body = document.getElementsByTagName('body')[0];
	$(window).resize(function(){
		console.log($('main').outerWidth());
		body.style.transform ='scale('+($('main').outerWidth()*100/350)/100+')';
	});
});
var c;
function pomodoro(x){
	clearInterval(c)
	$('#pomodoro>ul li button').css({'background':'none'});
	$('#pomodoro>ul li:nth-child(1) button').css({'background':'var(--cor1)'});
	$('#pomodoro .contador #cont').text((x>=10?x:"0"+x)+':00');
}
function shortBreak(x){
	clearInterval(c)
	$('#pomodoro>ul li button').css({'background':'none'});
	$('#pomodoro>ul li:nth-child(2) button').css({'background':'var(--cor1)'});
	$('#pomodoro .contador #cont').text((x>=10?x:"0"+x)+':00');
}
function longBreak(x){
	clearInterval(c)
	$('#pomodoro>ul li button').css({'background':'none'});
	$('#pomodoro>ul li:nth-child(3) button').css({'background':'var(--cor1)'});
	$('#pomodoro .contador #cont').text((x>=10?x:"0"+x)+':00');
}
function contador(){
	var d = new Date();
	console.log(d);
	var y = document.getElementById('cont').innerText;
	let x = y.substring(0,y.indexOf(":"));
	let z = y.substring(y.indexOf(":")+1,y.length);
	d.setMinutes(x);
	d.setSeconds(z);
	console.log(d.getTime());
	
	c = setInterval(function(){
		if(d.getMinutes()<= 0 && d.getSeconds()==0){
			clearInterval(c);
			$('#pomodoro>ul li:nth-child(3) button').css({'background':'var(--cor1)'});
		}else{
			d.setSeconds(d.getSeconds()-1);
			$('#pomodoro .contador #cont').text((d.getMinutes()>=10?d.getMinutes():"0"+d.getMinutes())+':'+(d.getSeconds()>=10?d.getSeconds():'0'+d.getSeconds()));
		}
	}, 1000);
}
function ctrl(a){
	clearInterval(c);
	var y = document.getElementById('cont').innerText;
	let x = y.substring(0,y.indexOf(":"));
	var d = new Date();
	d.setMinutes(x);
	d.setMinutes(d.getMinutes(x)+a);
	$('#pomodoro .contador #cont').text((d.getMinutes()>=10?d.getMinutes():"0"+d.getMinutes())+':00');
}
