let randomNumber=parseInt(Math.random()*100+1);

const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessslot= document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const loworhi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevguess = []
let numGuess=1

let playgame=true;

if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        validateguess(guess)
    })
}

function validateguess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number.')
    }
    else if(guess<1){
        alert('Please enter a number more than 1.')
    }
    else if(guess>100){
        alert('Please enter a number less than 100.')
    }
    else{
        prevguess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over,Random number was ${randomNumber}.`)
            endgame()
        }
        else{
        displayGuess(guess)
        checkguess(guess)
    }
    }

}

function checkguess(guess){
    if(guess===randomNumber){
        displayMessage('You guessed it right')
    endgame()
    }
    else if(guess<randomNumber){
        displayMessage('Number is too low')
    }
    else if(guess>randomNumber){
        displayMessage('Number is too high.')
    }
}

function displayGuess(guess){
    userInput.value='';
    guessslot.innerHTML += `${guess}             `
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`


}

function displayMessage(message){
    loworhi.innerHTML=`<h2>${message}</h2>`

}

function endgame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('.button')
    p.innerHTML=`<h2 id="newgame">Start new Game</h2>`
    startOver.appendChild(p);
    playgame=false;
    newgame();

}

function newgame(){
    const newgamebutton=document.querySelector('#newgame')
    newgamebutton.addEventListener('click',function(e){
       randomNumber = parseInt(Math.random() * 100 + 1);
       prevguess=[]
       numGuess=1;
       guessslot.innerHTML=''
       remaining.innerHTML = `${11 - numGuess}`;
       userInput.removeAttribute('disabled')
       startOver.removeChild(p);

       playGame=true;

    })

}
