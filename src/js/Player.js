import Ship from './Ship';
import Board from './Board';

export default class Player {
  constructor(name, playerNo) {
    this.playerNo = playerNo;
    this.name = name;
    this.ships = this.generateFleet(name);

    this.ownFleetBoard = new Board();
    this.enemyFleetBoard = new Board();
  }

  //generuje flotę
  generateFleet(name) {
    const fleetSizes = [5, 4, 3, 3, 2, 2, 1, 1];
    return fleetSizes.map((e, id) => {
      return new Ship(e, name, id);
    });
  }

  //sprawdza czy wszystkie statki są rozmieszczone
  //do zrobienia
  allShipsPositioned() {
    return false;
  }
}
