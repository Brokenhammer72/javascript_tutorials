window.onload = () => {
	console.log('helloworld');
	let screen = document.querySelector('.screen');
	let buttons = document.querySelectorAll('.numbers');
	let clear = document.querySelector('.btn-clear');
	let equal = document.querySelector('.btn-equal');

	buttons.forEach(function(button){
		button.addEventListener('click', function(e){
			let value = e.target.dataset.num;
			screen.value += value;
			console.log(value);
		})	
	})


	equal.addEventListener('click' , function(){
		if(screen.value === ''){
			alert('enter some values');
		}else{
			let answer = eval(screen.value);
			screen.value = answer;
		}
	})

	clear.addEventListener('click' , function(){
		screen.value = '';
	})
}