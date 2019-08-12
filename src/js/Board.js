export default class Board {
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