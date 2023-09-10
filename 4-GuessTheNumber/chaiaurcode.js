//console.log(parseInt(Math.random()*10+1))
let randomnum = parseInt(Math.random()*10+1);

const submit = document.querySelector('#subt');
const usrInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const reamining = document.querySelector('.lastResult');

const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

let prevGuess = []
let numGuess = 1

let playGame = true 

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(usrInput.value);
    validateGuess(guess);
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert(`Plese enter valid method `)
  }
  else if(guess < 1){
    alert(`Plese enter a number more than 1 !!`)
  }else if( guess > 100){
    alert(`Plese enter a number less than 100 !!`)
  }else{
    prevGuess.push(guess);
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game Over . Random Number was ${randomnum}`)
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }

}

function checkGuess(guess){
   if(guess === randomnum){
     displayMessage(`You guessed it ryt !!`);
     endGame();
   }else if(guess < randomnum){
     displayMessage(`Number is Tooo low !!`)
   }
   else if(guess > randomnum){
    displayMessage(`Number is Tooo big !!`)
  }
}

function displayGuess(guess){
   usrInput.value =''
   guessSlot.innerHTML += `${guess}, `
   numGuess++;
   reamining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
  //intract with DOM
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
      const newgameBtn = document.querySelector('#newgame')
      newgameBtn.addEventListener('click',function(e){
        randomnum = parseInt(Math.random()*10+1)
        
        prevGuess=[]
        numGuess=1
        guessSlot.innerHTML=''
        reamining.innerHTML=`11 - ${numGuess}`
        usrInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true
      })
}

function endGame(){
    usrInput.value=''
    usrInput.setAttribute('disabled','');
    p.classList.add('button')
    p.innerHTML='<h2 id="newGame">Start new Game</span>'
    startOver.appendChild(p)
    playGame=false
    newGame()
}
