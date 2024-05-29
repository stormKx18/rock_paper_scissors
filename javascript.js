console.log('Rock Paper Scissors game');

let humanScore=0;
let humanSel=0;
let computerScore=0;
let draws=0;
let gamesPlayed=0;

//getComputerChoice will randomly return 
//one of the following string values: “rock”, “paper” or “scissors”

function getComputerChoice(){
    let rnd = Math.floor(Math.random()*3)+1;
    return rnd;
}

function updateScores(humanSel,computerSel){
    document.querySelector("#compSel").innerText=decodeRPS(computerSel);
    document.querySelector("#humSel").innerText=decodeRPS(humanSel);

    //Increase games played
    gamesPlayed++;
    //Human won
    if(humanSel==1 && computerSel==3){
        console.log('Human won');
        humanScore++;
    }else if(humanSel==2 && computerSel==1){
        console.log('Human won');
        humanScore++;
    }else if(humanSel==3 && computerSel==2){
        console.log('Human won');
        humanScore++;
    }
    //Computer won
    else if(humanSel==1 && computerSel==2){
        console.log('Computer won');
        computerScore++;
    }else if(humanSel==2 && computerSel==3){
        console.log('Computer won');
        computerScore++;
    }else if(humanSel==3 && computerSel==1){
        console.log('Computer won');
        computerScore++;
    }else{
        console.log('Draw');
        draws++;
    }

    document.querySelector("#hscore").innerText=humanScore;
    document.querySelector("#cscore").innerText=computerScore;
    document.querySelector("#games").innerText=gamesPlayed;
    document.querySelector("#draws").innerText=draws;
}

function getHumanChoice(){
    let ans = +prompt('Select 1(Rock), 2(Paper) or 3(Scissors)')
    ans = Math.min(ans,3);
    return ans;
}

function playRound(){

    let computerSel=getComputerChoice();
    updateScores(humanSel,computerSel);
}

function playGame(){
    document.querySelector("#winner").innerText='';

    playRound();  
/*
    if(gamesPlayed>=5){
        if (computerScore>humanScore){
            document.querySelector("#winner").innerText='Computer won!';
        }else if(computerScore<humanScore){
            document.querySelector("#winner").innerText='Human won!';
        }else{
            document.querySelector("#winner").innerText='It is a draw!';
        }
    }
    */

}


function decodeRPS(rnd){
    if (rnd==1){
        return('Rock')
        //console.log('Rock');
    }
    else if(rnd==2){
        return('Paper')
        //console.log('Paper');
    }
    else{
        return('Scissors')
        //console.log('Scissors');
    }
}

/* Rock, paper, scissors buttons */
let options = document.querySelector(".options");
options.addEventListener("click",(event)=>{
    let target = event.target;
    humanSel = target.id;
    //console.log(target.id);

    playGame();
});