let arr = [undefined,undefined,undefined,
    undefined,undefined,undefined,
    undefined,undefined,undefined]

function play(boxID){
   const player =document.getElementById("player");
   
   const clickedElement = document.getElementById(boxID);

   
   if(player.innerText === 'X'){
        clickedElement.innerText = 'X';
        player.innerText = 'O';
        arr[boxID] = 'X';
   } else {
        clickedElement.innerText = 'O';
        player.innerText ='X';
        arr[boxID] = 'O';
   }
   
   if (arr[0] !== undefined && arr[0] === arr[1] 
        && arr[0] === arr[2]) {
            alert(`${arr[0]} is the winner`);
            return;
    } else if(arr[0] !== undefined && arr[0] === arr[4] 
        && arr[0] === arr[8]) {
            alert(`${arr[0]} is the winner`);
            return;
    } else if(arr[0] !== undefined && arr[0] === arr[3] 
        && arr[0] === arr[6]) {
            alert(`${arr[0]} is the winner`);
            return;
    } else if(arr[1] !== undefined && arr[1] === arr[4] 
        && arr[1] === arr[7]) {
            alert(`${arr[1]} is the winner`);
            return;
    } else if(arr[2] !== undefined && arr[2] === arr[5] 
        && arr[2] === arr[8]) {
            alert(`${arr[2]} is the winner`);
            return;
    } else if(arr[2] !== undefined && arr[2] === arr[4] 
        && arr[2] === arr[6]) {
            alert(`${arr[2]} is the winner`);
            return;
    } else if(arr[3] !== undefined && arr[3] === arr[4] 
        && arr[3] === arr[5]) {
            alert(`${arr[3]} is the winner`);
            return;
    } else if(arr[6] !== undefined && arr[6] === arr[7] 
        && arr[6] === arr[8]) {
            alert(`${arr[6]} is the winner`);
            return;
    }

    let boardFull = true;
        console.log(boardFull)
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === undefined) {
            boardFull = false;
            }
        }
        if (boardFull === true){
            alert("Gat's game, ther is no winner")
        }
        console.log(boardFull)
  
}






