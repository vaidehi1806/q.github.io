let quizData = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      answer: "Mars"
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "Jane Austen", "J.K. Rowling", "Ernest Hemingway"],
      answer: "Harper Lee"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  document.getElementById('startQuizBtn').addEventListener('click', startQuiz);
  document.getElementById('nextBtn').addEventListener('click', nextQuestion);
  document.getElementById('restartBtn').addEventListener('click', restartQuiz);
  
  function startQuiz() {
    document.querySelector('.quiz-container').style.display = 'none';
    document.querySelector('.quiz-area').style.display = 'block';
    loadQuestion();
  }
  
  function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    document.getElementById('quiz-question').textContent = currentQuestion.question;
  
    const optionsList = document.getElementById('quiz-options');
    optionsList.innerHTML = '';
    
    currentQuestion.options.forEach(option => {
      const li = document.createElement('li');
      li.textContent = option;
      li.onclick = () => checkAnswer(option);
      optionsList.appendChild(li);
    });
  }
  
  function checkAnswer(selectedOption) {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
      score++;
    }
    document.getElementById('nextBtn').disabled = false;
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    document.querySelector('.quiz-area').style.display = 'none';
    document.querySelector('.result-area').style.display = 'block';
    document.getElementById('result').textContent = `Your score is ${score} out of ${quizData.length}`;
  }
  
  function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    document.querySelector('.result-area').style.display = 'none';
    document.querySelector('.quiz-container').style.display = 'block';
  }
  