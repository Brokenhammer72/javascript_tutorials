const button = document.querySelector('.color');
const body = document.querySelector('body');
const colors = ['yellow','red','green','#3b5998'];

button.addEventListener('click', changeColor);

function changeColor(){
	var R = Math.floor(Math.random() * 250);
	var G = Math.floor(Math.random() * 250);
	var B = Math.floor(Math.random() * 250);

	body.style.background = "rgb(" + R + ","+ G +" , "+ B +")";
	document.getElementById("value").innerHTML = R + " "+ G + " "+ B;
}