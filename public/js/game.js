var squares = [,,,,,,,,,];
var playerInputx = 'X';
var playerInput0 = '0';
var turn = playerInputx;
$('#player-turn').html("Player " + turn + "'s turn ");

$('.square').click(function (event) {
  var boxNumber = event.target.id;
  if(squares[boxNumber] == 'X' || squares[boxNumber] == '0'){
    return;
  }else{
    $('#' + boxNumber).html(turn);
    squares[boxNumber] = turn;
    $('#player-turn').html("Player " + turn + "'s turn ");
    if(turn == playerInputx)
      turn = playerInput0;
    else
      turn = playerInputx;
  }

  if(checkForX()){
    $('#notification').html("Player X Wins!");
    $('.square').addClass('disabled');
  }else if(checkFor0()){
    $('#notification').html("Player 0 Wins!");
    $('.square').addClass('disabled');
  }else if(full()){
    $('#notification').html("Draw!");
    $('.square').addClass('disabled');
  }else
    return;
});
// all the possible cases when X can win
function checkForX() { //checks if X has won yet
  var playerXwin = false; //assuming player X hasn't won yet
  if (squares[1] == 'X' && squares[2] == 'X' && squares[3] == 'X') {
    playerXwin = true;
  }
	else if(squares[4] == 'X' && squares[5] == 'X' && squares[6] == 'X'){
		playerXwin = true;
	}
	else if(squares[7] == 'X' && squares[8] == 'X' && squares[9] == 'X'){
		playerXwin = true;
	}
	else if(squares[1] == 'X' && squares[4] == 'X' && squares[7] == 'X'){
		playerXwin= true;
	}
	else if(squares[2] == 'X' && squares[5] == 'X' && squares[8] == 'X'){
		playerXwin= true;
	}
	else if(squares[3] == 'X' && squares[6] == 'X' && squares[9] == 'X'){
		playerXwin= true;
	}
	else if(squares[1] == 'X' && squares[5] == 'X' && squares[9] == 'X'){
		playerXwin= true;
	}
	else if(squares[3] == 'X' && squares[5] == 'X' && squares[7] == 'X'){
		playerXwin= true;
	}
	return playerXwin;// returns whether player X has won or not
}

function checkFor0(){ //checks if 0 has won yet
	var player0win = false; //assuming player 0 hasn't won yet
	//all the possible cases when 0 can win
	if(squares[1] == '0' && squares[2] == '0' && squares[3] == '0'){
		player0win = true;
	}
	else if(squares[4] == '0' && squares[5] == '0' && squares[6] == '0'){
		player0win = true;
	}
	else if(squares[7] == '0' && squares[8] == '0' && squares[9] == '0'){
		player0win = true;
	}
	else if(squares[1] == '0' && squares[4] == '0' && squares[7] == '0'){
		player0win= true;
	}
	else if(squares[2] == '0' && squares[5] == '0' && squares[8] == '0'){
		player0win= true;
	}
	else if(squares[3] == '0' && squares[6] == '0' && squares[9] == '0'){
		player0win= true;
	}
	else if(squares[1] == '0' && squares[5] == '0' && squares[9] == '0'){
		player0win= true;
	}
	else if(squares[3] == '0' && squares[5] == '0' && squares[7] == '0'){
		player0win= true;
	}
	return player0win;// returns whether player 0 has won or not
}

function full(){ // checks if the board is full or not
	var boardFull = true; //assuming the board is full with X's and 0's
	for(var i =1; i<10; i++){ // loop to check every single square's input
		if(squares[i] != 'X' && squares[i] != '0'){ //checking squares 0-10 for X's and 0's
			boardFull = false; // if a square has neither X or 0 the board is not full
			break; // gets out of the loop if the board isn't full
		}
	}
	return boardFull; // returns whether the board is full or not
}
