

// TIMER
const timerBox = document.querySelector('.timer-box');
const timerStartButton =  timerBox.querySelector('#start');
const timerStopButton =  timerBox.querySelector('#stop');
const timerResetButton =  timerBox.querySelector('#reset');
const timerSecondsDisplay = timerBox.querySelector('h2.time');
let count = 0;
timerSecondsDisplay.textContent=count;
let timerId;
// START TIMER
let timer = function(){
  timerId = setInterval(
    function() {
      count++;
      timerSecondsDisplay.textContent=count;
    },
    1000
  );
};
timerStartButton.addEventListener('click', timer);

// STOP TIMER
let stopTimer = function() {
  clearInterval(timerId);
};
timerStopButton.addEventListener('click', stopTimer);

// RESET TIMER
let resetTimer = function() {
  clearInterval(timerId);
  count = 0;
  timerSecondsDisplay.textContent=count;
};
timerResetButton.addEventListener('click', resetTimer);



// STOPWATCH
const stopwatchBox = document.querySelector('.stopwatch-box')
const stopwatchStartButton;
const stopwatchStopButton;
const stopwatchResetButton;
const stopwatchSecondsDisplay = stopwatchBox.querySelector('h2.time');

let stopwatchTime = 0;
stopwatchSecondsDisplay.textContent=stopwatchTime;