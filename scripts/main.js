console.log("connected");

$(document).ready( function (){

//Winning Function
	$(document).keydown( function(win) {
	if (win.keyCode == 32){
		$('.winningModal').css('display', 'block');
	}
});

$('#menuButton').click( function (){

});

$('#replayButton').click( function(){
	location.reload();
});

//player constructor function
	function Player(id, leftCoordinate, topCoordinate) {					
		this.id = id;
		this.left = leftCoordinate;
		this.top = topCoordinate;
	}

//function to set up single player mode
$('#singlePlayer').click( function() {
	var Rick = new Player('Rick', 0, 0);
	$('#rickStart').append('<div class="Rick" style="top:' + Rick.top + '; left:' + Rick.left + ';"><img class="rickPlayer" src="../images/rickPlayer.png" alt="" /></div>');
	var rickCoord = $('.Rick').offset();
	$('.modal').css('display', 'none');
});

//function to set up two player mode
$('#twoPlayer').click( function() {
		var Rick = new Player('Rick', 0, 0);
	$('#rickStart').append('<div class="Rick" style="top:' + Rick.top + '; left:' + Rick.left + ';"><img class="rickPlayer" src="../images/rickPlayer.png" alt="" /></div>');
	var rickCoord = $('.Rick').offset();
	$('.modal').css('display', 'none');
	var Morty = new Player('Morty', 0, 0);
	$('#mortyStart').append('<div class="Morty" style="top:' + Morty.top + '; left:' + Morty.left + ';"><img class="mortyPlayer" src="../images/mortyPlayer.png" alt="" /></div>');
	var mortyCoord = $('.Morty').offset();
	$('.modal').css('display', 'none');
});

//initializes player scores at 0
	var rickPoints = 0;
	$('#rickTotalScore').html('Rick: ' + rickPoints);
	var mortyPoints = 0;
	$('#mortyTotalScore').html('Morty: ' + mortyPoints);

createPortals();

//player1 movement
	$(document).keydown( function(move){
		if (move.keyCode == 74) {
			$('.Rick').animate( {
				left: '-=10'
			}, -200);
			rickCoord = $('.Rick').offset();
			checkForCollision();
			portalCollision();
			// console.log(rickCoord);
		}
		if (move.keyCode == 73) {
			$('.Rick').animate( {
				top: '-=10'
			}, -200);
			rickCoord = $('.Rick').offset();
			checkForCollision();
			portalCollision();
			// console.log(rickCoord);
		}
		if (move.keyCode == 76) {
			// console.log(39);
			$('.Rick').animate( {
				left: '+=10'
			}, -200);
			rickCoord = $('.Rick').offset();
			checkForCollision();
			portalCollision();
			// console.log(rickCoord);
		}
		if (move.keyCode == 75) {
			// console.log(40);
			$('.Rick').animate( {
				top: '+=10'
			}, -200);
			rickCoord = $('.Rick').offset();
			checkForCollision();
			portalCollision();
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
			mortyCoord = $('.Morty').offset();
			checkForCollision();
			portalCollision();
			// console.log(mortyCoord);
		}
		if (move.keyCode == 87) {
			$('.Morty').animate( {
				top: '-=10'
			}, -200);
			mortyCoord = $('.Morty').offset();
			checkForCollision();
			portalCollision();
			// console.log(mortyCoord);
		}
		if (move.keyCode == 68) {
			// console.log(39);
			$('.Morty').animate( {
				left: '+=10'
			}, -200);
			mortyCoord = $('.Morty').offset();
			checkForCollision();
			portalCollision();
			// console.log(mortyCoord);
		}
		if (move.keyCode == 83) {
			// console.log(40);
			$('.Morty').animate( {
				top: '+=10'
			}, -200);
			mortyCoord = $('.Morty').offset();
			checkForCollision();
			portalCollision();
			// console.log(mortyCoord);
		}
		// console.log(mortyCoord);
	});



//sets the target area for attaches it to the gameboard
	var target = $('<div class="target"><img id="crystals" src="../images/kalaxiancrystal.png" alt="" /></div>').appendTo($('#targetStart'));
	var targCoord = $('.target').offset();
	console.log(targCoord);

//stores all gameBoard spaces in "location"
	var location = $('.col-sm-1').toArray();										
	// console.log(location);

//creates portal element & attaches it to portalStart location & stores its coordinates in a variable
	// function Portal(id){
	// 	this.id = id;
	// }

	function createPortals (rickPoints, mortyPoints) {
		if (rickPoints + mortyPoints === 0) {
			var portal = $('<div class="portHitZone"><img class="wormHole" src="../images/portal.gif" alt="portal"></div>').appendTo($('#portalStart'));	
		}
	}


//stores portal coordinates in portCoord
	var portCoord = portal.offset();
	console.log(portCoord);

//sets the portal to move to a new location at designated intervals and updates its coordinates
	setInterval( function () {portal.appendTo(location[Math.floor((Math.random() * 100) + 1)]);
		portCoord = $('.portHitZone').offset();
		// console.log(portCoord);
	}, 2000);

	


	// var portal = $('<div class="portHitZone"><img class="wormHole" src="../images/portal.gif" alt="portal"></div>').appendTo($('#portalStart'));	
	




//function to check for payer collision with the target	
function checkForCollision () {
	if (
		(rickCoord.left > targCoord.left) &&
		(rickCoord.left < (targCoord.left + target.width())) &&
		(rickCoord.top > targCoord.top) &&
		(rickCoord.top < (targCoord.top + target.height()))
		) {
			target.appendTo(location[Math.floor((Math.random() * 100) + 1)]);
			targCoord = $('.target').offset();
			rickPoints = rickPoints + 1;
			$('#rickTotalScore').html('Rick: ' + rickPoints);
	}
	if (
		(mortyCoord.left > targCoord.left) &&
		(mortyCoord.left < (targCoord.left + target.width())) &&
		(mortyCoord.top > targCoord.top) &&
		(mortyCoord.top < (targCoord.top + target.height()))
		) {
			target.appendTo(location[Math.floor((Math.random() * 100) + 1)]);
			targCoord = $('.target').offset();	
			mortyPoints = mortyPoints + 1;
			$('#mortyTotalScore').html('Morty: ' + mortyPoints);
	}
}


//function to check for collision with portal
function portalCollision () {
	if (
		(rickCoord.left > portCoord.left) &&
		(rickCoord.left < (portCoord.left + portal.width())) &&
		(rickCoord.top > portCoord.top) &&
		(rickCoord.top < (portCoord.top + portal.width()))
		) {
			$('.Rick').appendTo(location[Math.floor((Math.random() * 40) + 1)]);		//updates rick score on scoreboard
			rickCoord = $('.Rick').offset();
	}

	if (
		(mortyCoord.left > portCoord.left) &&
		(mortyCoord.left < (portCoord.left + portal.width())) &&
		(mortyCoord.top > portCoord.top) &&
		(mortyCoord.top < (portCoord.top + portal.width()))
		) {
			$('.Morty').appendTo(location[Math.floor((Math.random() * 40) + 1)]);		//updates morty score on scoreboard;
			mortyCoord = $('.Morty').offset();
	}


}



	
});









