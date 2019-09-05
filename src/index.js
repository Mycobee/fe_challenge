import $ from 'jquery'

$(document).ready(() => {
		fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word', {
  		method: 'Get'
		})
		.then(response => response.json())
		.catch(error => console.error('Error:', error))
		.then(response => {
					var top_header = document.createElement("H3")			
					var count_header = document.createElement("H5")			
   				top_header.innerHTML = "Top Word: " + Object.keys(response.word)[0]
   				count_header.innerHTML = "Word Count: " + Object.values(response.word)[0]
					document.getElementById("top-word-box").appendChild(top_header)
					document.getElementById("top-word-box").appendChild(count_header)
		});

		document.getElementById("word-button").addEventListener("click", function(){ 
			var wordInput = document.getElementById("word-input").value;
			var url = 'https://wordwatch-api.herokuapp.com/api/v1/words'
			var jsonBody = { word: { value: wordInput}}
			fetch(url, {
      	method: 'POST',
      	headers: {
      	    'Content-Type': 'application/json',
      	},
				body: JSON.stringify(jsonBody),
    	})
    	.then(response => console.log(response));
		});
});
