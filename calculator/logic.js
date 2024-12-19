let display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');


numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    display.value += button.textContent; 
  });
});


operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    display.value += button.textContent; 
  });
});


equalsButton.addEventListener('click', () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    alert('Invalid Calculation'); 
    clearDisplay();
  }
});

function clearDisplay() {
  display.value = ''; 
}

clearButton.addEventListener('click', clearDisplay);
