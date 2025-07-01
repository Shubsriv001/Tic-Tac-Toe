const boxes = document.querySelectorAll('.boxes');
const playerContainer = document.querySelector('.player-container');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');
const innerGameContainer = document.querySelector('.inner-game-container');

let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let isGameActive = false;

resetBtn.style.display = 'none';

startBtn.onclick = function() {
  isGameActive = true;
  playerContainer.textContent = `Player ${currentPlayer}'s turn`;
  playerContainer.style.boxShadow = '0px 0px 10px red';

  resetBtn.style.display = 'inline-block'; 
};

boxes.forEach(function(box, index) {
  box.onclick = function() {
    if (isGameActive && board[index] === '') {
      board[index] = currentPlayer;
      box.textContent = currentPlayer;

      if (checkWin()) {
        playerContainer.textContent = `Player ${currentPlayer} wins!`;
        playerContainer.style.boxShadow = '0 0 20px green';
        isGameActive = false;
      } else if (isBoardFull()) {
        playerContainer.textContent = `It's a draw!`;
        playerContainer.style.boxShadow = '0 0 10px yellow';
        innerGameContainer.style.boxShadow = '0 0 20px yellow';
        isGameActive = false;
      } else {
        switchPlayer();
      }
    }
  };
});

function switchPlayer() {
  if (currentPlayer === 'X') {
    currentPlayer = 'O';
  } else {
    currentPlayer = 'X';
  }
  if (isGameActive) {
    playerContainer.textContent = `Player ${currentPlayer}'s turn`;
    playerContainer.style.boxShadow = '0px 0px 10px red';
  }
}

function checkWin() {
  if (board[0] !== '' && board[0] === board[1] && board[1] === board[2]) {
    boxes[0].style.backgroundColor = 'green';
    boxes[1].style.backgroundColor = 'green';
    boxes[2].style.backgroundColor = 'green';
    innerGameContainer.style.boxShadow = '0 0 20px green';
    return true;
  }
  if (board[3] !== '' && board[3] === board[4] && board[4] === board[5]) {
    boxes[3].style.backgroundColor = 'green';
    boxes[4].style.backgroundColor = 'green';
    boxes[5].style.backgroundColor = 'green';
    innerGameContainer.style.boxShadow = '0 0 20px green';
    return true;
  }
  if (board[6] !== '' && board[6] === board[7] && board[7] === board[8]) {
    boxes[6].style.backgroundColor = 'green';
    boxes[7].style.backgroundColor = 'green';
    boxes[8].style.backgroundColor = 'green';
    innerGameContainer.style.boxShadow = '0 0 20px green';
    return true;
  }
  if (board[0] !== '' && board[0] === board[3] && board[3] === board[6]) {
    boxes[0].style.backgroundColor = 'green';
    boxes[3].style.backgroundColor = 'green';
    boxes[6].style.backgroundColor = 'green';
    innerGameContainer.style.boxShadow = '0 0 20px green';
    return true;
  }
  if (board[1] !== '' && board[1] === board[4] && board[4] === board[7]) {
    boxes[1].style.backgroundColor = 'green';
    boxes[4].style.backgroundColor = 'green';
    boxes[7].style.backgroundColor = 'green';
    innerGameContainer.style.boxShadow = '0 0 20px green';
    return true;
  }
  if (board[2] !== '' && board[2] === board[5] && board[5] === board[8]) {
    boxes[2].style.backgroundColor = 'green';
    boxes[5].style.backgroundColor = 'green';
    boxes[8].style.backgroundColor = 'green';
    innerGameContainer.style.boxShadow = '0 0 20px green';
    return true;
  }
  if (board[0] !== '' && board[0] === board[4] && board[4] === board[8]) {
    boxes[0].style.backgroundColor = 'green';
    boxes[4].style.backgroundColor = 'green';
    boxes[8].style.backgroundColor = 'green';
    innerGameContainer.style.boxShadow = '0 0 20px green';
    return true;
  }
  if (board[2] !== '' && board[2] === board[4] && board[4] === board[6]) {
    boxes[2].style.backgroundColor = 'green';
    boxes[4].style.backgroundColor = 'green';
    boxes[6].style.backgroundColor = 'green';
    innerGameContainer.style.boxShadow = '0 0 20px green';
    return true;
  }
  return false;
}

function isBoardFull() {
  if (
    board[0] !== '' && board[1] !== '' && board[2] !== '' &&
    board[3] !== '' && board[4] !== '' && board[5] !== '' &&
    board[6] !== '' && board[7] !== '' && board[8] !== ''
  ) {
    return true;
  }
  return false;
}

resetBtn.onclick = function() {
  board = ['', '', '', '', '', '', '', '', ''];
  boxes.forEach(function(box) {
    box.textContent = '';
    box.style.backgroundColor = ''; 
  });
  innerGameContainer.style.boxShadow = '';
  currentPlayer = 'X';
  isGameActive = false;
  playerContainer.textContent = 'Click Start to play';
  playerContainer.style.boxShadow = '0px 0px 10px red';

  resetBtn.style.display = 'none';
};
