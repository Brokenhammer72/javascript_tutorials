newQuote()
function newQuote() {
	fetch('https://api.quotable.io/random')
		.then(response => {
			return response.json();
		})
		.then((data) =>{
			var quote = data.content;
			var author = data.author;
			var length = data.length; 
			if(length > 250){
				newQuote();
			}
			document.getElementById('quote-text').innerHTML= quote;
			document.getElementById('author-name').innerHTML= author;
		})
}
