//SCELTA DELL'EMAIL





//GIOCO DEI DADI

//generiamo randomicamente un numero da 1 a 6 per il giocatore e il computer

let playerDice1 = Math.round (Math.random () *6);
let cpuDice1 = Math.round (Math.random () *6);


console.log(playerDice1, cpuDice1);

//diamo un'immagine al dado che uscirà
const firstDiceImage = 'img/dice' + playerDice1 + '.png'
const secondDiceImage = 'img/dice' + cpuDice1 + '.png'

document.querySelectorAll('img')[0].setAttribute ('src', firstDiceImage); 
document.querySelectorAll('img')[1].setAttribute ('src', secondDiceImage); 

if (playerDice1 > cpuDice1) {
  document.querySelector ('.winner').innerHTML = 'The Winner is Player1. Congratulation!';
}

else if (playerDice1 < cpuDice1) {
  document.querySelector ('.winner').innerHTML = 'The Winner is King Dice. Pathetic!';
}

else if (playerDice1 = cpuDice1) {
  document.querySelector ('.winner').innerHTML = 'Draw? Is Possible?';
}




 