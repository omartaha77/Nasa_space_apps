const quizData = [
    {
        question: "What is Kepler-1338-b?",
        a: "A planet in our solar system",
        b: "A moon of Jupiter",
        c: "An exoplanet discovered by NASA's Kepler Mission",
        d: "A newly discovered asteroid",
        correct: "c",
    },
    {
        question: "How far is Kepler-1338-b from Earth?",
        a: "100 light-years",
        b: "200 light-years",
        c: "1,000 light-years",
        d: "2,500 light-years",
        correct: "b",
    },
    {
        question: "What does it mean for Kepler-1338-b to be an exoplanet?",
        a: "It orbits the Sun",
        b: "It orbits a star outside our solar system",
        c: "It is a dwarf planet",
        d: "It is a comet",
        correct: "c",
    },
    {
        question: "Which telescope was used to discover Kepler-1338-b?",
        a: "Hubble Space Telescope",
        b: "James Webb Space Telescope",
        c: "Kepler Space Telescope",
        d: "None Chandra X-ray Observatory",
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
