let display = document.getElementById('display');
// Numbers aur operators ke buttons select karein
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');

// Numbers buttons par click event add karein
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    display.value += button.textContent; 
  });
});

// Operators buttons par click event add karein
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    display.value += button.textContent; 
  });
});

// Equals button par click event
equalsButton.addEventListener('click', () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    alert('Invalid Calculation'); 
    clearDisplay();
  }
});

// Clear button par click event
clearButton.addEventListener('click', clearDisplay);

function clearDisplay() {
  display.value = ''; 
}
