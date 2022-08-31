const body = document.querySelector('body')
const again = document.querySelector('.button_cs1');
const guessBtn = document.querySelector('#button_cs2');
const guess = document.querySelector('#guess');
const hint = document.querySelector('.hint_cs');
const number = document.querySelector('.number_cs');
const score = document.querySelector('.score_cs');
const hScore = document.querySelector('.hsocre_cs');
let luckyNumber = Math.trunc(Math.random() * 20) + 1;

guessBtn.addEventListener('click',()=>{
    let scores = Number(score.textContent);
    if(scores > 0){
        if(!guess.value){
            hint.textContent='Please Chosse between 1 and 20';
        }else if(guess.value == luckyNumber){
            hint.textContent = 'You are winner...';
            body.style.background='rgb(27, 233, 27)';
            number.style.width = '14rem';
            number.textContent = luckyNumber;
            if(hScore.textContent < scores){
                hScore.textContent = scores;
            }
        }else if(guess.value > luckyNumber){
            hint.textContent = 'Too high number...';
            scores-- ;
            score.textContent = scores;
        }else if(guess.value < luckyNumber){
            hint.textContent = 'Too low number...';
            scores-- ;
            score.textContent = scores;
        }
    }else{
        hint.textContent='You lose the game...'
        body.style.background='rgb(235, 15, 15)';
        scores = Number(score.textContent);
    }
   
})

again.addEventListener('click',()=>{
    hint.textContent='Start guessing';
    score.textContent=20;
    number.textContent = '?';
    body.style.background='white';
    number.style.width = '7rem';
    guess.value='';
    luckyNumber = Math.trunc(Math.random() * 20) + 1;
})