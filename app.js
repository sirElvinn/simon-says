let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["green", "red", "yellow", "blue"];

let h2 = document.querySelector('h2');

document.addEventListener("keypress", function(){
    if(started == false){
        started = true;

        levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add('game-flash');
    setTimeout(() => {
        btn.classList.remove('game-flash');
    }, 250);
}

function userFlash(btn){
    btn.classList.add('user-flash');
    setTimeout(() => {
        btn.classList.remove('user-flash');
    }, 250);
}


function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    
    gameSeq.push(randColor);
    gameFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if (userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else{
        h2.innerHTML = `Game over! Your score is <b>${level}</b>. Press any key to start`
        reset();
    }
}

 function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
 }

 let AllBtns = document.querySelectorAll(".box");
 for(btn of AllBtns){
    btn.addEventListener('click', btnPress);
 }

 function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

 }