let newBtn = document.querySelector(".newGameBtn");
let boxes = document.querySelectorAll(".box");
let myResetBtn = document.querySelector(".resetBtn");
let gamerInfo = document.querySelector(".game-info");


let playerX = true;
let winnerFound = false;

let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

newBtn.addEventListener("click",() => {
    playerX = true;
    winnerFound = false;

    boxes.forEach((box) => {
        box.innerText = "";
        box.style.pointerEvents = ""; 
        box.style.backgroundColor = "";
    });
    
    gamerInfo.innerText = "It's the turn of 'X'";
    newBtn.classList.add("hidden");
    myResetBtn.classList.remove("hidden");
});

newBtn.classList.add("hidden");

myResetBtn.addEventListener("click",() => {
    playerX = true;
    winnerFound = false;

    boxes.forEach((box) => {
        box.innerText = "";
        box.style.pointerEvents = "";
        box.style.backgroundColor = "";
    });

    gamerInfo.innerText = "It's the turn of 'X'";
    myResetBtn.classList.remove("hidden");
});


const disabledBoxes = () => {
    for(box of boxes){
        box.style.pointerEvents = "none";
    }
}

const showWinner = (player) => {
    gamerInfo.innerText = `Congratulations, Winner is - ${player} - 😎`;
    winnerFound = true;
    myResetBtn.classList.add("hidden");
    newBtn.classList.remove("hidden");
    disabledBoxes();
}

const checkWinner = () => {

    for(let pattern of winPatterns){
        // console.log(pattern[0], pattern[1], pattern[2]);
        
        let pos1 = boxes[pattern[0]].innerText; 
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" || pos2 != "" || pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1); 
                boxes[pattern[0]].style.backgroundColor = "#65B741";
                boxes[pattern[1]].style.backgroundColor = "#65B741";
                boxes[pattern[2]].style.backgroundColor = "#65B741";
                
            } 
        }
  
    };

    

    let filledBoxes = 0;
    boxes.forEach((box) => {
        if (box.innerText != ""){
            filledBoxes++;
        }
    });

    if(filledBoxes === 9 && winnerFound === false ){
        gamerInfo.innerText = "Game Tied! 😮";
    }
}
    

function playerTurn(box){
    if(playerX){
        box.innerText = 'X';
        box.style.color = "black"
        box.style.textShadow = "0 0 2px black";
        gamerInfo.innerText = "It's the turn of 'O'";
        playerX = false;
    }
    else{
        box.innerText = 'O';
        box.style.color = "white"
        box.style.textShadow = "0 0 5px white";
        gamerInfo.innerText = "It's the turn of 'X'";
        playerX = true;
    }
    box.style.pointerEvents = "none";

    checkWinner();
}



boxes.forEach((box) => {
    box.addEventListener("click",() => {
       playerTurn(box);
    });
});



