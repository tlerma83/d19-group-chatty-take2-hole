console.log("testing load.js");

var Chatty = (function(){

	var messages = [];

	return {
		loadMessages: function (callBack){
			var loader = new XMLHttpRequest();
      		loader.open("GET", "messages.json");
      		loader.send();
      		loader.addEventListener("load", function (){
      			messages = JSON.parse(this.responseText);
      			invoke(messages);
      		});
		}

	}


})();