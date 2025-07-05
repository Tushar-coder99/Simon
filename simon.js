let userSeq = [];
let compSeq = [];

let btn = document.querySelector(".box");
let btns = ["yellow", "blue", "red", "green"];
let h2 = document.querySelector("h2");


let gameStarted = false;
let level = 0;

document.addEventListener("keypress", function () {
    if (!gameStarted) {
        console.log("Game started");
        gameStarted = true;
        levelUp();
    }
}
)

function levelUp() {
    level++;
    h2.innerText = "Level " + level;

    let randIdx = Math.floor(Math.random() * 4);
    let randcolor = btns[randIdx] 
    let randBtn = document.querySelector("." + randcolor);
    console.log(randBtn);
    console.log(randIdx);
    console.log(randcolor);
    flash(randBtn);
    compSeq.push(randcolor);
    console.log("compSeq: " + compSeq);
}

function flash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 100);
} 
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 100);
} 

function checkAnswer(idx) {
    console.log("current level: " + level);
    if (userSeq[idx] == compSeq[idx]) {
        if( userSeq.length == compSeq.length){
            console.log("Correct!");
            userSeq = [];
            setTimeout(function () {
                levelUp();
            }, 1000);
            } 
    } 
    else{
        h2.innerHTML = `Game Over! your score was <b>${level-1}</b> Press any key to restart.`;
        document.body.style.backgroundColor = "red";
        setTimeout(function (){
            document.body.style.backgroundColor = "#0a0a0a"; ;
        },200)
        resetGame();
    }
}

function btnPress(){
    console.log(this);   
    let btn = this;
    userFlash(this);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log("userSeq: " + userSeq);

    checkAnswer(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".box");
for (btn of allbtns) {
    btn.addEventListener("click", btnPress);
} 

function resetGame() {
    gameStarted = false;
    userSeq = [];
    compSeq = [];
    level = 0;
}