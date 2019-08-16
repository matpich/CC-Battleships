export default class Ship {
  constructor(size, owner, id) {
    this.deck = this.createShip(size);
    this.owner = owner;
    this.id = id;
  }

  //tworzy komórki statku jedna po drugiej i zwraca tablicę reprezentującą ciało  statku
  createShip(size) {
    const deck = [];
    for (let i = 1; i <= size; i++) {
      deck.push({
        xCord: null,
        yCord: null,
        cell: `<div class="ship-${size}"></div>`
      });
    }
    return deck;
  }

  //sprawdza czy statek ma jakiekolwiek nie przypisane komórki
  anyNotPositioned() {
    const deck = this.firstNotPositioned();
    if (deck) {
      return true;
    } else {
      return false;
    }
  }

  //zwraca pierwszą nie umieszczoną komórkę statku
  firstNotPositioned() {
    return this.deck.find(e => {
      if (e.xCord === null) {
        return true;
      } else {
        return false;
      }
    });
  }

  //jeśli komórka w tablicy wolna
  //znajduje pustą komórkę statku
  //przypisuje koordynaty
  //na przekazanej tablicy wywołuje metodę, która robi update jej zawartości
  setShipPosition(cords, board) {
    if (board.isEmpty(cords)) {
      const deck = this.firstNotPositioned();
      deck.xCord = cords.x;
      deck.yCord = cords.y;
      board.updateBoard(cords, deck.cell);
    }
  }


//##############


anyPositioned() {
  const deck = this.firstPositioned();
  if (deck) {
    return true;
  } else {
    return false;
  }
}


 //zwraca pierwszą umieszczoną komórkę statku
 firstPositioned() {
  return this.deck.find(e => {
    if (e.xCord === null) {
      return true;
    } else {
      return false;
    }
  });
}


// Zwraca metodę strzału
  setGuessPosition(cords, board) {
    if (board.isEmpty(cords)) {
      const deck = this.firstPositioned();
      // deck.xCord = cords.x;
      deck.yCord = cords.y;
      board.updateBoard(cords, deck.cell);
    }
  }
}