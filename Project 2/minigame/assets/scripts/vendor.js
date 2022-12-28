const player1Health = document.getElementById("player1-healthbar");
const player2Health = document.getElementById("player2-healthbar");

const player1HealthIndicator = document.getElementById("player1-health--indicator");
const player2HealthIndicator = document.getElementById("player2-health--indicator");

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

const resetGame = () => {
   player1Health.value = 100;
   player1Health.max = 100;
   player2Health.value = 100;
   player2Health.max = 100;

   player1Cash.textContent = 0;
   player2Cash.textContent = 0;

   player1Score.textContent = 0;
   player2Score.textContent = 0;
}

const dealDamage = damage => {
    const dealtDamage = Math.random() * damage;
    return dealtDamage;
}

const randomHeal = value => {
    const healValue = Math.random() * value;
    return healValue;
}