const playerScore = document.getElementById("player-score");
const drawScore = document.getElementById("draw-score"); 
const computerScore = document.getElementById("computer-score"); 
const playerImg = document.getElementById("player-img");
const computerImg = document.getElementById("computer-img");
const gameDiv = document.querySelector(".game");
const startDiv = document.querySelector(".start-screen");
const startButton = document.getElementById("game-start");
const reset = document.getElementById("reset");
const check = document.getElementById("check-who-won");

let drawCounter = 0;
let computerCounter = 0;
let playerCounter = 0;
let checkIfShaking = false;

const ob = {
    1: 'img/rock.png',
    2: 'img/paper.png',
    3: 'img/scissors.png'
};

function init(){
    computerChoise();
    startAndReset();
}

const getRand = () => {
    return Math.floor(Math.random() * 3 + 1);
}

const computerChoise = () => {
    const btns = document.querySelectorAll(".button-style");
    for(let i = 0; i < btns.length; i++){
        btns[i].addEventListener('click', () => {

            if(checkIfShaking === false){
                shakin();
                checkIfShaking = true;

            setTimeout(() => {
                checkIfShaking = false;
                let rand = getRand();
                computerImg.src = ob[rand];
                if(btns[i].textContent === 'ROCK'){
                    playerImg.src = ob[1];
                    if(rand === 1){
                        check.innerHTML = "Draw!";
                        drawScore.innerHTML = drawCounter += 1;
                    }else if(rand === 2){
                        check.innerHTML = "Computer Won!";
                        computerScore.innerHTML = computerCounter += 1;
                    }else if(rand === 3){
                        check.innerHTML = "Player Won!";
                        playerScore.innerHTML = playerCounter += 1;
                    }
                }else if(btns[i].innerHTML === "PAPER"){
                    playerImg.src = ob[2];
                    if(rand === 1){
                        check.innerHTML = "Player Won!";
                        playerScore.innerHTML = playerCounter += 1;
                    }else if(rand === 2){
                        check.innerHTML = "Draw!";
                        drawScore.innerHTML = drawCounter += 1;
                    }else if(rand === 3){
                        check.innerHTML = "Computer Won!";
                        computerScore.innerHTML = computerCounter += 1;
                    }
                }else if(btns[i].innerHTML === "SCISSORS"){
                    playerImg.src = ob[3];
                    if(rand === 1){
                        check.innerHTML = "Computer Won!";
                        computerScore.innerHTML = computerCounter += 1;
                    }else if(rand === 2){
                        check.innerHTML = "Player Won!";
                        playerScore.innerHTML = playerCounter += 1;
                    }else if(rand === 3){
                        check.innerHTML = "Draw!";
                        drawScore.innerHTML = drawCounter += 1;
                    }
                }
            }, 2000)
            }
        });
    };
    
};

const startAndReset = () => {
    startButton.addEventListener('click', () => {
        startDiv.style.display = "none";
        gameDiv.style.display = "flex";
    });
    reset.addEventListener('click', () => {
        gameDiv.style.display = "none";
        startDiv.style.display = "flex";
        equalToZero();
    });
};

const equalToZero = () => {
    drawCounter = 0;
    computerCounter = 0;
    playerCounter = 0;
    playerScore.innerHTML = 0;
    computerScore.innerHTML = 0;
    drawScore.innerHTML = 0;
    check.innerHTML = 'Choose An Option';
}

const shakin = () => {
    computerImg.src = ob[1];
    playerImg.src = ob[1];
    playerImg.classList.add('shakePlayer');
    
    computerImg.classList.add('shakeComputer');
    
    setTimeout(() => {
        playerImg.classList.remove('shakePlayer');
        computerImg.classList.remove('shakeComputer');
    },2000)
}

init();
