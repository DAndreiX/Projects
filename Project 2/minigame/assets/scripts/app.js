const PLAYER1_DAMAGE = 10;
const PLAYER2_DAMAGE = 10;

const PLAYER1_STRDAMAGE = 20;
const PLAYER2_STRDAMAGE = 20;

const DEFAULT_WIN = 100;

let healthPlayer1 = 100;
let healthPlayer2 = 100;

let player1Money = 0;
let player2Money = 0;

let scorePlayer1 = 0;
let scorePlayer2 = 0;

function changeTurn(){
    if(TURN === 'PLAYER1'){
        player1Avatar.style.outline = 'none';
        player2Avatar.style.outline = '3px solid red';
        TURN = 'PLAYER2';
    } else if(TURN === 'PLAYER2'){
        player2Avatar.style.outline = 'none';
        player1Avatar.style.outline = '3px solid red';
        TURN = 'PLAYER1';
    }
}

function checkWin(){
    if(healthPlayer1 <= 0 && healthPlayer2 > 0){
        alert('Player 2 Won !');
        givePrize('PLAYER2');
        reset();
    }
    else if(healthPlayer2 <= 0 && healthPlayer1 > 0){
        alert('Player 1 Won !');
        givePrize('PLAYER1');
        reset();
    }
    else if(healthPlayer1 <= 0 && healthPlayer2 > 0){
        alert('Draw');
        reset();
    }

    if(healthPlayer1 > 0 && healthPlayer2 > 0) changeTurn();

}

function givePrize(player){
    if(player === "PLAYER1"){
        scorePlayer1++;
        player1Score.textContent = scorePlayer1;
        player1Money += scorePlayer1 * DEFAULT_WIN;
        giveCash('PLAYER1', player1Money);
    }else if(player === "PLAYER2"){
        scorePlayer2++;
        player2Score.textContent = scorePlayer2;
        player2Money += scorePlayer2 * DEFAULT_WIN;
        giveCash('PLAYER2', player2Money);
    }
}

function reset(){
    healthPlayer1 = 100;
    healthPlayer2 = 100;
    player1Health.value = healthPlayer1;
    player2Health.value = healthPlayer2;
}

function damagePlayer(MODE){
    if(healthPlayer1 <= 0 || healthPlayer2 <= 0) return;

    let damage;

    if(TURN === 'PLAYER1'){
        if(MODE === 'LIGHT') damage = dealDamage(PLAYER1_DAMAGE);
        else if(MODE === 'STRONG') damage = dealDamage(PLAYER1_STRDAMAGE);
        healthPlayer2 -= damage;
        player2Health.value -= damage;
    }
    else if(TURN === 'PLAYER2'){
        if(MODE === 'LIGHT') damage = dealDamage(PLAYER2_DAMAGE);
        else if(MODE === 'STRONG') damage = dealDamage(PLAYER2_STRDAMAGE);
        healthPlayer1 -= damage;
        player1Health.value -= damage;
    }
    checkWin();
}

function atkBtnHandler(){
    damagePlayer("LIGHT");
}

function stratkBtnHandler(){
    damagePlayer("STRONG");
}

atkBtn.addEventListener("click", atkBtnHandler);
stratkBtn.addEventListener("click", stratkBtnHandler);