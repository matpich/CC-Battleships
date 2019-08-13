export default class GameGUI {
  generateBoards(
    playerOneBoardOne,
    playerOneBoardTwo,
    playerTwoBoardOne,
    playerTwoBoardTwo
  ) {
    const boards = [
      [playerOneBoardOne, '#first-battlefield', 'field'],
      [playerOneBoardTwo, '#first-battlefield-prev', 'field-prev'],
      [playerTwoBoardOne, '#second-battlefield', 'field'],
      [playerTwoBoardTwo, '#second-battlefield-prev', 'field-prev']
    ];

    boards.forEach(e => {
      document.querySelector(e[1]).innerHTML = '';
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          const field = document.createElement('div');
          field.innerHTML = e[0][i][j];
          field.className = e[2];
          field.id = `${i},${j}`;
          document.querySelector(e[1]).appendChild(field);
        }
      }
    });
  }

  refresh(p1, p2) {
    this.generateBoards(
      p1.ownFleetBoard.body,
      p1.enemyFleetBoard.body,
      p2.ownFleetBoard.body,
      p2.enemyFleetBoard.body
    );
  }
}
