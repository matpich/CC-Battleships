class Board {
    constructor() {
        this.body = this.create();
    }

    create() {
        const boardArray = [];
        for (let i = 0; i < 10; i++) {
            boardArray.push([]);
            for (let j = 0; j < 10; j++) {
                boardArray[i].push("");
            }
        }
        return boardArray;
    }
}

class Player {
    constructor() {
    this.myArmy= new Board()
    this.myFights= new Board()
    }
    generateBoards(){
        const boards = [
            [this.myArmy, '#battlefield', 'field']
            [this.myFights, '#battlefield-prev', 'field-prev']
        ];
        boards.forEach(e => {
            for (let i = 0 ; i < 10 ; i++) {
                for (let j = 0; j < 10 ; j++) {
                    const field = document.createElement('div');
                    field.innerHTML = e[0][i][j];
                    field.className = e[2];
                    document.querySelector(e[1]).appendChild(field);
                }
            }
        });
    }
}

const player1 = new Player();
const player2 = new Player();

player1.generateBoards()
//for testing purpose - to remove!!!
const tab = new Board();
console.log(tab);
