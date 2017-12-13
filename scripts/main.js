console.log("connected");

$(document).ready( function (){

//player constructor function
	function Player(id, leftCoordinate, topCoordinate) {					
		this.id = id;
		this.left = leftCoordinate;
		this.top = topCoordinate;
	}

	// uses constructor function to create players Rick and Morty
	var Rick = new Player('Rick', 0, 0);
	// console.log(Rick);
	var Morty = new Player('Morty', 0, 0);
	// console.log(Morty);
	
	//creates a div element for Rick and styles it with the top and left coordinates 
	$('.container').append('<div class="Rick" style="top:' + Rick.top + '; left:' + Rick.left + ';"></div>');
	var rickCoord = $('.Rick').position();
	// console.log(rickCoord);

	$('.container').append('<div class="Morty" style="top:' + Morty.top + '; left:' + Morty.left + ';"></div>');
	var mortyCoord = $('.Morty').position();
	// console.log(mortyCoord);

	//player1 movement
	$(document).keydown( function(move){
		if (move.keyCode == 74) {
			$('.Rick').animate( {
				left: '-=10'
			}, -200);
			rickCoord = $('.Rick').position();
			checkForCollision();
			// console.log(rickCoord);
		}
		if (move.keyCode == 73) {
			$('.Rick').animate( {
				top: '-=10'
			}, -200);
			rickCoord = $('.Rick').position();
			checkForCollision();
			// console.log(rickCoord);
		}
		if (move.keyCode == 76) {
			// console.log(39);
			$('.Rick').animate( {
				left: '+=10'
			}, -200);
			rickCoord = $('.Rick').position();
			checkForCollision();
			// console.log(rickCoord);
		}
		if (move.keyCode == 75) {
			// console.log(40);
			$('.Rick').animate( {
				top: '+=10'
			}, -200);
			rickCoord = $('.Rick').position();
			checkForCollision();
			// console.log(rickCoord);
		}
		console.log(rickCoord);
	});

	//player2 movement
	$(document).keydown( function(move){
		if (move.keyCode == 65) {
			$('.Morty').animate( {
				left: '-=10'
			}, -200);
			mortyCoord = $('.Morty').position();
			checkForCollision();
			// console.log(mortyCoord);
		}
		if (move.keyCode == 87) {
			$('.Morty').animate( {
				top: '-=10'
			}, -200);
			mortyCoord = $('.Morty').position();
			checkForCollision();
			// console.log(mortyCoord);
		}
		if (move.keyCode == 68) {
			// console.log(39);
			$('.Morty').animate( {
				left: '+=10'
			}, -200);
			mortyCoord = $('.Morty').position();
			checkForCollision();
			// console.log(mortyCoord);
		}
		if (move.keyCode == 83) {
			// console.log(40);
			$('.Morty').animate( {
				top: '+=10'
			}, -200);
			mortyCoord = $('.Morty').position();
			checkForCollision();
			// console.log(mortyCoord);
		}
		// console.log(mortyCoord);
	});

	var target = $('<div class="target"></div>').appendTo($('#targetStart'));
	var targCoord = $('.target').offset();
	console.log(targCoord);

//stores all gameBoard spaces in "location"
	var location = $('.col-sm-1').toArray();										
	// console.log(location);

//creates portal element & attaches it to portalStart location & stores its coordinates in a variable
	var portal = $('<div class="portHitZone"><img id="wormHole" src="../images/portal.jpg" alt="portal"></div>').appendTo($('#portalStart'));		 
	var portCoord = $('.portHitZone').offset();
	// console.log(portCoord);
	//sets the portal to move to a new location at designated intervals and updates its coordinates
	// setInterval( function () {portal.appendTo(location[Math.floor((Math.random() * 100) + 1)]);
	// 	portCoord = $('.portHitZone').offset();
	// 	// console.log(portCoord);
	// }, 1000);
	
function checkForCollision () {
	if (
		('rickCoord.left' > 'targCoord.left') &&
		('rickCoord.left' < ('targCoord.left' + 'target.width')) &&
		('rickCoord.top' > 'targCoord.top') &&
		('rickCoord.top' < ('targCoord.top + target.height'))
		) {
			alert('hit!');
			target.appendTo(location[Math.floor((Math.random() * 100) + 1)]);
	}
	if (
		(mortyCoord.left > targCoord.left) &&
		(mortyCoord.left < (targCoord.left + target.width)) &&
		(mortyCoord.top > targCoord.top) &&
		(mortyCoord.top < (targCoord.top + target.height))
		) {
			alert('hit!');
			target.appendTo(location[Math.floor((Math.random() * 100) + 1)]);	
	}
}



	
});









