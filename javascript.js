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
    let compSel = document.querySelector("#compSel");
    let humSel = document.querySelector("#humSel");

    //Display human and computer selection
    compSel.innerText=decodeRPS(computerSel);
    humSel.innerText=decodeRPS(humanSel);

    //Increase games played
    gamesPlayed++;
    let winner = -1;

    //Human won
    if(humanSel==1 && computerSel==3){
        console.log('Human won');
        humanScore++;
        winner=1;
    }else if(humanSel==2 && computerSel==1){
        console.log('Human won');
        humanScore++;
        winner=1;
    }else if(humanSel==3 && computerSel==2){
        console.log('Human won');
        humanScore++;
        winner=1;
    }
    //Computer won
    else if(humanSel==1 && computerSel==2){
        console.log('Computer won');
        computerScore++;
        winner=0;
    }else if(humanSel==2 && computerSel==3){
        console.log('Computer won');
        computerScore++;
        winner=0;
    }else if(humanSel==3 && computerSel==1){
        console.log('Computer won');
        computerScore++;
        winner=0;
    }else{
        console.log('Draw');
        draws++;
    }
    //Change winner color
    if (winner==1){
        //Human won
        humSel.classList.add("winner");
        compSel.classList.remove("winner");
    }else if(winner==0){
        //Computer won
        compSel.classList.add("winner");
        humSel.classList.remove("winner");      
    }else{
        //Draw
        compSel.classList.remove("winner");
        humSel.classList.remove("winner"); 
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

}


function decodeRPS(rnd){
    if (rnd==1){
        return('Rock')
    }
    else if(rnd==2){
        return('Paper')
    }
    else{
        return('Scissors')
    }
}

/* Rock, paper, scissors buttons */
let options = document.querySelector(".options");
options.addEventListener("click",(event)=>{
    let target = event.target;
    humanSel = target.id;

    playGame();
});