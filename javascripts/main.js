console.log("testing main.js");

var clearAll= document.getElementById('clear');
var output= document.getElementById('output');
var input=document.getElementById('input');

output.addEventListener('click', function(event){
	Chatty.deleteFromDom(event);
});

	input.addEventListener("keyup", function(event){
	var key = event.keyCode;
	if (key === 13) {
	Chatty.inputChange('output', input.value);
	input.value="";
	}
});

clearAll.addEventListener('click', function(event){
	console.log('clear button responding');
	if(output.innerHTML== 0 || output2.innerHTML == 0){
		output.innerHTML="";
		console.log('is this working?');
	}

	console.log(output.innerHTML);
});


//**** AR - When the user clicks on the dark theme checkbox, change the background color of your application to a dark gray, and the font color for messages should be white(ish)... you pick.

var darkTheme = document.getElementById("darkTheme");
var largeText = document.getElementById("largeText");

var bodyStyle = document.getElementById("ar-bodyStyle");
var messageArea = document.getElementById("messageArea");

darkTheme.addEventListener("click", function() {
	var themeVal = darkTheme.value;
	if (themeVal == 1) {
		event.target.closest("body").classList.toggle("ar-bodyStyle");
	}
})

largeText.addEventListener("click", function() {
	var textVal = largeText.value;
	if (textVal == 2) {
		messageArea.classList.toggle("ar-fontSize");
	}
})

//**** AR


///adds message from input to output2 Div

function jsonMessage (messages){
	var divContent;
	var text= messages;
	for(var i=0; i< text.length; i++){
		divContent= "<span>"+ text[i].text+"</span>"+ "<button class='delete'>" + 'Delete' + "</button>"+"<br>";
		output.innerHTML+= divContent;
	}
}
Chatty.loadMessages(jsonMessage);
//Chatty.inputChange();
////testing out some stuf TL
//var holdClickedDiv;
//
//
//funcName.methodName();
//
//var clickedDeleteButton = document.getElementsByClassName("whateverClassNameis").addEventListener("click", deleteOutput);
//
//
//function deleteOutput () {
//    holdClickedDiv.event.currentTarget;
//    var removeButton =
//    for (var d = 0; 0 < holdMyVar.length; d++) {
//        holdMyVar
//    }
//}
//
//    CarLot.addStyle(holyCrapOnAStick, "red");
//
//function changeText () {
//    var holdMyCrap = holyCrapOnAStick.getElementsByTagName("p")[3];
//    console.log("what is this", holdMyCrap);
//    holdMyCrap.innerHTML = inputField.value;
