function showtime() {
	let date = new Date();
	let hour = date.getHours();
	let minutes = date.getMinutes();
	let second = date.getSeconds();

	hour = (hour < 10) ? '0' + hour : hour;
	minutes = (minutes < 10) ? '0' + minutes : minutes;
	second = (second < 10) ? '0' + second : second;
	let time = hour + ':' + minutes + ':'+second;
	document.querySelector('#time').innerText = time;
	setTimeout(showtime , 1000);
}
showtime();