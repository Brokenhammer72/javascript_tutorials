function increase() {
	let value = document.getElementById("counter").innerHTML;
	value =	parseInt(value) + 1
	if(value > 0){
		document.getElementById("counter").style.color = '#32cd32';
	}
	document.getElementById("counter").innerHTML = value;	
}

function decrease() {

	let value = document.getElementById("counter").innerHTML;
	value =	parseInt(value) - 1
	if(value < 0){
		document.getElementById("counter").style.color = 'red';
	}
	document.getElementById("counter").innerHTML = value;	
}

function reset() {

	document.getElementById("counter").style.color = 'grey';
	document.getElementById("counter").innerHTML = '0';	
}
