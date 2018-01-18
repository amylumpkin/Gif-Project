$(document).ready(function() {

var apiKey = "RPaK9Z4sSu8wS60vAUOVtsfL2gAI98u0";	//Will need to use these GIPHY parameters: q, limit, rating

//create starting array
var folks = ["Tom Waits", "Cher", "Harrison Ford", "Barack Obama", "Will Smith", "Donald Trump", "Marilyn Monroe"];

function requestGifs(query) {
var queryURL = $.get("http://api.giphy.com/v1/gifs/search?q=" + query + "&apiKey=" + apiKey + "&limit=5");	

	//ajax GET request to queryURL - needs to be called when a button is clicked
	$.ajax({
	 url: queryURL,
	 method: "GET"		
	})

	//data has been received - storing data inside an object called 'response'
	.done(function(response){
	console.log(queryURL);
	console.log(response);
	})
}

//function to create initial buttons
function renderButtons(){
	$("#buttonsGoHere").empty(); //so there won't be repeat buttons
	//loop through array
	for (var i = 0; i < folks.length; i++){
		//dynamically create buttons for all items in array
		var a = $("<button>");
		//add class
		a.addClass("folks");
		//add attribute & value of array item at index i
		a.attr("data-name", folks[i]);
		//button's text
		a.text(folks[i]);
		//inserting buttons into HTML
		$("#buttonsGoHere").append(a);
	}

}

renderButtons();

//when a  button is clicked
$("body").on("click",".btn",function(){
	//call the ajax search function here?
	requestGifs(this.id);
	event.preventDefault();
	//grab what is typed into box
	var textBox = $("#input").val().trim(); //trim gets rid of extra white space
	//add what is typed into the box as item in array
	folks.push(folks);
	//call render funtion?
	
	
	console.log("you clicked a button");
});


//adding new buttons
$("#addButton").on("click", function(event){
	event.preventDefault();

    //grab html from what is typed into box
	var textBox = $("#input").val().trim();

    //add what is typed into box as item in array
    folks.push(folks);	

    //call render function
    renderButtons();
    search(folks);


});
});




