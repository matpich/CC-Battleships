import './css/style.css';

import Player from './js/Player';
import GameGUI from './js/GameGUI';

const playerOne = new Player('PlayerOne', 1);
const playerTwo = new Player('PlayerTwo', 2);
const game = new GameGUI();

//funkcja pozwalająca na rozmieszczanie statków
const placeShips = player => {
  let shipNo = 0;

  //wybiera odpowiednią planszę w zależności od gracza
  let battlefield;
  if (player.playerNo === 1) {
    battlefield = document.querySelector('#first-battlefield');
  } else if (player.playerNo === 2) {
    battlefield = document.querySelector('#second-battlefield');
  }

  //funkcja przekazywana do eventListenera
  const position = e => {
    if (shipNo != 8 && e.toElement.className === 'field') {
      const cords = {
        x: e.toElement.id[0],
        y: e.toElement.id[2]
      };
      player.ships[shipNo].setShipPosition(cords, player.ownFleetBoard);
    }
  };

  //wydarzenie odpalające się przy nacisnięciu klawisza myszy
  battlefield.addEventListener('mousedown', position);

  //wydarzenie odpalające się przy puszczeniu klawisza myszy
  battlefield.addEventListener('mouseup', () => {
    game.refresh(playerOne, playerTwo);
    if (shipNo == 8) {
      battlefield.removeEventListener('mousedown', position);
    } else {
      const anyNotPositioned = player.ships[shipNo].anyNotPositioned();
      if (anyNotPositioned) {
        return;
      } else {
        shipNo++;
      }
    }
  });
};
//#######################

placeShips(playerOne);
placeShips(playerTwo);

//pomocniczo dodałem sobie eventlistener - pokazuje mi statki graczy i ich pozycje jak nacisnę jakikolwiek przycisk
document.body.addEventListener('keypress', e => {
  console.log(playerOne.ships);
  console.log(playerTwo.ships);
});

console.log(playerOne.ownFleetBoard.body);

window.onload = game.refresh(playerOne, playerTwo);
