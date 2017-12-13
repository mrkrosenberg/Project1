console.log("connected");

$(document).ready( function (){

//player constructor function
	function Player(id, bottomCoordinate, leftCoordinate) {					
		this.id = id;
		this.bottom = bottomCoordinate;
		this.left = leftCoordinate; 
	}


	var Rick = new Player('Rick', 10, 10);
	console.log(Rick);

	$('#rickStart').append('<div class="Rick" style="bottom:' + Rick.bottom + '; left:' + Rick.left + ';"></div>');

//stores all gameBoard spaces in "location"
	var location = $('.col-sm-1').toArray();										
	console.log(location);


//creates portal element & attaches it to portalStart location
	var portal = $('<div id="wormHitZone"><img id="wormHole" src="../images/portal.jpg" alt="portal" /></div>').appendTo($('#portalStart'));		 
	setInterval( function () {portal.appendTo(location[Math.floor((Math.random() * 100) + 1)]);}, 1000);
	console.log(portal);




	
});