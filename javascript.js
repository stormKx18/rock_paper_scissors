console.log('Rock Paper Scissors game');

let humanScore=0;
let computerScore=0;

//getComputerChoice will randomly return 
//one of the following string values: “rock”, “paper” or “scissors”

function getComputerChoice(){
    let rnd = Math.floor(Math.random()*3)+1;
    decodeRPS(rnd);
    
    return rnd;
}

function getHumanChoice(){
    let ans = prompt('Select 1(Rock), 2(Paper) or 3(Scissors)')
    decodeRPS(ans);

    document.querySelector("#hscore").innerText=humanScore;
    document.querySelector("#cscore").innerText=computerScore;
}


function decodeRPS(rnd){
    if (rnd==1){
        console.log('Rock');
    }
    else if(rnd==2){
        console.log('Paper');
    }
    else{
        console.log('Scissors');
    }
}