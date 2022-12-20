const player1Health = document.getElementById("player1-healthbar");
const player2Health = document.getElementById("player2-healthbar");

const player1Cash = document.getElementById("player1-cash");
const player2Cash = document.getElementById("player2-cash");

const player1Score = document.getElementById("player1_score");
const player2Score = document.getElementById("player2_score");

const player1Avatar = document.getElementById("player1avatar");
const player2Avatar = document.getElementById("player2avatar");

const atkBtn = document.getElementById("atkbtn");
const stratkBtn = document.getElementById("stratkbtn");
const healBtn = document.getElementById("healbtn");
const logBtn = document.getElementById("logbtn");

let TURN;

function randomizeTurn(){
    const randomNr = Math.random(5) * 50;
    if(randomNr >= 0 && randomNr < 25) {
        TURN = 'PLAYER1';
        player1Avatar.style.outline = '5px solid red'
    } else if(randomNr >= 25 && randomNr <= 50) {
        TURN = 'PLAYER2';
        player2Avatar.style.outline = '5px solid red'
    }
}
randomizeTurn();

function resetGame(){
   player1Health.value = 100;
   player1Health.max = 100;
   player2Health.value = 100;
   player2Health.max = 100;

   player1Cash.textContent = 0;
   player2Cash.textContent = 0;

   player1Score.textContent = 0;
   player2Score.textContent = 0;
}

function dealDamage(damage){
    const dealtDamage = Math.random() * damage;
    return dealtDamage;
}

function randomHeal(value){
    const healValue = Math.random() * value;
    return healValue;
}

function setCash(player, value){
    switch(player){
        case 'PLAYER1':
            player1Cash.textContent = value;
            break;
        case 'PLAYER2':
            player2Cash.textContent = value;
            break; 
    }
}

function giveCash(player, value){
    switch(player){
        case 'PLAYER1':
            player1Cash.textContent = value;
            break;
        case 'PLAYER2':
            player2Cash.textContent = value;
            break; 
    }
}

function takeCash(player, value){
    switch(player){
        case 'PLAYER1':
            player1Cash.textContent -= value;
            break;
        case 'PLAYER2':
            player2Cash.textContent -= value;
            break; 
    }
}