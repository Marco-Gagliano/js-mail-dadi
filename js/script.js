//SCELTA DELL'EMAIL





//GIOCO DEI DADI

//generiamo randomicamente un numero da 1 a 6 per il giocatore e il computer
const dicePlay = document.getElementById('dice-game');

dicePlay.addEventListener('click', function(){ 

let playerDice1 = Math.floor (Math.random () *6) + 1;
let cpuDice1 = Math.floor (Math.random () *6) + 1;
const firstDiceImage = 'img/dice' + playerDice1 + '.png'
const secondDiceImage = 'img/dice' + cpuDice1 + '.png'

console.log(playerDice1, cpuDice1);


 //diamo un'immagine al dado che uscirà

document.querySelectorAll('img')[0].setAttribute ('src', firstDiceImage); 
document.querySelectorAll('img')[1].setAttribute ('src', secondDiceImage); 

  // se il mio dado è superiore al cpu, vinci
  if (playerDice1 > cpuDice1) {
    document.querySelector ('.winner').innerHTML = 'The Winner is Player1. Congratulation!';
  }
  
  //se il mio dado è inferiore al cpu, perdi
  else if (playerDice1 < cpuDice1) {
    document.querySelector ('.winner').innerHTML = 'The Winner is King Dice. Pathetic!';
  }
  
  else {
    document.querySelector ('.winner').innerHTML = 'Draw? Is Possible?';
  }
  
});



 