// // make gameboard (7 x 6)
// // make array for columns
// // make array for rows
// // those rows make x,y coordinate to determine z coordinate(slope)
// // (slope = change in x/change in y)

// // player 1 selects column to drop first chip
// // chip must drop to bottom most available "div" or "li"
// // switch player and chip color
// // player 2 selects new column or same column to drop chip
// // chip must drop to bottom most available space
// // conditionals: if (4 adjacent x, y) of player = winner
// // if (x, 4 adjacent y) of one player = winner
// // if slope = 1 in 4 places, one player = winner
// // loop to check such values and push into an array

// // if player 1 (x, y), (x, y+1), (x, y+2), (x, y+3) push into an array = winner
// // if player 1 (x, y), (x+1, y), (x+2, y), x+3,y) push into an array = winner






// //$(function(){


// 	console.log("Connect Four");

// 	// ========================================
// 	// ================ HEADER ================
// 	// ========================================

// 	// get input value for player1 and player2
// 	// input id="player1" && input id="player2"

// 	// var $input = $("#input-box");
// 	// // console.log($input)

// 	// var $enterButton  = $(".enter");
// 	// // console.log($enterButton);

// 	// // var $playerName = $(".input-box").val();

// 	// $enterButton.click(function(){
// 	// 	var $playerName = $("#input-box").val();
// 	// 	console.log($playerName);
// 	// })



// 	// ========================================
// 	// ================  GAME  ================
// 	// ========================================

// 	// get Columns to make arrays rather than individuallt code them.

// 	// var $gameBoardColumn = $(".gameBoardColumn");
// 	// // console.log($gameBoardColumn.length); // shows HOW MANY columns there are
// 	// var $gameSpace = $(".gameSpace");
// 	// console.log($gameSpace.length);

// 	// HOW TO ACCESS game spaces within column vs all columns
// 	// console.log($gameBoardColumn.eq(0).children());
// 	// console.log($gameBoardColumn.eq(0).children().length);
	
// 	//want to put $gameSpace 's pushed into an array to create a column
	
// 	// var column1 = [];
// 	// var column2 = [];
// 	// var column3 = [];
// 	// var column4 = [];
// 	// var column5 = [];
// 	// var column6 = [];
// 	// var column7 = [];

// 	// // FOR COLUMN 1
// 	// for (var i = 0; i<$gameBoardColumn.eq(0).children().length; i++){
		
// 		// WHEN i<amount of children, get the each child!
// 		// var child = $gameBoardColumn.eq(0).children("span")[i];
// 		//console.log(child.innerHTML);
// 		// console.log($gameBoardColumn.eq(0).children("span")[i]);
		
// 		// column1.push(child);
		
// 		// console.log($gameBoardColumn.eq(0).children().innerHTML)
// 		// column1.push($gameBoardColumn.eq(0).children(i));

// 	// }; // ENDS first for loop
	
// 	// FOR COLUMN 2
// 	// for (var i = 0; i<$gameBoardColumn.eq(1).children().length; i++){
// 	// 	var child = $gameBoardColumn.eq(1).children("span")[i];
// 	// 	column2.push(child);
// 	// }; //ends column 2 array loop

// 	// // FOR COLUMN 3
// 	// for (var i = 0; i<$gameBoardColumn.eq(2).children().length; i++){
// 	// 	var child = $gameBoardColumn.eq(2).children("span")[i];
// 	// 	column3.push(child);
// 	// }; //ends column 3 array loop	


// 	// HOW CAN I MAKE MULTIPLE ARRAYS WITHOUT WRITING IT? nested looping?

// 	// var gameBoard = [];

// 	// WANT THE CHILDREN OF $gameBoardColumn = column
// 	// for (var i = 1; i< $gameBoardColumn.length; i++){
		
// 	// 	var $column = $("#" + i); //each column by ID
// 	// 	console.log($column);
// 		// console.log($column[i]);
// 		// console.log($column[0]);
// 		// console.log($column[0].innerHTML);

// 		// console.log($column.children());
// 		// console.log($column.children().innerHTML);
// 		// var $children = $column.children();
// 		// console.log($children);
// 		// console.log($children.innerHTML);
// 		// var $children = $column.children(i);
// 		// console.log($children[i].innerHTML);

// 	// } // closes array making loop

// 	// console.log(column3[0].innerHTML);


// 	// ==================================================
// 	// ==================================================
// 	// ==================================================
// 	// ==================================================
// 	// ==================================================
// 	// ================    START OVER    ================
// 	// ==================================================
// 	// ==================================================
// 	// ==================================================
// 	// ==================================================
// 	// ==================================================


// 	// var gameBoard = [];

// 	// var columns = [];

// 	// var rows = [];

// 	// var $gameBoardColumn = $(".gameBoardColumn");
// 	// console.log($(".gameBoardColumn")[0]);
// 	// console.log($(".gameBoardColumn")[0].innerHTML);
// 	// console.log($gameBoardColumn.eq(0));
// 	// console.log($gameBoardColumn.eq(0).innerHTML);
// 	//console.log($gameBoardColumn[0].innerHTML)

