const display = document.getElementById('display');

    function clearDisplay() {
      display.innerText = '0';
    }

    function appendToDisplay(value) {
      if (display.innerText === '0') {
        display.innerText = value;
      } else {
        display.innerText += value;
      }
    }

    function deleteLast() {
      display.innerText = display.innerText.slice(0, -1);
      if (display.innerText === '') {
        display.innerText = '0';
      }
    }

    function calculateResult() {
      try {
        display.innerText = eval(display.innerText);
      } catch (e) {
        display.innerText = 'Error';
      }
    }