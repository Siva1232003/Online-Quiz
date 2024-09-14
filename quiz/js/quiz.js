const quizData = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Rome", "Berlin"],
        correct: "Paris"
    },
    {
        question: "Which language is used for web development?",
        answers: ["Python", "C#", "JavaScript", "Java"],
        correct: "JavaScript"
    },
    {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correct: "4"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: ["Harper Lee", "J.K. Rowling", "F. Scott Fitzgerald", "Ernest Hemingway"],
        correct: "Harper Lee"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.querySelector('.question');
const answersElement = document.querySelector('.answers');
const nextButton = document.getElementById('next-btn');
const submitButton = document.getElementById('submit-btn');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const retryButton = document.getElementById('retry-btn');

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = '';
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.classList.add('answer');
        button.addEventListener('click', () => selectAnswer(answer, currentQuestion.correct));
        answersElement.appendChild(button);
    });
}

function selectAnswer(selected, correct) {
    if (selected === correct) {
        score++;
    }
    document.querySelectorAll('.answer').forEach(button => {
        button.disabled = true;
        if (button.textContent === correct) {
            button.style.backgroundColor = 'green';
        } else if (button.textContent === selected) {
            button.style.backgroundColor = 'red';
        }
    });
    nextButton.style.display = currentQuestionIndex < quizData.length - 1 ? 'block' : 'none';
    submitButton.style.display = currentQuestionIndex === quizData.length - 1 ? 'block' : 'none';
}

function showResult() {
    quiz.style.display = 'none';
    resultElement.style.display = 'block';
    scoreElement.textContent = `${score} / ${quizData.length}`;
}

function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    quiz.style.display = 'block';
    resultElement.style.display = 'none';
    loadQuestion();
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    loadQuestion();
    nextButton.style.display = 'none';
    submitButton.style.display = 'none';
});

submitButton.addEventListener('click', showResult);
retryButton.addEventListener('click', restartQuiz);

loadQuestion();
