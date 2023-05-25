class MathProblem {
  constructor(difficulty) {
    this.difficulty = difficulty;
  }

  generateProblem() {
    let num1, num2;

    switch (this.difficulty) {
      case 'easy':
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
        break;
      case 'medium':
        num1 = Math.floor(Math.random() * 100) + 1;
        num2 = Math.floor(Math.random() * 100) + 1;
        break;
      case 'hard':
        num1 = Math.floor(Math.random() * 1000) + 1;
        num2 = Math.floor(Math.random() * 1000) + 1;
        break;
    }

    const operators = ['+', '-', '*', '/'];
    const operation = operators[Math.floor(Math.random() * operators.length)];

    switch (operation) {
      case '+':
        this.answer = num1 + num2;
        this.problem = `${num1} + ${num2} = ?`;
        break;
      case '-':
        this.answer = num1 - num2;
        this.problem = `${num1} - ${num2} = ?`;
        break;
      case '*':
        this.answer = num1 * num2;
        this.problem = `${num1} * ${num2} = ?`;
        break;
      case '/':
        this.answer = num1 / num2;
        this.problem = `${num1} / ${num2} = ?`;
        break;
    }

    return this.problem;
  }

  checkAnswer(userAnswer) {
    return userAnswer == this.answer;
  }
}


let currentProblem;

function generateProblem() {
  currentProblem = new MathProblem('easy');  // Or 'medium' or 'hard'
  document.getElementById('problem').textContent = currentProblem.generateProblem();
  document.getElementById('answer').value = '';
}

document.getElementById('answer-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const userAnswer = document.getElementById('answer').value;
  if (currentProblem.checkAnswer(userAnswer)) {
    document.getElementById('message').textContent = 'Correct!';
  } else {
    document.getElementById('message').textContent = `Sorry, that's wrong. The correct answer was ${currentProblem.answer}.`;
  }
  generateProblem();
});

generateProblem();
