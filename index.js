const board = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
let CurrentPlayer = "X";

function renderBoard(){
   const allBoxes = document.querySelectorAll('.box');
   
   allBoxes.forEach((boxElement,i)=>{
    if(board[i]=='O'){
        boxElement.innerHTML='<img src="circle.png" height="60px"/>';
    }
    else if (board[i]=='X'){
        boxElement.innerHTML='<img src="cross.png" height="60px"/>';
    }
    else {
        boxElement.innerHTML='';
    }
   })
}
renderBoard();

function selectBox(boxNumber){
    if (board[boxNumber] !== -1){
        alert("Invalid");
        return;
    }

    board[boxNumber] = CurrentPlayer;
    renderBoard();

    if(CurrentPlayer === "X"){
        CurrentPlayer = "O";
    }
    else{
        CurrentPlayer = "X";
    }

    const currentPlayerElement = document.getElementById("CurrentPlayer");
    currentPlayerElement.innerText = CurrentPlayer;

    checkForWinner();
}

function resetBoard(){
    board.fill(-1);
    renderBoard();
    CurrentPlayer="X";
    const currentPlayerElement = document.getElementById("CurrentPlayer");
    currentPlayerElement.innerText = CurrentPlayer;    
}

function isPlayerPresent(places, player){
    let result = true;
    places.forEach((place)=>{
        if(board[place] !== player){
            result = false;
        }
    });

    return result;
}

function checkForWinner(){
    // winning positions
    // 0,1,2
    // 3,4,5
    // 6,7,8
    // 0,3,6
    // 1,4,7
    // 2,5,8
    // 0,4,8
    // 2,4,6
    
    if(isPlayerPresent([0,1,2], "X")){
        alert("Player X wins");
    }
    else if(isPlayerPresent([3,4,5], "X")){
        alert("Player X wins");
    }
    else if(isPlayerPresent([6,7,8], "X")){
        alert("Player X wins");
    }
    else if(isPlayerPresent([0,3,6], "X")){
        alert("Player X wins");
    }
    else if(isPlayerPresent([1,4,7], "X")){
        alert("Player X wins");
    }
    else if(isPlayerPresent([2,5,8], "X")){
        alert("Player X wins");
    }
    else if(isPlayerPresent([0,4,8], "X")){
        alert("Player X wins");
    }
    else if(isPlayerPresent([2,4,6], "X")){
        alert("Player X wins");
    }

    if(isPlayerPresent([0,1,2], "O")){
        alert("Player O wins");
    }
    else if(isPlayerPresent([3,4,5], "O")){
        alert("Player O wins");
    }
    else if(isPlayerPresent([6,7,8], "O")){
        alert("Player O wins");
    }
    else if(isPlayerPresent([0,3,6], "O")){
        alert("Player O wins");
    }
    else if(isPlayerPresent([1,4,7], "O")){
        alert("Player O wins");
    }
    else if(isPlayerPresent([2,5,8], "O")){
        alert("Player O wins");
    }
    else if(isPlayerPresent([0,4,8], "O")){
        alert("Player O wins");
    }
    else if(isPlayerPresent([2,4,6], "O")){
        alert("Player O wins");
    }
}
