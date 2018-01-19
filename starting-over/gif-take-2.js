
	$("button").on("click", function(){
		var x = $(this).data("search");
		console.log(x);

		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=RPaK9Z4sSu8wS60vAUOVtsfL2gAI98u0&limit=10"; 
		console.log(queryURL);

		$.ajax({url:queryURL, method: "GET"})
			.done(function(response){
				console.log(response);
				for (var i=0; i < response.data.length; i++){
					$("#gifs-go-here").prepend("<p>Rating: " + response.data[i].rating+"<p>");
					$("#gifs-go-here").prepend("<img src='" + response.data[i].images.downsized.url + "'>");
				}
				
			})
	})

