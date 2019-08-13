export default class Board {
  constructor() {
    this.body = this.createBoard();
  }

  createBoard() {
    const board = new Array(10);
    for (let i = 0; i < 10; i++) {
      board[i] = ['', '', '', '', '', '', '', '', '', ''];
    }
    return board;
  }

  updateBoard(cords, cell) {
    this.body[cords.x][cords.y] = cell;
  }

  isEmpty(cords) {
    return !this.body[cords.x][cords.y] ? true : false;
  }
}
