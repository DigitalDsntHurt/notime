const bell = new Audio('bell.mp3');

//////////// //////////// //////////// ////////////
//////////// //////////// //////////// ////////////
//////////// //////////// //////////// ////////////
//////////// //////////// //////////// ////////////
// STOPWATCH
function minsAndSecsToSecs(mins, secs) {
  return mins * 60 + secs;
}

function secsToMinsAndSecs(secs) {
  let minsDivision = secs / 60;
  let wholeMins = String(Math.trunc(minsDivision));
  let tmp = String(minsDivision).split('.');
  tmp[0] = 0;
  let minFraction = parseFloat(tmp.join('.'));
  let secos = String(Math.round(minFraction * 60));
  let displayString = ''
  if (wholeMins.length === 1) {
    displayString += 0 + wholeMins + ':'
  } else {
    displayString += wholeMins + ':'
  }
  if (secos.length === 1) {
    displayString += 0 + secos
  } else {
    displayString += secos
  }
  return displayString;
}

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
    let inputMins = Number.parseInt(stopwatchBox.querySelector('#minutes-input').value);
    let inputSecs = Number.parseInt(stopwatchBox.querySelector('#seconds-input').value);
    stopwatchSeconds = minsAndSecsToSecs(inputMins, inputSecs);
  }
  stopwatchId = setInterval(
    function() {
      if (stopwatchSeconds > 0) {
        stopwatchSecondsDisplay.textContent=secsToMinsAndSecs(stopwatchSeconds);
        document.querySelector('title').textContent=secsToMinsAndSecs(stopwatchSeconds);
        stopwatchSeconds--;
      } else {
        bell.play();
        stopwatchSecondsDisplay.textContent=stopwatchSeconds;
        document.querySelector('title').innerHTML='tick.tock';
        clearInterval(stopwatchId);
        setTimeout(
          function() {
            stopwatchSecondsDisplay.innerHTML="<table align='center'><tr><td><input class='time-input' id='minutes-input' placeholder='minutes'/></td><td><input class='time-input' id='seconds-input' placeholder='seconds' value='0'/></td></tr></table>"
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
  stopwatchSecondsDisplay.innerHTML="<table align='center'><tr><td><input class='time-input' id='minutes-input' placeholder='minutes' /></td><td><input class='time-input' id='seconds-input' placeholder='seconds' value='0'/></td></tr></table>"
  document.querySelector('title').innerHTML='tick.tock';
};
stopwatchResetButton.addEventListener('click', resetStopwatch);

//////////// //////////// //////////// ////////////
//////////// //////////// //////////// ////////////
//////////// //////////// //////////// ////////////
//////////// //////////// //////////// ////////////
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
//////////// //////////// //////////// ////////////
//////////// //////////// //////////// ////////////
//////////// //////////// //////////// ////////////
//////////// //////////// //////////// ////////////