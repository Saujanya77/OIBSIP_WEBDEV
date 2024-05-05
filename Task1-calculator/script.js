const display = document.getElementById('screen');
let currentInput = '';

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', function() {
    const value = this.textContent;
    if (value === 'C') {
      currentInput = '';
    } else if (value === 'CE') {
      currentInput = currentInput.slice(0, -1);
    } else if (value === '=') {
      try {
        currentInput = eval(currentInput).toString();
      } catch (error) {
        currentInput = 'Error';
      }
    } else {
      currentInput += value;
    }
    display.value = currentInput;
  });
});
