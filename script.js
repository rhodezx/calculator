const display = document.getElementById('display');
const clicksound = document.getElementById('clicksound');

function playSound(){
    clicksound.currentTime = 0;
    clicksound.play();
}

function append(value) {
    playSound();
    if (display.value === '0') display.value = '';
    display.value += value;
}
function ClearDisplay() {
    playSound();
    display.value = '0';
}
function deleteLast(){
    playSound();
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        ClearDisplay();
    }
}
function calculate() {
    playSound();
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

document.addEventListener('keydown', (e) => {
const key = e.key;
if((/\d|[+\-*/%.]/).test(key)) {
    append(key);
} else if (key  === 'Enter') {
    calculate ();
} else if (key === 'Backspace') {
    deleteLast();
} else if (key.toLowerCase() === 'c') {
    cleardisplay();
}
});
 