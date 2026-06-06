// TODO: write code here
// Импортируем стили и картинку, чтобы Webpack их собрал
import '../css/style.css';
import goblinImage from '../img/goblin.png';

document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('game-board');
    const cells = [];

    // 1. Программно генерируем игровое поле 4x4
    for (let i = 0; i < 16; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        board.appendChild(cell); // Добавляем ячейку в DOM
        cells.push(cell); // Сохраняем ссылку на ячейку в массив
    }

    // 2. Создаем элемент персонажа
    const goblin = document.createElement('img');
    goblin.src = goblinImage;
    goblin.classList.add('goblin');

    // 3. Ставим персонажа в случайную начальную позицию
    let currentIndex = Math.floor(Math.random() * cells.length);
    cells[currentIndex].appendChild(goblin);

    // 4. Планируем перемещение каждую секунду
    setInterval(() => {
        let newIndex;

        // Ищем новую позицию, пока она не будет отличаться от текущей
        do {
            newIndex = Math.floor(Math.random() * cells.length);
        } while (newIndex === currentIndex);

        currentIndex = newIndex;

        cells[currentIndex].appendChild(goblin);
    }, 1000);
});

document.addEventListener('DOMContentLoaded', () => {
    const widget = new NewsWidget(document.querySelector('.news-widget'));

    window.widget = widget;

    const newsInterval = setInterval(() => {
        const title = news.pop();

        widget.addNewNews(title);
        if (!news.length) clearInterval(newsInterval);
    }, 10000);

    const input = document.querySelector('.input');

    document.querySelector('.set-attribute').addEventListener('click', () => {
        input.setAttribute('value', 'attribute');
    });

    document.querySelector('.set-value').addEventListener('click', () => {
        input.value = 'value';
    });
})