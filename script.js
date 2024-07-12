const questions = [
  {
    question: "Which is the Largest land animal?",
    answer: [
      { text: "Shark", correct: false },
      { text: "Whale", correct: false },
      { text: "Tiger", correct: false },
      { text: "Elephant", correct: true },
    ],
  },
  {
    question: "Who is India's current prime minister?",
    answer: [
      { text: "Narendra modi", correct: true },
      { text: "Lallu yadav", correct: false },
      { text: "Rajiv gandhi", correct: false },
      { text: "Mona lisa", correct: false },
    ],
  },
  {
    question: "Who was T20 2024 world cup winner?",
    answer: [
      { text: "West Indies", correct: false },
      { text: "Australia", correct: false },
      { text: "India", correct: true },
      { text: "Pakistan", correct: false },
    ],
  },
  {
    question: "Cristiano Ronaldo play's for which international team?",
    answer: [
      { text: "Argentina", correct: false },
      { text: "France", correct: false },
      { text: "Portugal", correct: true },
      { text: "Kuwait", correct: false },
    ],
  },
  {
    question: "HTML stands for?",
    answer: [
      { text: "Hypertext markup language ", correct: true },
      { text: "Hypertext makeup language", correct: false },
      { text: "Hyper market language", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "Who invented Gravity?",
    answer: [
      { text: "Lionel messi", correct: false },
      { text: "Kamla ben", correct: false },
      { text: "Isaac Newton", correct: true },
      { text: "Govinda", correct: false },
    ],
  },
  {
    question: "Who is known as King Khan?",
    answer: [
      { text: "Salman khan", correct: false },
      { text: "Aamir khan", correct: false },
      { text: "Shahrukh khan", correct: true },
      { text: "Atif khan", correct: false },
    ],
  },
  {
    question: "Which is the fifth planet of solar system?",
    answer: [
      { text: "Jupiter", correct: true },
      { text: "Uranus", correct: false },
      { text: "Neptune", correct: false },
      { text: "Earth", correct: false },
    ],
  },
  {
    question: "If 2+2 is equals to 4 then what will be 4+4?",
    answer: [
      { text: "10", correct: false },
      { text: "9", correct: false },
      { text: "4", correct: false },
      { text: "8", correct: true },
    ],
  },
  {
    question: ".... is the power house of cell",
    answer: [
      { text: "Mitochondria", correct: true },
      { text: "Animal", correct: false },
      { text: "Rabbit", correct: false },
      { text: "Blood", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answer-btns");
const nextBtn = document.getElementById("next-btn");

let currentQuesitonIndex = 0;
let score = 0;

function startQuiz() {
  currentQuesitonIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}

function resetState() {
  nextBtn.style.display = "none";
  while (answerBtn.firstChild) {
    answerBtn.removeChild(answerBtn.firstChild);
  }
}
function showQuestion() {
  resetState();
  let currentQuesiton = questions[currentQuesitonIndex];
  let questionNo = currentQuesitonIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuesiton.question;

  currentQuesiton.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerBtn.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerBtn.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
  nextBtn.innerHTML = "Play again";
  nextBtn.style.display = "block";
}

function handleNextBtn() {
  currentQuesitonIndex++;
  if (currentQuesitonIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextBtn.addEventListener("click", () => {
  if (currentQuesitonIndex < questions.length) {
    handleNextBtn();
  } else {
    startQuiz();
  }
});

startQuiz();
