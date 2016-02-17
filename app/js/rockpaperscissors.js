////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt("Lets Play! Choose rock, paper or scissors !");
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove){
        winner = 'Its a tie';
    }
    else if  (playerMove === 'rock' && computerMove === 'scissors'){
        winner = 'Player Wins!';
    }
    else if (playerMove === 'paper' && computerMove === 'rock'){
        winner = 'Player Wins!';
    }
    else if (playerMove === 'scissors' && computerMove === 'paper'){
        winner = 'Player Wins!';
    }
    else if  (playerMove === 'paper' && computerMove === 'scissors'){
        winner = 'Computer Wins!';
    }
    else if (playerMove === 'scissors' && computerMove === 'rock'){
        winner = 'Computer Wins!';
    }
    else if (playerMove === 'Rock' && computerMove === 'paper'){
        winner = 'Computer Wins!';
    }
    else {
     return 'Invalid!';   
    }
  console.log('Player chose ' + ' ' + playerMove + ' ' + ' while Computer chose ' + ' ' + computerMove);
  return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors! Who wins 5 times first is the winner!");
    var playerWins = 0;
    var computerWins = 0;
    var roundNum = 1;
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var winner = getWinner(playerMove,computerMove);
    
    
        while (playerWins < 5 && computerWins < 5) {
            
    if (winner === 'Player Wins!'){
        playerWins+=1;
        console.log('Player chose '+ playerMove + ' while Computer chose ' + computerMove +'. Player wins round ' + roundNum); 
    }

    else if (winner === 'Computer Wins!'){
        computerWins+=1;
        console.log('Player chose '+ playerMove + ' while Computer chose ' + computerMove + '. Computer wins round ' + roundNum);
    }
        
    else if (winner === 'Its a tie'){
        console.log('Player chose '+ playerMove + ' while Computer chose ' + computerMove + '. This is a tie');
    }   
    
    if (playerWins === 5) {
        console.log('Player is the winner!');
    }
  else if (computerWins === 5) {
        console.log('Computer is the winner!');
    }

      
    return ['The score is currently' + ' ' + playerWins, computerWins];
}}
