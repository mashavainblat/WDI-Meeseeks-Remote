$(function(){

	console.log("Connect Four");

	var $gameBoardColumn = $(".gameBoardColumn"); // get all columns by class name
	var $button = $(".topRowButton") // get coin dropping row
	var $unplayedSpans = $(".gameSpace").addClass("unplayed"); //make all inital pieces unplayed

	//to switch players
	var players = ['player1','player2'];
	var currentPlayerIndex = 0;

	function switchPlayers(){
		if(currentPlayerIndex === 0){
			currentPlayerIndex = 1;
		} else {
			currentPlayerIndex = 0;
		}
	}

	// get all player1 and player2 objects by class
	var $player1 = $(".player1");
	var $player2 = $(".player2");

	//to restart game
	var $clearBoard = $("button");
	console.log($clearBoard)

	$clearBoard.click(function(){
		location.reload();
	});

	// when row indicator button is clicked
	// get x and y value of played space
	$button.click(function(event){
		var x = $(this).parent().attr("id"); // COLUMN
		var y = getNextAvailableYCoordinateInColumn(x); //get y value based on played position within x/row
		
		//if there's a winner, end game
		if(hasWinner(x, y)) celebrate();

		//if no winner, switch players and continue playing
		else switchPlayers();

		//console.log($gameBoardColumn.children());
		// function to get y value based on x
		function getNextAvailableYCoordinateInColumn(row){
			//loop through children of current row
			for (var i = $gameBoardColumn.eq(row).children().length-1; i>0; i--){
				// $gameBoardColumn.eq(row).children().eq(i);

				//current square = children's index of currently clicked row's index
				$currentSquare = $gameBoardColumn.eq(row).children().eq(i);

				// if piece is played, return y value
				if ($currentSquare.hasClass("played")){
					console.log("yes");

				//if not played, make played:
				//replace unplayed class with played
				} else{
					console.log("no")
					$currentSquare.removeClass("unplayed");
					$currentSquare.addClass("played");
					//add class of current player
					$currentSquare.addClass(players[currentPlayerIndex]);
					console.log("The current player is: " + players[currentPlayerIndex])
					
					// console.log("the current row 'x' index is: " + x);
					// i is y value
					return i-1;
					// break;
				} // ends if/else
			} //ends for loop
		} // ends getNextAvailableYCoordinateInColumn(row);
		
		
		function celebrate(){
			alert("WINNER is " + players[currentPlayerIndex]);
		}

		//check if theres a winner
		function hasWinner (row, col){
			//change to integers otherwise values act as concatenated strings
			x = parseInt(x);
			y = parseInt(y);
		console.log("X/ROW: " + x + " Y/COLUMN: " + y );
	
		//re state players by class because objects have increased after switchPlayer()
		// $player1 = $(".player1");
		// $player2 = $(".player2");
		$player = $("." + players[currentPlayerIndex]);

		//
		//console.log($player1.length);
		//get objects of current player
		//get all pieces
		//console.log($player1);

		//object acts as array so i can get amount of objects using length
		for (var i = 0; i < $player.length; i++){
			var $currentX = $player.eq(i).data("x");
			var $currentY = $player.eq(i).data("y");

			console.log("currentX = " + $currentX + "\tcurrentY=" + $currentY + "\trow=" + row + "\tcol=" + col);
			console.log($currentY);
			

			// if ( piece at x and y &&
			// 	piece at x+1 and y &&
			// 	piece at x+2 and y &&
			// 	piece at x+3 and y){
			// 	winner!
			// }

			if ( isHorizontalWinner() || isVerticalWinner() || isDiagonalWinner() ){
				return true			
			} else return false;
				
			

			function hasPiece(x, y){
				
				if($("." + players[currentPlayerIndex] + "[data-x='" + x + "'][data-y='" + y + "'] ").length == 1){
					console.log("Player 1 has piece at (" + x +"," + y + ")")
					return true;
				} else {
					console.log("Player 1 does not have piece at (" + x +"," + y + ")")
					return false;
				}
			}	

			function isHorizontalWinner(){
				if ( 
						(
							hasPiece(x-1, y) &&
							hasPiece(x-2, y) &&
						 	hasPiece(x-3, y) 
						 )
						 ||
						 (
						 	hasPiece(x+1, y) &&
						 	hasPiece(x+2, y) &&
						 	hasPiece(x+3, y)
					 	)
					) 
				{

					console.log("Horizontal winner. Y=" + y);
					return true;
				}
				else return false;
			} //ends isHoritzontalWinner();

			function isVerticalWinner(){
				if ( 
						(
							hasPiece(x, y-1) &&
							hasPiece(x, y-2) &&
						 	hasPiece(x, y-3) 
						 )
						 ||
						 (
						 	hasPiece(x, y+1) &&
						 	hasPiece(x, y+2) &&
						 	hasPiece(x, y+3)
					 	)
					) 
				{
					console.log("Vertical winner");	
					return true;
				}
				else return false;
			}// ends isVeritcalWinner()

			function isDiagonalWinner(){
				if ( 
						(
							hasPiece(x-1, y-1) &&
							hasPiece(x-2, y-2) &&
						 	hasPiece(x-3, y-3) 
						 )
					)	
					{
						console.log("the player is " + players[currentPlayerIndex] + ". Case 1");
						return true;
					} //ends if statement

				else if(

							(
								hasPiece(x+1, y+1) &&
							 	hasPiece(x+2, y+2) &&
							 	hasPiece(x+3, y+3)
							)
						
						)
					{
						console.log("the player is " + players[currentPlayerIndex] + ". Case 1");
						return true;
					} //ends else if

				else if(

							(
								hasPiece(x-1, y+1) &&
								hasPiece(x-2, y+2) &&
							 	hasPiece(x-3, y+3) 
							)
						
						)
					{
						console.log("the player is " + players[currentPlayerIndex] + ". Case 1");
						return true;
					} //ends else if

				else if(

							(
								hasPiece(x+1, y-1) &&
							 	hasPiece(x+2, y-2) &&
							 	hasPiece(x+3, y-3)
							)
						
						)
					{
						console.log("the player is " + players[currentPlayerIndex] + ". Case 1");
						return true;
					} //ends else if

				else {	

						return false;
					}
				
				
			}// ends isDiagonalWinner()

		} //ends for loop

		} //ends declareWinner()
		

	}); // end button on click

}); //ends window onload function







