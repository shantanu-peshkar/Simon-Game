let gamesequence=[];
let usersequence=[];
let btns=["red","green","blue","yellow"];
let started=false;
let level=0;
let h2=document.querySelector("h2")
document.addEventListener("keypress" ,function(){
    if(started==false){
        console.log("game is started")
        started=true;
        levelup();
    }
}); 
function gameflash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userflash(btn){
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}


function levelup(){
    usersequence=[];
    level++;
    h2.innerText=`level${level}`;
    let randidx = Math.floor(Math.random()*3);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`);
    // console.log(randidx);
    // console.log(randcolor);
    // console.log(randbtn);
    gamesequence.push(randcolor);
    console.log(gamesequence);
    gameflash(randbtn);
}

function checkAns(idx){
// console.log("curr level :",level);

if(usersequence[idx]===gamesequence[idx]){
    if(usersequence.length===gamesequence.length){
        setTimeout(levelup,1000);
    }
}else{
    h2.innerHTML=`game is over! your score is <b>${level}</b><br>press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout( function(){
        document.querySelector("body").style.backgroundColor="white";
    },150)
    reset();
}
};


function btnpress(){
    let btn=this;
    userflash(btn);
    userColor=btn.getAttribute("id");
    usersequence.push(userColor);
    checkAns(usersequence.length-1);
}
let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    gamesequence=[];
    usersequence=[];
    level=0;
}