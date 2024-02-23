const qstn = document.getElementById("question");
const ans_btn = document.getElementById("ans-btns");
const nxt_btn = document.getElementById("nxt_btn");
let current_qstn_index = 0;
let score = 0;

const questions = [
  {
    question: "Which is the largest animal on earth ?",
    answers: [
      { text: "SHARK", correct: false },
      { text: "WHALE", correct: true },
      { text: "DINOSAUR", correct: false },
      { text: "GIRAFFE", correct: false },
    ],
  },
  {
    question: "Which is the largest continent on earth ?",
    answers: [
      { text: "ANTARCTICA", correct: false },
      { text: "ENGLAND", correct: false },
      { text: "AUSTRALIA", correct: false },
      { text: "ASIA", correct: true },
    ],
  },
  {
    question: "Which is the desert of India ?",
    answers: [
      { text: "GOBI", correct: false },
      { text: "SAHARA", correct: false },
      { text: "THOR", correct: true },
      { text: "KALAHARI", correct: false },
    ],
  },
  {
    question: "Which is the highest peak of earth ?",
    answers: [
      { text: "MOUNT ABU", correct: false },
      { text: "MOUNT EVEREST", correct: true },
      { text: "KANCHANJHANGHA", correct: false },
      { text: "K2K", correct: false },
    ],
  },
];
function startquiz() {
  current_qstn_index = 0;
  score = 0;
  nxt_btn.innerHTML = "Next";
  showquestion();
}
function showquestion() {
  resetState();

  // display the questions with qstn-no
  let current_qstn = questions[current_qstn_index];
  let qstn_no = current_qstn_index + 1;
  qstn.innerHTML = qstn_no + ". " + current_qstn.question;

  // display the answers
  current_qstn.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    ans_btn.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", function selectanswer(e) {
      const selectedBtn = e.target;
      if (selectedBtn.dataset.correct === "true") {
        selectedBtn.classList.add("correct");
        score++;
      } else {
        selectedBtn.classList.add("incorrect");
      }

      // if user put wrong input it will show the correct one

      Array.from(ans_btn.children).forEach((button) => {
        if (button.dataset.correct === "true") {
          button.classList.add("correct");
        }
        button.disabled = true;
      });
      nxt_btn.style.display = "block";
    });
  });
}

// helps to remove the previous data of answers
function resetState() {
  nxt_btn.style.display = "none";
  while (ans_btn.firstChild) {
    ans_btn.removeChild(ans_btn.firstChild);
  }
}

// helps to handle the work of next button
nxt_btn.addEventListener("click", () => {
  if (current_qstn_index < questions.length) {
    handle_nxt_btn();
  } else {
    startquiz();
  }
});

function handle_nxt_btn() {
  current_qstn_index++;
  if (current_qstn_index < questions.length) {
    showquestion();
  } else {
    showScore();
  }
}

// display the score
function showScore() {
  resetState();
  qstn.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nxt_btn.innerHTML = "Play New Game"
  nxt_btn.style.display = "block";
}

startquiz();
