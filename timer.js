const bell = new Audio('bell.mp3');


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
const stopwatchStartButton = stopwatchBox.querySelector('#start');
const stopwatchStopButton = stopwatchBox.querySelector('#stop');
const stopwatchResetButton = stopwatchBox.querySelector('#reset');
const stopwatchSecondsDisplay = stopwatchBox.querySelector('h2.time');

let stopwatchId;
let stopwatchSeconds;

// START STOPWATCH
let stopwatch = function() {
  if (!stopwatchSeconds) {
    stopwatchSeconds = Number.parseInt(stopwatchBox.querySelector('#seconds-input').value);
  } else {
    // stopwatchSeconds = 0;
  }
  stopwatchId = setInterval(
    function() {
      if (stopwatchSeconds > 0) {
        stopwatchSecondsDisplay.textContent=stopwatchSeconds;
        stopwatchSeconds--;
      } else {
        bell.play();
        stopwatchSecondsDisplay.textContent=stopwatchSeconds;
        clearInterval(stopwatchId);
        setTimeout(
          function() {
            stopwatchSecondsDisplay.innerHTML="<input id='seconds-input'/>"
          },
          500
        )
      }
    },
    1000
  );
}

// STOP STOPWATCH
let stopStopwatch = function() {
  clearInterval(stopwatchId);
};
stopwatchStopButton.addEventListener('click', stopStopwatch)

// RESET STOPWATCH
let resetStopwatch = function() {
  clearInterval(stopwatchId);
  stopwatchSeconds = 0;
  stopwatchSecondsDisplay.innerHTML="<input id='seconds-input'/>"
};
stopwatchResetButton.addEventListener('click', resetStopwatch);