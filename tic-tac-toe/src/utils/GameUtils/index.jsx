const checkForSequence = (option1, option2, option3) => {
  if (option1 === null || option2 === null || option3 === null) {
    return false;
  }
  return option1 === option2 && option2 === option3;
};

//Column and Row Winner
export const checkWinner = (board) => {
  for (let i = 0; i < 9; i += 3) {
    if (checkForSequence(board[i], board[i + 1], board[i + 2])) {
      console.log("row winner");
      return [i, i + 1, i + 2];
    }
  }

  for (let i = 0; i < 3; i++) {
    if (checkForSequence(board[i], board[i + 3], board[i + 6])) {
      console.log("column winner");
      return [i, i + 3, i + 6];
    }
  }

  //Diagonal Winner
  if (checkForSequence(board[0], board[4], board[8])) {
    console.log("diagonal winner");
    return [0, 4, 8];
  }

  //Diagonal Winner
  if (checkForSequence(board[2], board[4], board[6])) {
    console.log("diagonal winner");
    return [2, 4, 6];
  }

  //Draw
  if (!board.includes(null)) {
    return "Draw";
  }

  return false;
};