// 	//IF $(".gameBoardColumn")[0].innerHTML) == $gameBoardColumn.eq(0).innerHTML
// 	//WHY IS THE LATTER RETURNING UNDEFINED?


// 	// HOW TO GET CHILDREN OF THAT INDIV COLUMN??
// 	// console.log($gameBoardColumn)
// 	// console.log($gameBoardColumn.children()); //PRINTS ALL CHILDREN


// //drop piece
// //check winner
// //if no winner, switch player drop new piece
// //if 4 pieces have same x or y value, winner


// 	// //ACCESSES ALL COLUMNS
// 	// for (var i = 0; i<$gameBoardColumn.length;i++){

// 	// 	var columnContent = [];
// 	// 	columns.push(columnContent)
// 	// 	//console.log("This is the " + i + "th column: " + $(".gameBoardColumn")[i].innerHTML)
// 	// 	// console.log("This is the " + i + "th column: " + $gameBoardColumn[i].innerHTML)
// 	// 	//var $column = $(".gameBoardColumn").eq(i);
// 	// 	//console.log($column.children())
// 	// 	// console.log($column.children().length)
// 	// 	//var $children = $column.children(); //ALL CHILDREN OF COLUMN/ARRAY
// 	// 	// console.log($children)
// 	// 	//console.log($(".gameBoardColumn").eq(i).children().length);
// 	// 	// console.log($children.length)
// 	// 	for (var j = 1; j<$(".gameBoardColumn").eq(i).children().length; j++){
			
// 	// 		var $child = ("#" + j);
// 	// 		//console.log($child);
// 	// 		// ==============================
// 	// 		// EVERY CHILD OF EVERY COLUMN!!!
// 	// 		// ==============================

// 	// 		//EACH COLUMNS CHILD NEEDS TO BE PUT INTO ITS OWN ARRAY?? YES
// 	// 		columnContent.push($child)
// 	// 	} // ends child for loop

// 	// 	console.log($gameBoardColumn.eq(i).children());


		

// 	// 	// console.log($(".gameBoardColumn").eq(i).children());
// 	// 	// console.log($column);
// 	// 	// console.log($(".gameBoardColumn").eq(i).length)
// 	// 	//console.log($column.children());

// 	// }; // ends column push foor loop

// 	//console.log(columns)

// 	// console.log($gameBoardColumn.children());
// 	// ACCESSING INDICES OF COLUMNS TO MAKE ROWS
// 	// get number of children from index[1] NOT no of columns for rows
// 	// for (var i=1; )

// // console.log($(".gameBoardColumn").eq(0).children().length)
// // console.log($(".gameBoardColumn").eq(0).children().length)


// ;




// // console.log($gameBoardColumn.eq(4))



	
// 	// var playerTurn = "player1";
// 	// function chipColor(obj){
// 	// 	if (playerTurn == "player1"){
// 	// 		obj.style.background = "Red";
// 	// 	} else {
// 	// 		obj.style.backgroundColor = "Blue";
// 	// 	}
// 	// }
	
// 	// changeColor(x, y);
// 	// // alert("Clicked on column " + $(this).parent().attr("id"));

// 	// //HAVE MY X WANT LOWEST Y
// 	// function changeColor(x, y){
// 	// 	$gameBoardColumn.eq(x).children("span").eq(y).css("backgroundColor", "yellow");
// 	// }
	
// 	// function changePlayer(){
// 	// 		if ($currentSquare.hasClass("player1")){
// 	// 			$currentSquare.removeClass("player1");
// 	// 			$currentSquare.addClass("player2");
// 	// 		} else {
// 	// 			$currentSquare.removeClass("player2");
// 	// 			$currentSquare.addClass("player1");
// 	// 		}
// 	// 	};

// // $currentSquare.toggleClass("played player1");



// var $gameBoardColumn = $(".gameBoardColumn");
// var $button = $(".topRowButton")
// var $unplayedSpans = $(".gameSpace").addClass("unplayed");
// console.log($unplayedSpans.length);

// // function makeRed(elem){
// // 	elem.removeClass("played");
// // 	elem.addClass("player1")
// // }

// // function makeYellow(elem){
// // 	elem.removeClass("played")
// // 	elem.addClass("player2")
// // }

// // function changePlayer(){
// // 					// if ($currentSquare.hasClass("played")){
// // 					// 	$currentSquare.removeClass("played");
// // 					// 	$currentSquare.addClass("player1");
// // 					// } else if($currentSquare.hasClass("player1")){
// // 					// 	$currentSquare.removeClass("player1");
// // 					// 	$currentSquare.addClass("played");
// // 					// }
// // 					$currentSquare.removeClass("played");
// // 					$currentSquare.addClass("player1");

// // 					if ($currentSquare.hasClass("player1")){
// // 						$currentSquare.removeClass("player1");
// // 						$currentSquare.addClass("played");
// // 					}
// // 				};

