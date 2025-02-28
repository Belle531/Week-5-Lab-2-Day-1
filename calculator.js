function playSound() {
    const audio = new Audio('click-sound.mp3');
    audio.play();
}

function appendToDisplay(value) {
    playSound();
    document.getElementById('display').value += value;
}

function clearDisplay() {
    playSound();
    document.getElementById('display').value = '';
}

function deleteLast() {
    playSound();
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    playSound();
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value); 
    } catch (e) {
        display.value = 'Error';
    }
}


function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}


document.getElementById('themeToggle').addEventListener('click', toggleTheme);

const clickButton = document.getElementById('clickButton');

clickButton.addEventListener('click', () => {
    playSound();
    confetti({
        particleCount: 200, 
        spread: 70,        
        origin: { y: clickButton.offsetTop, x: clickButton.offsetLeft + clickButton.offsetWidth/2 } 
    });
});
