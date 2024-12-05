/*let gameseq =[];
let userseq =[];

let started=false;
let level=0;

let btns=["pink","green","orange","blue"];

let h2=document.querySelector("h2");


document.addEventListener("keypress", function () {
    if(started==false){
        console.log("game is started");
        started=true;
    levelup();
    }
});


function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },100);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },100);
}

function levelup(){

    userseq=[];

    level++;
    h2.innerText = `Level ${level}`;


    let randIdx=Math.floor(Math.random()*btns.length);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`#${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    gameFlash(randBtn);

}
function checkAns(idx){

    if(userseq[idx]===gameseq[idx]){
        if(userseq.length===gameseq.length){
            setTimeout(levelup,3000);
        }else{
            h2.innerHTML=`Game over!your Score was <b>${level}</b><br>press any key to start again.`;
            document.querySelector("body").style.backgroundColor="red";
            setTimeout(function(){
                document.querySelector("body").style.backgroundColor="white";
            },500)
            reset();
        }
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
}

let allBtns=document.querySelectorAll(".box");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}*/
let gameseq = [];
let userseq = [];
let started = false;
let level = 0;

const btns = ["pink", "green", "orange", "blue"];
const h2 = document.querySelector("h2");
const body = document.querySelector("body");

document.addEventListener("keypress", () => {
    if (!started) {
        console.log("Game is started");
        started = true;
        levelup();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => btn.classList.remove("flash"), 100);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(() => btn.classList.remove("userFlash"), 100);
}

function levelup() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    const randIdx = Math.floor(Math.random() * btns.length);
    const randColor = btns[randIdx];
    const randBtn = document.querySelector(`#${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    gameFlash(randBtn);
}

function checkAns(idx) {
    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length === gameseq.length) {
            setTimeout(levelup, 500);
        }
    } else {
        h2.innerHTML = `Game over! Your Score was <b>${level}</b><br>Press any key to start again.`;
        body.style.backgroundColor = "red";
        setTimeout(() => (body.style.backgroundColor = "white"), 250);
        reset();
    }
}

function btnPress() {
    const btn = this;
    userFlash(btn);

    const userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length - 1);
}

const allBtns = document.querySelectorAll(".box");
allBtns.forEach(btn => btn.addEventListener("click", btnPress));

function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}
