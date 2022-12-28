const PLAYER1_DAMAGE = 10;
const PLAYER2_DAMAGE = 10;

const PLAYER1_STRDAMAGE = 20;
const PLAYER2_STRDAMAGE = 20;

const DEFAULT_WIN = 100;

const ATTACK_LIGHT = 'LIGHT';
const ATTACK_STRONG = 'STRONG';

const GENERAL_PLAYER1_HEALTH = 100;
const GENERAL_PLAYER2_HEALTH = 100;

let healthPlayer1 = GENERAL_PLAYER1_HEALTH;
let healthPlayer2 = GENERAL_PLAYER2_HEALTH;

let player1Money = 0;
let player2Money = 0;

let scorePlayer1 = 0;
let scorePlayer2 = 0;

let TURN;

const PLAYER1 = 'Player 1';
const PLAYER2 = 'Player 2';


const initFirstRound = () => {
    const randomNr = Math.random(5) * 50;
    if(randomNr < 25) {
        TURN = PLAYER1;
        player1Avatar.style.border = '3px solid red'
    } else {
        TURN = PLAYER2;
        player2Avatar.style.border = '3px solid red'
    }
    player1HealthIndicator.textContent = 100;
    player2HealthIndicator.textContent = 100;
}
initFirstRound();

const changeTurn = () => {
    if(TURN === PLAYER1){
        player1Avatar.style.border = '3px solid white';
        player2Avatar.style.border = '3px solid red';
        TURN = PLAYER2;
    } else if(TURN === PLAYER2){
        player2Avatar.style.border = '3px solid white';
        player1Avatar.style.border = '3px solid red';
        TURN = PLAYER1;
    }
}

const checkWin = () => {
    if(healthPlayer1 <= 0 && healthPlayer2 > 0){
        alert(`${PLAYER2} Won !`);
        givePrize(PLAYER2);
        reset();
    }
    else if(healthPlayer2 <= 0 && healthPlayer1 > 0){
        alert(`${PLAYER1} Won !`);
        givePrize(PLAYER1);
        reset();
    }
    else if(healthPlayer1 <= 0 && healthPlayer2 > 0){
        alert('Draw');
        reset();
    }

    if(healthPlayer1 > 0 && healthPlayer2 > 0) changeTurn();

}

const givePrize =  player => {
    if(player === PLAYER1){
        scorePlayer1++;
        player1Money += scorePlayer1 * DEFAULT_WIN;
        if(player2Money !== 0) player2Money -= 100;
    }else if(player === PLAYER2){
        scorePlayer2++;
        player2Money += scorePlayer2 * DEFAULT_WIN;
        if(player1Money !== 0) player1Money -= 100;
    }
    player1Cash.textContent = player1Money;
    player2Cash.textContent = player2Money;
    player1Score.textContent = scorePlayer1;
    player2Score.textContent = scorePlayer2;
}

const reset = () => {
    healthPlayer1 = GENERAL_PLAYER1_HEALTH;
    healthPlayer2 = GENERAL_PLAYER2_HEALTH;
    player1Health.value = healthPlayer1;
    player2Health.value = healthPlayer2;
    player1HealthIndicator.textContent = 100;
    player2HealthIndicator.textContent = 100;
}

const damagePlayer = MODE => {
    if(healthPlayer1 <= 0 || healthPlayer2 <= 0) return;

    let damage;

    if(TURN === PLAYER1){
        if(MODE === ATTACK_LIGHT) damage = dealDamage(PLAYER1_DAMAGE);
        else if(MODE === ATTACK_STRONG) damage = dealDamage(PLAYER1_STRDAMAGE);
        healthPlayer2 -= damage;
        player2Health.value = healthPlayer2;
        if(healthPlayer2 > 0) player2HealthIndicator.textContent = ((healthPlayer2/GENERAL_PLAYER2_HEALTH) * 100).toFixed(2);
        else player2HealthIndicator.textContent = 0;
    }
    else if(TURN === PLAYER2){
        if(MODE === ATTACK_LIGHT) damage = dealDamage(PLAYER2_DAMAGE);
        else if(MODE === ATTACK_STRONG) damage = dealDamage(PLAYER2_STRDAMAGE);
        healthPlayer1 -= damage;
        player1Health.value = healthPlayer1;
        if(healthPlayer1 > 0) player1HealthIndicator.textContent = ((healthPlayer1/GENERAL_PLAYER1_HEALTH) * 100).toFixed(2);
        else player1HealthIndicator.textContent = 0;
    }
    checkWin();
}

const atkBtnHandler = () => damagePlayer(ATTACK_LIGHT);


const stratkBtnHandler = () => damagePlayer(ATTACK_STRONG)

atkBtn.addEventListener("click", atkBtnHandler);
stratkBtn.addEventListener("click", stratkBtnHandler);



