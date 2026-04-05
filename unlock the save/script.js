const TOTAL_STEPS = 3;

let currentStep = 0;
let safeCode = [];
let selectedHints = [];

const codeDisplay =
  document.getElementById("code");
const resultDisplay =
  document.getElementById("result");
const hintDisplay =
  document.getElementById("hint");

const hintBank = [
{
  text: "number must be ODD",
  check: n => n % 2 === 1
},
{
  text: "number must be EVEN",
  check: n => n % 2 === 0
},
{
  text: "number must be > 5",
  check: n => n > 5
},
{
  text: "number must be < 4",
  check: n => n < 4
},
{
  text: "number must be 7",
  check: n => n === 7
},
{
  text: "number must be GREATER than 3",
  check: n => n > 3
},

{
  text: "number must be LESS than 8",
  check: n => n < 8
},

{
  text: "number must be between 2 and 6",
  check: n => n >= 2 && n <= 6
},

{
  text: "number must NOT be 5",
  check: n => n !== 5
},
{
  text: "number must be multiple of 3",
  check: n => n % 3 === 0
}
];

function startGame() {
  currentStep = 0;
  safeCode = [];
  selectedHints =
    shuffleArray(hintBank)
    .slice(0, TOTAL_STEPS);
  updateCodeDisplay();
  updateHint();
  clearResult();
}

function pick(number) {
  const currentHint =
    selectedHints[currentStep];
  const isCorrect =
    currentHint.check(number);
  if (isCorrect) {
    safeCode.push(number);
    currentStep++;
    updateCodeDisplay();
    if (currentStep < TOTAL_STEPS) {
      updateHint();
    } else {
      showWin();
    }
  } else {
    showError();
  }
}

function updateCodeDisplay() {

  if (safeCode.length === 0) {
    codeDisplay.innerText = "_ _ _";

  } else {
    codeDisplay.innerText =
      safeCode.join(" ");
  }
}

function updateHint() {
  hintDisplay.innerText =
    selectedHints[currentStep].text;
}

function showWin() {
  resultDisplay.innerText =
    "🎉 Safe Unlocked!";
}

function showError() {
  resultDisplay.innerText =
    "❌ wrong number";
}

function clearResult() {
  resultDisplay.innerText = "";
}
function shuffleArray(array) {
  return [...array]
    .sort(() => Math.random() - 0.5);
}

startGame();
