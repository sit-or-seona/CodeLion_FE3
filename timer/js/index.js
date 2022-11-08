const timerValue = document.querySelector('.cont-inp');
const hrsValue = document.querySelector('#timer-hrs');
const minValue = document.querySelector('#timer-min');
const secValue = document.querySelector('#timer-sec');

const startButton = document.querySelector('.btn-start');
const resetButton = document.querySelector('.btn-reset');

timerValue.addEventListener('keydown',(event) => {
    startButton.disabled = false;
    resetButton.disabled = false;
}, true)


startButton.addEventListener('click', timerStart);
resetButton.addEventListener('click', timerReset);
pauseButton.addEventListener('click', timerPause);

const timerStart = () => {
    startButton.setAttribute('class', '.btn-pause');

    let time = hrsValue.value*360 + minValue.value*60 + secValue.value;

    let interval = setInterval(function() {
        if(time >= 0) {
            let hrs = ~~(time / 360).padStart(2, "0");
            let min = ~~(time / 60).padStart(2, "0");
            let sec = (time % 60).padStart(2, "0");
    
            hrsValue.innerText = hrs;
            minValue.innerText = min;
            secValue.innerText = sec;
    
            time -= 1;

        } else {
            startButton.setAttribute('class', '.btn-start');
            startButton.disabled = true;
            resetButton.disabled = true;
            clearInterval(interval);
        }
        
    },1000)

}