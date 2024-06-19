function calculateFactorial() {
    const numberInput = document.getElementById('numberInput');
    const number = parseInt(numberInput.value);

  
    const result = Factorial(number);
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The factorial of ${number} is: ${result}`;
  }
  
  function Factorial(number) {
    
      if (number === 0 || number === 1) {
        return 1;
      }

    fact=1;
    for (i=2; i<=number; i++ ){
        fact=fact*i
    }
    return fact;

  }
  