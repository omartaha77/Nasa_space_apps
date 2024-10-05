const quizData = [
    {
        question: "What is the capital of France?",
        a: "New York",
        b: "London",
        c: "Paris",
        d: "Tokyo",
        correct: "c",
    },
    {
        question: "Who is the CEO of Tesla?",
        a: "Bill Gates",
        b: "Elon Musk",
        c: "Jeff Bezos",
        d: "Mark Zuckerberg",
        correct: "b",
    },
    {
        question: "What is the most used programming language in 2024?",
        a: "Java",
        b: "Python",
        c: "JavaScript",
        d: "C#",
        correct: "c",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "None of the above",
        correct: "b",
    }
];

const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const scoreDisplay = document.getElementById("score");

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    quizContainer.innerHTML = `
        <h3>${currentQuizData.question}</h3>
        <label><input type="radio" name="answer" value="a"> ${currentQuizData.a}</label><br>
        <label><input type="radio" name="answer" value="b"> ${currentQuizData.b}</label><br>
        <label><input type="radio" name="answer" value="c"> ${currentQuizData.c}</label><br>
        <label><input type="radio" name="answer" value="d"> ${currentQuizData.d}</label><br>
    `;
}

function getSelected() {
    const answerEls = document.querySelectorAll("input[name='answer']");
    let selectedAnswer;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            selectedAnswer = answerEl.value;
        }
    });
    return selectedAnswer;
}

submitButton.addEventListener("click", () => {
    const selectedAnswer = getSelected();

    if (selectedAnswer === quizData[currentQuiz].correct) {
        score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        quizContainer.innerHTML = `<h3>You answered ${score} out of ${quizData.length} questions correctly.</h3>`;
        scoreDisplay.innerHTML = `Your final score is: ${score}`;
    }
});

// Load the first quiz
loadQuiz();
