console.log("connected");

$(document).ready( function (){
	
	function Player(id, topCoordinate, bottomCoordinate) {					//creates player objects
		this.id = id;
		this.top = topCoordinate;
		this.bottom = bottomCoordinate;
	}

	var Rick = new Player("Rick", 0, 0);
	console.log(Rick);





	
});