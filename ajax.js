var btn = document.getElementById( "btn" );
var main = document.getElementById( "main" );


btn.addEventListener( "click", function() {
	var myRequest = new XMLHttpRequest();
	myRequest.open( "GET", "https://learnwebcode.github.io/json-example/animals-1.json" );

	myRequest.onload = function() {
		//Now it will be shown in our browser as json file
		var myData = JSON.parse( myRequest.responseText );
		show( myData )
	}
	myRequest.send();
} );


function show( param ) {
	var elem = "";

	for ( i = 0; i < param.length; i++ ) {
		elem += "<p>" + param[ i ].name + "</p>";
	}

	main.insertAdjacentHTML( "beforeend", elem );
}