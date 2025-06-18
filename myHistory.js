function loadHistory() {
    const history = JSON.parse(localStorage.getItem("quizHistory")) || [];
    const containers = document.querySelectorAll(".history-container");
    containers.forEach(container => {
        const quizType = container.getAttribute("data-quiz");
        const entries = history.filter(entry => entry.quiz === quizType);

        container.innerHTML = "";

        if (entries.length === 0) {
            const p = document.createElement("p");
            p.textContent = "No data found!";
            p.style.fontStyle = "italic";
            p.style.color = "#777";
            container.appendChild(p);
        } else {
            const ul = document.createElement("ul");
            entries.forEach(e => {
                const li = document.createElement("li");
                li.textContent = `📆 ${e.date} ${e.time} | 🏆 Score: ${e.score}`;
                ul.appendChild(li);
            });
            container.appendChild(ul);
        }
    });
}

function clearHistory() {
    const confirmation = confirm("Are you sure you want to clear the quiz history?");
    if (confirmation) {
        localStorage.removeItem("quizHistory");
        loadHistory();
    }
}


window.onload = loadHistory;
