function clicked(){
	var name = document.getElementById("name").value;
	var password = document.getElementById('pass').value;
	if (name == 'amey' && password=='1234') {
		alert('login succesful');
		return false;
	}	
	else{
		alert('login failed');
	}
}