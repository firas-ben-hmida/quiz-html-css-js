let currentQuestionIndex = 0;
let score = 0;
let questions = [];
let quizChoice = "";

const question = document.getElementById("question");
const choices = document.getElementById("choices");
const nextBtn = document.getElementById("next-btn");
const PlayerScore = document.getElementById("score");

function loadQuiz(choice) {
    quizChoice = choice;
    fetch("questions.json")
        .then(res => res.json())
        .then(data => {
        switch (choice) {
            case "JavaScript":
            questions = data.JavaScript;
            break;
            case "PHP":
            questions = data.PHP;
            break;
            case "Tennis":
            questions = data.Tennis;
            break;
            default:
            console.error("Unknown choice:", choice);
            questions = [];
        }

        currentQuestionIndex = 0;
        score = 0;
        PlayerScore.textContent = `Score: ${score}`;
        showQuestion();
        });
}

function showQuestion() {
    nextBtn.classList.add("hidden");
    choices.innerHTML = "";
    const q = questions[currentQuestionIndex];
    question.textContent = `${currentQuestionIndex + 1}. ${q.question}`;

    for (let i = 1; i <= 4; i++) {
        const btn = document.createElement("button");
        btn.textContent = q[`choice${i}`];
        btn.addEventListener("click", () => selectAnswer(btn, q.answer));
        choices.appendChild(btn);
    }
}

function selectAnswer(button, correctAnswer) {
    const isCorrect = button.textContent === correctAnswer;
    if (isCorrect) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }

    Array.from(choices.children).forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correctAnswer) {
        btn.classList.add("correct");
        }
    });

    nextBtn.classList.remove("hidden");
    PlayerScore.textContent = `Score: ${score}`;
}

nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult(quizChoice);
    }
});

function showResult(quizChoice) {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    const result = {
        quiz: quizChoice,
        score: `${score}/${questions.length}`,
        date: date,
        time: time,
    };

    const history = JSON.parse(localStorage.getItem("quizHistory")) || [];
    history.push(result);
    localStorage.setItem("quizHistory", JSON.stringify(history));
    question.textContent = "🎉 Quiz Finished!";
    choices.innerHTML = `
    <p>Your final score is ${score}/${questions.length}</p>
    <button id="back-btn">🏠 Back</button>
    `;
    nextBtn.classList.add("hidden");

    const backBtn = document.getElementById("back-btn");
    backBtn.addEventListener("click", () => {
        window.location.href = "quiz.html";
    });
}
