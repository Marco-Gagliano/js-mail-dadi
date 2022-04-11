//SCELTA DELL'EMAIL

alert ("Salve, benvenuto al Gioco dei Dadi di Re Dado");
alert ("Sarai in grado di sfidare la fortuna di Re Dado e riuscire a batterlo?");
alert ("Se hai fortuna, coraggio e talento al gioco dei dadi, sei nel posto giusto");

alert("Molto bene. Si incomincia. Per prima cosa...");

const emailCheck = document.getElementById('confirm');

const emailArray = [
  'mihai.badia@gmail.com',
  'riccardo.becattini@gmail.com',
  'manuel.benini@gmail.com',
  'giancarlo.croce@gmail.com',
  'silvia.dugato@gmail.com',
  'carlo.duminuco@gmail.com',
  'francesco.ercoli@gmail.com',
  'marco.gagliano@gmail.com',
  'manuela.ienuso@gmail.com',
  'michele.iliescu@gmail.com',
  'renato.lami@gmail.com',
  'salvatore.olivieri@gmail.com',
  'agostino.piquè@gmail.com',
  'antonio.pollo@gmail.com',
  'amanjit.singh@gmail.com',
  'sebastiano.visco@gmail.com'];

const emailVerified = document.getElementById('checked-email');
const emailNotVerified = document.getElementById('denied-email');
  
emailCheck.addEventListener('click' , function(){
  
const userEmail = document.getElementById('written-email').value;

let register = false;

for (let i = 0; i < emailArray.length; i++){
  
  if(emailArray[i] === userEmail){
    register = true;
  }
  
}
  
if(register){
  emailVerified.innerHTML = 'L\'email inserita è nella lista. Puoi giocare, e sperare di vincere';
  emailVerified.classList.add('checked');
  emailNotVerified.classList.remove('denied');
  emailNotVerified.innerHTML = ' '}
    
  else{
  emailNotVerified.innerHTML = 'L\'email inserita non è nella lista. vietato l\'accesso';
  emailNotVerified.classList.add('denied');
  emailVerified.classList.remove('checked');
  emailVerified.innerHTML = ' '
  }

})




//GIOCO DEI DADI

//generiamo randomicamente un numero da 1 a 6 per il giocatore e il computer
const dicePlay = document.getElementById('dice-game');

dicePlay.addEventListener('click', function(){ 

  let playerDice1 = Math.floor (Math.random () *6) + 1;
  let cpuDice1 = Math.floor (Math.random () *6) + 1;
  const firstDiceImage = 'img/dice' + playerDice1 + '.png';
  const secondDiceImage = 'img/dice' + cpuDice1 + '.png';

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
  
  //se il mio dado è uguale al cpu, pareggi
  else {
    document.querySelector ('.winner').innerHTML = 'Draw? Is Possible?';
  }
  
});



 