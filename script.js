function rockPaperScissors(){
    let player1 = prompt("Player 1, enter rock, paper, or scissors:").toLowerCase();
    let player2 = prompt("Player 2, enter rock, paper, or scissors:").toLowerCase();
    if(player1 === player2){
        alert('it is a tie!')
    } else {
        if(player1 === 'rock' && player2 === 'scissors'){
        alert('first player is the winner');
        } else if(player1 === 'scissors' && player2 === 'paper'){
            alert('first player is the winner')
        } else if(player1 === 'paper' && player2 === 'rock'){
            alert('first player is the winner')
        } else{
            alert('second player is the winner')
        }
    }
}
rockPaperScissors();