// var players = ['player1','player2'];
// var a = 0;

// function switchPlayers(){
// 	if(a === 0){
// 		a = 1;
// 	} else {
// 		a = 0;
// 	}
// }

// $button.click(function(event){
// 	var x = $(this).parent().attr("id"); // COLUMN
// 	var y = getNextAvailableYCoordinateInColumn(x); //function execution of function with parameter(row) // ROW

// 	//console.log($gameBoardColumn.children());
// 	function getNextAvailableYCoordinateInColumn(row){
// 		for (var i = $gameBoardColumn.eq(row).children().length-1; i>0; i--){
// 			// $gameBoardColumn.eq(row).children().eq(i);
// 			$currentSquare = $gameBoardColumn.eq(row).children().eq(i);


// 			if ($currentSquare.hasClass("played")){
// 				console.log("yes");

// 				//if it is played: switch player

// 				// $currentSquare.removeClass("played");
// 				// // $currentSquare.addClass("player1");
// 				//$currentSquare.toggleClass("player1, player2")
				
// 				// console.log($unplayedSpans.length);
// 				// console.log($unplayedSpans.length-1);
// 				//changePlayer();
				
// 				// $currentSquare.toggleClass("player1, player2");
// 				//changePlayer();
// 			} else{
// 				console.log("no")
// 				$currentSquare.removeClass("unplayed");
// 				$currentSquare.addClass("played");
// 				$currentSquare.addClass(players[a]);
// 				switchPlayers();

// 				//changePlayer(); //not sure if should be in if/else statement or outside of it?
// 				break;
// 			}
// 			// return y value
// 		}
// 	} // ends getNextAvailableYCoordinateInColumn(row);

// 	// function dropingCoin (row, column){
// 	// 	changeplayer(){

// 	// 	}
// 	// }


// }); // end button on click


// // http://jsfiddle.net/f7hpoyfj/1/  <-- to change player based on current column button


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
		var y = getNextAvailableYCoordinateInColumn(x); //function execution of function with parameter(row) // ROW
		
		//if there's a winner, end game
		if(hasWinner(x, y)) celebrate();

		//if no winner, switch players and continue playing
		else switchPlayers();
		
		//console.log($gameBoardColumn.children());
		function getNextAvailableYCoordinateInColumn(row){
			for (var i = $gameBoardColumn.eq(row).children().length-1; i>0; i--){
				// $gameBoardColumn.eq(row).children().eq(i);
				$currentSquare = $gameBoardColumn.eq(row).children().eq(i);

				if ($currentSquare.hasClass("played")){
					console.log("yes");

				} else{
					console.log("no")
					$currentSquare.removeClass("unplayed");
					$currentSquare.addClass("played");
					$currentSquare.addClass(players[currentPlayerIndex]);
					console.log("The current player is: " + players[currentPlayerIndex])
					
					// console.log("the current row 'x' index is: " + x);
					return i-1;
					// break;
				}
			}
		} // ends getNextAvailableYCoordinateInColumn(row);
		
		
		function celebrate(){
			alert("WINNER")
		}


		function hasWinner (row, col){
			x = parseInt(x);
			y = parseInt(y);
		console.log("X/ROW: " + x + " Y/COLUMN: " + y );
	
		
		$player1 = $(".player1");
		$player2 = $(".player2");

		//
		//console.log($player1.length);
		//get objects of current player
		//get all pieces
		//console.log($player1);
		for (var i = 0; i < $player1.length; i++){
			var $currentX = $player1.eq(i).data("x");
			var $currentY = $player1.eq(i).data("y");

			console.log("currentX = " + $currentX + "\tcurrentY=" + $currentY + "\trow=" + row + "\tcol=" + col);
			console.log($currentY);
			

			// if ( piece at x and y &&
			// 	piece at x+1 and y &&
			// 	piece at x+2 and y &&
			// 	piece at x+3 and y){
			// 	winner!
			// }

			if ( isHorizontalWinner() || isVerticalWinner()){
				return true			
			} else return false;
				
			

			function hasPiece(x, y){
				if($(".player1[data-x='" + x + "'][data-y='" + y + "'] ").length == 1){
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
						 ||
						 (
						 	hasPiece(x+1, y+1) &&
						 	hasPiece(x+2, y+2) &&
						 	hasPiece(x+3, y+3)
					 	)
						 ||
						(
							hasPiece(x-1, y+1) &&
							hasPiece(x-2, y+2) &&
						 	hasPiece(x-3, y+3) 
						 )
						 ||
						 (
						 	hasPiece(x+1, y-1) &&
						 	hasPiece(x+2, y-2) &&
						 	hasPiece(x+3, y-3)
					 	)
					) 
				{
					return true;
				}
				else return false;
			}// ends isDiagonalWinner()

		} //ends for loop

		} //ends declareWinner()
		

	}); // end button on click

}); //ends window onload function













// //}); //ends window onload function







