import './css/style.css';

import Player from './js/Player';
import GameGUI from './js/GameGUI';
import GameFlow from './js/GameFlow';

const playerOne = new Player('PlayerOne', 1);
const playerTwo = new Player('PlayerTwo', 2);
const game = new GameGUI();
const gameFlow = new GameFlow();

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

  const shipsPositions = () => {
    game.refresh(playerOne, playerTwo);
    if (shipNo == 8) {
      battlefield.removeEventListener('mousedown', position);
      // test
      // gameFlow.arePlayerShipsPlaced(playerOne);
      // console.log(gameFlow.arePlayerShipsPlaced(playerOne));
      // gameFlow.arePlayerShipsPlaced(playerTwo);
    } else {
      const anyNotPositioned = player.ships[shipNo].anyNotPositioned();
      if (anyNotPositioned) {
        return;
      } else {
        shipNo++;
      }
    }
  }

  //wydarzenie odpalające się przy nacisnięciu klawisza myszy
  battlefield.addEventListener('mousedown', position);

  //wydarzenie odpalające się przy puszczeniu klawisza myszy
  battlefield.addEventListener('mouseup', shipsPositions);
  
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

// gameFlow.gameMessage('Gościu!!');

// Usuwanie eventListenera w momencie rozmieszczenia statków
document.querySelector('#first-battlefield').addEventListener('click', () => {
  if (gameFlow.arePlayerShipsPlaced(playerOne)) {
    if(document.querySelector('#first-battlefield').getAttribute('listener') === 'true'){
      getEventListeners(document.querySelector('#first-battlefield')).click.forEach((e) => {
        e.remove()
      })
    }
    gameFlow.gameMessage(`Statki gracza ${playerOne.name} zostały rozmieszczone`);
  }
})

// Usuwanie eventListenera w momencie rozmieszczenia statków
document.querySelector('#second-battlefield').addEventListener('click', () => {
  if (gameFlow.arePlayerShipsPlaced(playerTwo)) {
    if (document.querySelector('#second-battlefield').getAttribute('listener') === 'true') {
      getEventListeners(document.querySelector('#second-battlefield')).click.forEach((e) => {
        e.remove()
      })
    }
    gameFlow.gameMessage(`Statki gracza ${playerTwo.name} zostały rozmieszczone`);
  }
})

