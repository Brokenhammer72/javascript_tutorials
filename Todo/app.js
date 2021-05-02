window.onload =() => {
	let form = document.querySelector('#main')
	let item = document.querySelector('#List')
	let submit = document.querySelector('#submit-btn')
	form.addEventListener('submit' , additem);
	item.addEventListener('click' , removeitem);
}

function additem(e) {
	console.log('hello')
	e.preventDefault();
	let newItem = document.querySelector('#field').value;

	if(newItem.trim() == ' ' || newItem.trim() == null)	{
		return false;
	}
	document.querySelector('#field').value == ' ';
	
	let li = document.createElement('li'); 

	let edit_btn = document.createElement('button');
	edit_btn.style.backgroundColor = 'green';
	edit_btn.style.border = 'none';
	edit_btn.style.borderRadius = '2px';
	edit_btn.style.fontSize = '20px';
	edit_btn.appendChild(document.createTextNode('edit'))

	let delete_btn = document.createElement('button');
	delete_btn.style.backgroundColor = 'red';
	delete_btn.style.borderRadius = '2px';
	delete_btn.style.border = 'none';
	delete_btn.appendChild(document.createTextNode('Delete'))

	li.appendChild(document.createTextNode(newItem));
	li.appendChild(delete_btn);
	li.appendChild(edit_btn);

	let item = document.querySelector('#List')
	item.appendChild(li)
}


function togglebutton(ref,btnid){
	console.log('hellow');
	document.querySelector('#submit-btn').disabled = false;
}
