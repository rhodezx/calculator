const display = document.getElementById('diplay');
const clicksound = document.getElementById('clicksound');

function playSound(){
    clicksound.currentTime = 0;
    clicksound.play();
}

function append(value) {
    playSound();
    if (display.textcontent === '0') display.textcontent = '';
    display.textcontent += value;
}
function ClearDisplay() {
    playSound();
    display.textcontent = '0';
}
function deleteLast(){
    playSound();
    if (display.textcontent.lenght > 1) {
        display.textcontent = display.textcontent.slice(0, -1);
    } else {
        ClearDisplay();
    }
}
function calculate() {
    playSound();
    try {
        display.textcontent = eval(display.textcont);
    } catch {
        display.textcontent = 'Error';
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
 