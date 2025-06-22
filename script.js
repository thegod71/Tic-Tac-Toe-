let currentplayer = "X";
let arr = Array(9).fill(null);
let xWins = 0, oWins = 0, draws = 0;

const board = document.getElementById("board");// access the div of the html file 
const message = document.getElementById("message");

function createBoard() {
    board.innerHTML = ''; // Clear previous content  or Clears the HTML view of the grid
    for (let row = 0; row < 3; row++) {
        const rowDiv = document.createElement("div");
        rowDiv.className = "row";

        for (let col = 0; col < 3; col++) {
            const index = row * 3 + col;
            const cell = document.createElement("div");
            cell.className = "col";
            cell.id = index;
            cell.onclick = () => handleClick(cell);
            rowDiv.appendChild(cell);
        }

        board.appendChild(rowDiv);
    }
}

function updateScoreboard() {
    document.getElementById("xWins").innerText = xWins;
    document.getElementById("oWins").innerText = oWins;
    document.getElementById("draws").innerText = draws;
}

function checkwinner() {
    const winPatterns = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;// through above aaray 
        if (arr[a] && arr[a] === arr[b] && arr[b] === arr[c]) {
            message.innerText = `Winner is ${currentplayer}!`;
            if (currentplayer === "X") xWins++; else oWins++;
            updateScoreboard();
            //resetGame();
            disableBoard();// ess baad koee opertion in 
            return true;
        }
    }

    if (!arr.includes(null)) {
        message.innerText = `It's a draw!`;
        draws++;
        updateScoreboard();
        //resetGame();
        return true;
    }

    return false;// konsa player khel rha hai 
}

function handleClick(el) {
    const id = Number(el.id);
    if (arr[id] !== null) return;

    arr[id] = currentplayer;
    el.innerText = currentplayer;
    if (currentplayer === "X") {
        el.style.backgroundColor = "#ffcccb"; // light red for X
    } 
    else {
        el.style.backgroundColor = "#add8e6"; // light blue for O
    }

    if (!checkwinner()) {
        currentplayer = currentplayer === "X" ? "O" : "X";
        message.innerText = `Current Player: ${currentplayer}`;
    }
}

function disableBoard() {
    for (let i = 0; i < 9; i++) {
        const cell = document.getElementById(i);// not access the array only index 
        cell.onclick = null;
    }
}

function resetGame() {
    arr = Array(9).fill(null);
    currentplayer = "X";
    message.innerText = `Current Player: ${currentplayer}`;
    createBoard();
}

// Initial setup
createBoard();
updateScoreboard();

// let currentplayer="X";
// let arr=Array(9).fill(null);// this make a array  of size 9 which is intially empty
// function checkwinner(){
//     if(
//         (arr[0]!==null && arr[0]==arr[1] && arr[1]==arr[2]) ||  (arr[3]!==null && arr[3]==arr[4] && arr[4]==arr[5]) || (arr[6]!==null && arr[6]==arr[7] && arr[7]==arr[8]) ||  
//         (arr[0]!==null && arr[0]==arr[3] && arr[3]==arr[6]) || (arr[1]!==null && arr[1]==arr[4] && arr[4]==arr[7]) || (arr[2]!==null && arr[2]==arr[5] && arr[5]==arr[8]) ||
//          (arr[0]!==null && arr[0]==arr[4] && arr[4]==arr[8]) || (arr[2]!==null && arr[2]==arr[4] && arr[4]==arr[6])     
//     ){   
//         if(currentplayer==="X")xWins++;
//         if(currentplayer==="O")oWins++;
//         document.write   (`Winnner is ${currentplayer}`);
//          return ; 
//     }
//     // else document.write   (`Draw is ${currentplayer}`) no tuse ddirectly because always this is run ;
//     if(!arr.some((e)=> e===null)){// ek bhi value null nhi huaa to 
//         document.write(`Draw!`);
//         return;
//     }
// }
// function handleClick(el){
//     const id=Number( el.id );// to convert into number 
//     if(arr[id]!==null)return;
//     arr[id]=currentplayer;// usse index pr current eleemnt ko rkh do 
//     el.innerText=currentplayer;
//     checkwinner();
//     currentplayer=currentplayer==="X"?"O":"X";
    
//    console.log(arr);
// }