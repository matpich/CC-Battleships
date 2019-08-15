import Board from './Board';
import Ship from './Ship';
import Player from './Player';
import GameGUI from './GameGUI';

export default class GameFlow {
    // Okienko z komunikatami
    gameMessage(msg){
        if (!document.querySelector('.game-info')) {
            let infoDiv = document.createElement('div');
            let infoBtn = document.createElement('button');
            infoBtn.innerText = 'OK';
            infoDiv.innerHTML = `<p>${msg}</p>`;
            infoDiv.classList = 'game-info';
            infoDiv.appendChild(infoBtn);
            document.body.querySelector('.container').appendChild(infoDiv);
            
            document.querySelector('.game-info button').addEventListener('click', () => {
                if (!document.querySelector('.game-info').classList.contains('hidden')) {
                    document.querySelector('.game-info').classList.add('hidden')
                }
            });
        }
    }
    // Czy statki gracza są rozstawione?
    arePlayerShipsPlaced(player){
        // współrzędne x wrzucane do tablicy
        let shipCords = [];
        for (let i = 0; i < player.ships.length; i++){
            for (let j = 0; j < player.ships[i].deck.length; j++){
                shipCords.push(player.ships[i].deck[j].xCord);
            }
        }
        // console.log(shipCords)
        // Funkcja pomocnicza do Array.every()
        const checkShipsPositioned = (shipCord) => {
            return shipCord != null
        }
        // Jeśli statki gracza rozmieszczone, wyświetl alert
        if (shipCords.every(checkShipsPositioned)) {
            this.gameMessage(`Statki gracza ${player.name} zostały rozmieszczone`);
            document.querySelector('.game-info').classList.remove('hidden');
            return true;
        }
    }   
    
}