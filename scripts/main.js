console.log("connected");

$(document).ready( function (){
		

	function gameTimer (time) {
		$('.time').html(time);
		setInterval( function(){
			if (time > 0) {
					time = time -= 1;
					$('.time').html(time);
				} 
					else  {
					$('.winningModal').css('display', 'block');
				} 
			}, 1000);
	}

	// To Do: add more portals at intervals to make game more chaotic at the end


	// setTimeout( function (){
	// 	var portal2 = $('<div class="portHitZone"><img class="wormHole" src="../images/portal.gif" alt="portal"></div>').appendTo($('#portalStart'));	
	// 	var portCoord2 = $('.portHitZone').offset();
	// 	console.log(portCoord2);
	// //sets the portal to move to a new location at designated intervals and updates its coordinates
	// 	setInterval( function () {portal2.appendTo(location[Math.floor((Math.random() * 100) + 1)]);
	// 		portCoord2 = $('.portHitZone').offset();
	// 	}, 2000);
	// 	var portal3 = $('<div class="portHitZone"><img class="wormHole" src="../images/portal.gif" alt="portal"></div>').appendTo($('#portalStart'));	
	// 	var portCoord3 = $('.portHitZone').offset();
	// 	console.log(portCoord3);
	// //sets the portal to move to a new location at designated intervals and updates its coordinates
	// 	setInterval( function () {portal3.appendTo(location[Math.floor((Math.random() * 100) + 1)]);
	// 		portCoord3 = $('.portHitZone').offset();
	// 	}, 2000);

	// }, 100000);


	//functionality of buttons once game is over
	$('#menuButton').click( function (){
		window.location = '../index.html';
	});

	$('#replayButton').click( function(){

		window.location = '../html/game.html';

		
	});

	//player constructor function
		function Player(id, leftCoordinate, topCoordinate) {					
			this.id = id;
			this.left = leftCoordinate;
			this.top = topCoordinate;
		}

		var rickCoord;
		var mortyCoord;

	$('#singlePlayer').click( function() {
		var Rick = new Player('Rick', 0, 0);
		$('#rickStart').append('<div class="Rick" style="top:' + Rick.top + '; left:' + Rick.left + ';"><img class="rickPlayer" src="../images/rickPlayer.png" alt="" /></div>');
		rickCoord = $('.Rick').offset();
		$('.modal').css('display', 'none');
		gameTimer(60);
		$('#mortyTotalScore').css('display', 'none');
		$('#mortyScoreTitle').css('display', 'none');
	});

	$('#twoPlayer').click( function() {
		var Rick = new Player('Rick', 0, 0);
		$('#rickStart').append('<div class="Rick" style="top:' + Rick.top + '; left:' + Rick.left + ';"><img class="rickPlayer" src="../images/rickPlayer.png" alt="" /></div>');
		rickCoord = $('.Rick').offset();
		var Morty = new Player('Morty', 0, 0);
		$('#mortyStart').append('<div class="Morty" style="top:' + Morty.top + '; left:' + Morty.left + ';"><img class="mortyPlayer" src="../images/mortyPlayer.png" alt="" /></div>');
		mortyCoord = $('.Morty').offset();
		$('.modal').css('display', 'none');
		gameTimer(60);
	});



	// console.log(rickCoord, mortyCoord);

	//player1 movement
		$(document).keydown( function(move){
			if (move.keyCode === 65) {
				$('.Rick').animate( {
					left: '-=25'
				}, -200);
				rickCoord = $('.Rick').offset();
				rickKrystalCollision();
				rickPortalCollision();
				// console.log(rickCoord);
			}
			if (move.keyCode === 87) {
				$('.Rick').animate( {
					top: '-=25'
				}, -200);
				rickCoord = $('.Rick').offset();
				rickKrystalCollision();
				rickPortalCollision();
				// console.log(rickCoord);
			}
			if (move.keyCode === 68) {
				$('.Rick').animate( {
					left: '+=25'
				}, -200);
				rickCoord = $('.Rick').offset();
				rickKrystalCollision();
				rickPortalCollision();
				// console.log(rickCoord);
			}
			if (move.keyCode === 83) {
				$('.Rick').animate( {
					top: '+=25'
				}, -200);
				rickCoord = $('.Rick').offset();
				rickKrystalCollision();
				rickPortalCollision();
				// console.log(rickCoord);
			}
		});

	//player2 movement
		$(document).keydown( function(move){
			if (move.keyCode === 74) {
				$('.Morty').animate( {
					left: '-=25'
				}, -200);
				mortyCoord = $('.Morty').offset();
				mortyKrystalCollision();
				mortyPortalCollision();
				// console.log(mortyCoord);
			}
			if (move.keyCode === 73) {
				$('.Morty').animate( {
					top: '-=25'
				}, -200);
				mortyCoord = $('.Morty').offset();
				mortyKrystalCollision();
				mortyPortalCollision();
				// console.log(mortyCoord);
			}
			if (move.keyCode === 76) {
				$('.Morty').animate( {
					left: '+=25'
				}, -200);
				mortyCoord = $('.Morty').offset();
				mortyKrystalCollision();
				mortyPortalCollision();
				// console.log(mortyCoord);
			}
			if (move.keyCode === 75) {
				$('.Morty').animate( {
					top: '+=25'
				}, -200);
				mortyCoord = $('.Morty').offset();
				mortyKrystalCollision();
				mortyPortalCollision();
				// console.log(mortyCoord);
			}
		});

	//sets the target area and attaches it to the gameboard
		var target = $('<div class="target"><img id="crystals" src="../images/kalaxiancrystal.png" alt="" /></div>').appendTo($('#targetStart'));
		var targCoord = $('.target').offset();

	//stores all gameBoard spaces in "location"
		var location = $('.col-sm-1').toArray();										

	//creates portal element & attaches it to portalStart location & stores its coordinates in a variable
		var portal = $('<div class="portHitZone"><img class="wormHole" src="../images/portal.gif" alt="portal"></div>').appendTo($('#portalStart'));	
		var portCoord = $('.portHitZone').offset();

	//sets the portal to move to a new location at designated intervals and updates its coordinates
		setInterval( function () {portal.appendTo(location[Math.floor((Math.random() * 100) + 1)]);
			portCoord = $('.portHitZone').offset();
		}, 2000);

		var rickPoints = 0;
		$('#rickTotalScore').html(rickPoints);
		var mortyPoints = 0;
		$('#mortyTotalScore').html(mortyPoints);


//functions to check for player collision with the target	
	function rickKrystalCollision () {
		if (
			(rickCoord.left > targCoord.left) &&
			(rickCoord.left < (targCoord.left + $('.target').width())) &&
			(rickCoord.top > targCoord.top) &&
			(rickCoord.top < (targCoord.top + $('.target').height()))
			) {
				target.appendTo(location[Math.floor((Math.random() * 100) + 1)]);
				targCoord = $('.target').offset();
				rickPoints = rickPoints + 1;
				$('#rickTotalScore').html(rickPoints);
		}
	}

	function mortyKrystalCollision() {
		if (
			(mortyCoord.left > targCoord.left) &&
			(mortyCoord.left < (targCoord.left + target.width())) &&
			(mortyCoord.top > targCoord.top) &&
			(mortyCoord.top < (targCoord.top + target.height()))
		) {
			target.appendTo(location[Math.floor((Math.random() * 100) + 1)]);
			targCoord = $('.target').offset();
			mortyPoints = mortyPoints + 1;
			$('#mortyTotalScore').html(mortyPoints);
		}
	}


//functions to check for collision with portal
	function rickPortalCollision () {
		if (
			(rickCoord.left > portCoord.left) &&
			(rickCoord.left < (portCoord.left + portal.width())) &&
			(rickCoord.top > portCoord.top) &&
			(rickCoord.top < (portCoord.top + portal.width()))
			) {
				$('.Rick').appendTo(location[Math.floor((Math.random() * 100) + 1)]);		//moves rick player to another location
				rickCoord = $('.Rick').offset();
		}
	}

	function mortyPortalCollision() {
		if (
			(mortyCoord.left > portCoord.left) &&
			(mortyCoord.left < (portCoord.left + portal.width())) &&
			(mortyCoord.top > portCoord.top) &&
			(mortyCoord.top < (portCoord.top + portal.width()))
		) {
			$('.Morty').appendTo(location[Math.floor((Math.random() * 100) + 1)]); //moves morty player to another location
			mortyCoord = $('.Morty').offset();
		}
	}
	
});










