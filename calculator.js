function calculate() {
  const num1 = document.getElementById('num1').value;
  const num2 = document.getElementById('num2').value;
  const operator = document.getElementById('operator').value;
  let result;

  switch (operator) {
    case '+':
      result = Number(num1) + Number(num2);
      break;
    case '-':
      result = Number(num1) - Number(num2);
      break;
    case '*':
      result = Number(num1) * Number(num2);
      break;
    case '/':
      result = Number(num1) / Number(num2);
      break;
    default:
      result = 'Invalid operator.';
  }

  document.getElementById('calc-result').textContent = result;
}
