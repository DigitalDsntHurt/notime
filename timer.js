
const startButton =  document.querySelector('#start');
const stopButton =  document.querySelector('#stop');
const resetButton =  document.querySelector('#reset');
const secondsDisplay = document.querySelector('h2.time');
let count = 0;
secondsDisplay.textContent=count;
let timerId;
// START THE TIMER
let timer = function(){
  timerId = setInterval(
    function() {
      count++;
      secondsDisplay.textContent=count;
    },
    1000
  );
};
startButton.addEventListener('click', timer);

// STOP THE TIMER
let stopTimer = function() {
  clearInterval(timerId);
};
stopButton.addEventListener('click', stopTimer);

// RESET THE TIMER
let resetTimer = function() {
  clearInterval(timerId);
  count = 0;
  secondsDisplay.textContent=count;
};
resetButton.addEventListener('click', resetTimer);