var isX=true;
function hello(id){
	var tex = document.getElementById(id).textContent;	
	if(tex==" "){
		if(isX){
			var button = document.getElementById(id);
			var s = document.getElementById('status');
			button.style.color = "red";
			button.innerHTML = 'X'; 
			s.style.color = "red";
			s.innerHTML = "X's turn"; 
			isX=false;
			Xwinner();
		}else{
			var button = document.getElementById(id);
			button.style.color = "blue";
			button.innerHTML = 'O'; 
			var s = document.getElementById('status');
			s.style.color = "blue";
			s.innerHTML = "O's turn"; 
			isX=true;
			Owinner();
		}			
	}
	isdraw();
}
function Owinner(){
	var b1 = document.getElementById('b1').textContent;
	var b2 = document.getElementById('b2').textContent;
	var b3 = document.getElementById('b3').textContent;
	var b4 = document.getElementById('b4').textContent;
	var b5 = document.getElementById('b5').textContent;
	var b6 = document.getElementById('b6').textContent;
	var b7 = document.getElementById('b7').textContent;
	var b8 = document.getElementById('b8').textContent;
	var b9 = document.getElementById('b9').textContent;

	if(b1==b3 && b2==b3 && b3=='O'){
		alert('Player O won');
		clearBoard();		
	}
	if(b4==b5 && b4==b6 && b5=='O'){
		alert('Player O won');
		clearBoard();
	}
	if(b7==b8 && b7==b9 && b7=='O'){
		alert('Player O won');
		clearBoard();
	}

 	if(b1==b5 && b1==b9 && b9=='O'){
 		alert('Player O won');
		clearBoard();
	}
	if(b3==b5 && b5==b7 && b7=='O'){
 		alert('Player O won');
		clearBoard();
	}
	if(b1==b4 && b4==b7 && b4=='O'){
		alert('Player O won');
		clearBoard();
	}
	if(b2==b5 && b5==b8 && b8=='O'){
		alert('Player O won');
		clearBoard();
	}
	if(b3==b6 && b6==b9 && b9=='O'){
		alert('Player O won');
		clearBoard();
	}
}
function Xwinner(){
	var b1 = document.getElementById('b1').textContent;
	var b2 = document.getElementById('b2').textContent;
	var b3 = document.getElementById('b3').textContent;
	var b4 = document.getElementById('b4').textContent;
	var b5 = document.getElementById('b5').textContent;
	var b6 = document.getElementById('b6').textContent;
	var b7 = document.getElementById('b7').textContent;
	var b8 = document.getElementById('b8').textContent;
	var b9 = document.getElementById('b9').textContent;

	if(b1==b3 && b2==b3 && b3=='X'){
		alert('Player x won');
		clearBoard();
	}
	if(b4==b5 && b4==b6 && b5=='X'){
		alert('Player x won');
		clearBoard();
	}
	if(b7==b8 && b7==b9 && b7=='X'){
		alert('Player x won');
		clearBoard();
	}

 	if(b1==b5 && b1==b9 && b9=='X'){
 		alert('Player X  won');
		clearBoard();
	}
	if(b3==b5 && b5==b7 && b7=='X'){
 		alert('Player x won');
		clearBoard();
	}
	if(b1==b4 && b4==b7 && b4=='X'){
		alert('Player x won');
		clearBoard();
	}
	if(b2==b5 && b5==b8 && b8=='X'){
		alert('Player x won');
		clearBoard();
	}
	if(b3==b6 && b6==b9 && b9=='X'){
		alert('Player x won');
		clearBoard();
	}
}
function isdraw(){
	flag=1;
	for(var i=1;i<=9;i++){
		var t='b' + i.toString();
		var tex = document.getElementById(t).textContent;
		if(tex == ' '){
			flag=0;
			break;
		}
	}
	if(flag==1){
		alert('ITS A TIE');
		clearBoard();
	}
}

function clearBoard(){
	for(var i=1;i<=9;i++){
		var t='b' + i.toString();
		document.getElementById(t).innerHTML = ' ';
	}
}