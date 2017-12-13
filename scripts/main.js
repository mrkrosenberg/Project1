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
	console.log(Rick);
	var Morty = new Player('Morty', 0, 0);
	console.log(Morty);
	
	//creates a div element for Rick and styles it with the top and left coordinates 
	$('.container').append('<div class="Rick" style="top:' + Rick.top + '; left:' + Rick.left + ';"></div>');
	var rickCoord = $('.Rick').position();
	console.log(rickCoord);

	$('.container').append('<div class="Morty" style="top:' + Morty.top + '; left:' + Morty.left + ';"></div>');
	var mortyCoord = $('.Morty').position();
	console.log(mortyCoord);

	//player1 movement
	$(document).keydown( function(move){
		if (move.keyCode == 37) {
			$('.Rick').animate( {
				left: '-=10'
			}, -200);
			rickCoord = $('.Rick').position();
			console.log(rickCoord);
		}
		if (move.keyCode == 38) {
			$('.Rick').animate( {
				top: '-=10'
			}, -200);
			rickCoord = $('.Rick').position();
			console.log(rickCoord);
		}
		if (move.keyCode == 39) {
			// console.log(39);
			$('.Rick').animate( {
				left: '+=10'
			}, -200);
			rickCoord = $('.Rick').position();
			console.log(rickCoord);
		}
		if (move.keyCode == 40) {
			// console.log(40);
			$('.Rick').animate( {
				top: '+=10'
			}, -200);
			rickCoord = $('.Rick').position();
			console.log(rickCoord);
		}
	});

	//player2 movement
	$(document).keydown( function(move){
		if (move.keyCode == 65) {
			$('.Morty').animate( {
				left: '-=10'
			}, -200);
			mortyCoord = $('.Morty').position();
			console.log(mortyCoord);
		}
		if (move.keyCode == 87) {
			$('.Morty').animate( {
				top: '-=10'
			}, -200);
			mortyCoord = $('.Morty').position();
			console.log(mortyCoord);
		}
		if (move.keyCode == 68) {
			// console.log(39);
			$('.Morty').animate( {
				left: '+=10'
			}, -200);
			mortyCoord = $('.Morty').position();
			console.log(mortyCoord);
		}
		if (move.keyCode == 83) {
			// console.log(40);
			$('.Morty').animate( {
				top: '+=10'
			}, -200);
			mortyCoord = $('.Morty').position();
			console.log(mortyCoord);
		}
	});

//stores all gameBoard spaces in "location"
	var location = $('.col-sm-1').toArray();										
	console.log(location);

//creates portal element & attaches it to portalStart location
	// var portal = $('<div class="portHitZone" id="wormHitZone"><img id="wormHole" src="../images/portal.jpg" alt="portal" /></div>').appendTo($('#portalStart'));		 
	// var portCoord = $('.portHitZone').offset();
	// console.log(portCoord);
	// setInterval( function () {portal.appendTo(location[Math.floor((Math.random() * 100) + 1)]);
	// 	portCoord = $('.portHitZone').offset();
	// 	console.log(portCoord);
	// }, 1000);
	
// function checkForCollision () {
// 	if () {

// 	}
// };



	
});