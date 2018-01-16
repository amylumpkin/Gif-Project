$(document).ready() {


var apiKey = "RPaK9Z4sSu8wS60vAUOVtsfL2gAI98u0";	//Will need to use these GIPHY parameters: q, limit, rating

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=RPaK9Z4sSu8wS60vAUOVtsfL2gAI98u0";


/*
//ajax call to get the information
$.ajax({
	url: queryURL,
	method: "GET"
	console.log(queryURL);			?????????
})

//data has been received 
.done(function(response){
	console.log(response);
})
*/				
	
//create starting array
var folks = ["Tom Waits", "Cher", "Harrison Ford", "Barack Obama", "Will Smith", "Donald Trump", "Marilyn Monroe"];

//function to display buttons
function renderButtons(){
	$("#buttonsGoHere").empty(); //so there won't be repeat buttons
	//loop through array
	for (var i = 0; i < folks.length; i++){
		//dynamically create buttons for all items in array
		var a = $("<button>");
		//add class
		a.addClass("btn btn-primary");
		//add attribute & value of array item at index i
		a.attr("data-name", folks[i]);
		//button's text
		a.text(folks[i]);
		//inserting buttons into HTML
		$("#buttonsGoHere").append(a);
	}
}

//click function
$("#addButton").on("click", function(event){
	event.preventDefault();

    //grab html from what is typed into box
	var textBox = $("#input").val().trim();

    //add what is typed into box as item in array
    folks.push(folks);	

    //call render function
    renderButtons();
})







};

