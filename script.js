const generateButton = document.querySelector('.generate-button');
const colorCode = document.querySelector('.color-code');
const colorBox = document.querySelector('.color-box');

function getRandomColor() {
    let hex = "#";
    const letters = '0123456789ABCDEF';

    for (let i = 0; i < 6; i++) {
        hex += letters[Math.floor(Math.random() * 16)];
    }
    return hex;
};

generateButton.addEventListener('click', () => {
    const randomColor = getRandomColor();

    colorCode.textContent = randomColor;
    // colorBox.style.backgroundColor = randomColor;
    document.body.style.backgroundColor = randomColor;
});