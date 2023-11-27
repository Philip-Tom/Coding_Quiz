const quiz = [{
    question: "Commonly Used data types DO NOT Include :",
    ans1text: "strings",
    ans2text: "booleans",
    ans3text: "alerts",
    ans4text: "number",
    answer: "alerts",
},
{
    question: "The Condition in an if/else statement is encloded with____?",
    ans1text: "quotes",
    ans2text: "curly brackets",
    ans3text: "paranthesis",
    ans4text: "square brackets",
    answer: "curly brackets",
},
{
    question: "Arrays in javascript can be used to store____?",
    ans1text: "numbers and strings",
    ans2text: "other arrays",
    ans3text: "boolean",
    ans4text: "all of the above",
    answer: "numbers and strings",
},
{
    question: "What year was JavaScript launched?",
    ans1text: "1996",
    ans2text: "1995",
    ans3text: "1994",
    ans4text: "none of the above",
    answer: "1995",
}
];


const question = document.getElementById("quiz-question");
const optionA = document.getElementById("option-a");
const optionB = document.getElementById("option-b");
const optionC = document.getElementById("option-c");
const optionD = document.getElementById("option-d");
const feedback = document.getElementById("feedback");
const divider = document.getElementById("divider");
const final_result_container = document.getElementsByClassName("final_result")[0];

const start = document.getElementById("start-btn");

const highestScoreButton = document.getElementById("highestScoreButton");

const topElement = document.getElementsByClassName("top")[0]
const containerElement = document.getElementsByClassName("starting-quiz")[0]
const Highscore_name = document.getElementsByClassName("name_high")[0]
const highscore_container = document.getElementsByClassName("higest_score")[0]
const quiz_container = document.getElementsByClassName("quiz-container")[0]
const inputName = document.getElementsByClassName("quiz-container")[0]
const inputResultShow = document.getElementsByClassName("result_score")[0]
const inputElement = document.querySelector('.enterName');
const inputValue = inputElement.value;



let currentQuestion = 0;
let score = 0;

// Load highest score from localStorage
let highestScore = localStorage.getItem("highestScore") || 0;

function loadQuestion() {
const currentQuiz = quiz[currentQuestion];
question.textContent = currentQuiz.question;
optionA.textContent = "1 " + currentQuiz.ans1text;
optionB.textContent = "2 " + currentQuiz.ans2text;
optionC.textContent = "3 " + currentQuiz.ans3text;
optionD.textContent = "4 " + currentQuiz.ans4text;
}

function showFeedback(isCorrect) {
divider.style.display = "block";
feedback.textContent = isCorrect ? "Correct!" : "Wrong!";
}

function clearFeedback() {
divider.style.display = "none";
feedback.textContent = "";
}

function updateHighestScore(name) {
// Update highest score if the current score is higher
if (score > highestScore) {
    highestScore = score;
    localStorage.setItem("highestScore", name + " " + highestScore);
}
}

function moveToNextQuestion() {
setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < quiz.length) {
        loadQuestion();
        clearFeedback();
    } else {

        const result_value = "Your final score is " + score
        inputResultShow.innerHTML = result_value
        quiz_container.style.display = "none"
        final_result_container.style.display = "block"


    }
}, 1000);
}

document.querySelectorAll('.option').forEach(function (option) {
option.addEventListener('click', function () {
    const selectedOption = option.textContent.substring(2);
    const isCorrect = selectedOption === quiz[currentQuestion].answer;
    showFeedback(isCorrect);

    if (isCorrect) {
        score++;
    }

    moveToNextQuestion();
});
});

// Display highest score on button click
highestScoreButton.addEventListener('click', function () {

highscore_container.style.display = "block"

quiz_container.style.display = "none"
containerElement.style.display = "none";
final_result_container.style.display = "none"
});


let timeRemaining = 60; // 60 seconds
function updateTimer() {
document.getElementById('timer').textContent = `Time: ${timeRemaining}s`;

if (timeRemaining > 0) {
    timeRemaining--;
    setTimeout(updateTimer, 1000); // Update every second
} else {
    // Timer expired, handle accordingly
    alert('Time is up!');
    location.reload(); // Reload the page or perform any other action
}
}

updateTimer(); // Start the timer


Highscore_name.innerHTML = localStorage.getItem("highestScore")


// Initial question load
loadQuestion();

function startNow() {
containerElement.style.display = "none";
quiz_container.style.display = "block"
}

function SaveToData() {
const inputValue = inputElement.value;
updateHighestScore(inputValue);
highscore_container.style.display = "block"
final_result_container.style.display = "none"

}

function clearscore() {
localStorage.clear()
Highscore_name.innerHTML = localStorage.getItem("highestScore")

}

function goback() {
// Initial question load
location.reload()
}