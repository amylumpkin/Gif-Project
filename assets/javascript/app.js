$(document).ready(function() {

var apiKey = "RPaK9Z4sSu8wS60vAUOVtsfL2gAI98u0";	//Will need to use these GIPHY parameters: q, limit, rating

//create starting array
var topics = ["Tom Waits", "Cher", "Harrison Ford", "Barack Obama", "Will Smith", "Donald Trump", "Marilyn Monroe"];

function requestGifs(query) {
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + query + "&apiKey=" + apiKey + "&limit=10";	

	//ajax GET request to queryURL - needs to be called when a button is clicked
	$.ajax({
	 url: queryURL,
	 method: "GET"		
	})

	//data has been received - storing data inside an object called 'response'
	.done(function(response) {
	console.log(queryURL);
	console.log(response);
	});
};

//function to create initial buttons
function renderButtons(){
	$("#buttons-go-here").empty(); //so there won't be repeat buttons
	//loop through array
	for (var i = 0; i < topics.length; i++){
		//dynamically create buttons for all items in array
		var a = $("<button>");
		//add class
		a.addClass("topics");
		//add attribute & value of array item at index i
		a.attr("data-name", topics[i]);
		//button's text
		a.text(topics[i]);
		//inserting buttons into HTML
		$("#buttons-go-here").append(a);
	}

}

renderButtons();

//when a  button is clicked - this is getting GIFs-----------need to call the ajax query here
$("body").on("click",".topics",function(){
	
	requestGifs();

	
	console.log("you clicked a button");
});


//adding new buttons
$("#add-button").submit(function(event){ 

    //grab html from what is typed into box
	var textBox = $("#input").val().trim();

	//on submit, jquery to create new btn w/text from box, then append to where other btns are


//?????????????????????????????
//?????     requestGifs()

	renderButtons();    //??????????

});
});




