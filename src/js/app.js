import '../css/style.css';
import goblinImage from '../img/goblin.png';

const GRID_SIZE = 4;
const CELLS_COUNT = GRID_SIZE * GRID_SIZE;

document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('game-board');
    const cells = [];

    // 1. Генерируем игровое поле 4x4
    for (let i = 0; i < CELLS_COUNT; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        board.append(cell);
        cells.push(cell);
    }

    // 2. Создаём персонажа
    const goblin = document.createElement('img');
    goblin.src = goblinImage;
    goblin.alt = 'goblin';
    goblin.classList.add('goblin');

    // 3. Стартовая рандомная позиция
    let currentIndex = Math.floor(Math.random() * cells.length);
    cells[currentIndex].append(goblin);

    // 4. Перемещение каждую секунду
    setInterval(() => {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * cells.length);
        } while (newIndex === currentIndex);

        currentIndex = newIndex;
        cells[currentIndex].append(goblin);
    }, 1000);
});