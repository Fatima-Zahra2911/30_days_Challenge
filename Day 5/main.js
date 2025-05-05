const quizData = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyperlinks and Text Markup Language",
        "Home Tool Markup Language"
      ],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      answer: "JavaScript"
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Central Style Sheets",
        "Cascading Style Sheets",
        "Cascading Simple Sheets",
        "Computer Style Sheets"
      ],
      answer: "Cascading Style Sheets"
    },
    {
      question: "Which year was JavaScript launched?",
      options: ["1996", "1995", "1994", "None of the above"],
      answer: "1995"
    }
  ];

  let currentQuestion = 0;
  let score = 0;

  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const feedbackEl = document.getElementById("feedback");
  const submitBtn = document.getElementById("submit");

  function loadQuestion() {
    const current = quizData[currentQuestion];
    questionEl.innerText = current.question;
    optionsEl.innerHTML = "";

    current.options.forEach((opt, index) => {
      const div = document.createElement("div");
      div.classList.add("form-check");

      div.innerHTML = `
        <input class="form-check-input" type="radio" name="option" id="option${index}" value="${opt}">
        <label class="form-check-label option-label" for="option${index}">
          ${opt}
        </label>
      `;
      optionsEl.appendChild(div);
    });
  }

  submitBtn.addEventListener("click", () => {
    const selected = document.querySelector('input[name="option"]:checked');
    if (!selected) {
      feedbackEl.textContent = "Please select an option!";
      feedbackEl.classList.add("text-danger");
      return;
    }

    const answer = selected.value;
    if (answer === quizData[currentQuestion].answer) {
      feedbackEl.textContent = "Correct!";
      feedbackEl.className = "text-success text-center mt-3";
      score++;
    } else {
      feedbackEl.textContent = `Wrong! Correct answer: ${quizData[currentQuestion].answer}`;
      feedbackEl.className = "text-danger text-center mt-3";
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
      setTimeout(() => {
        feedbackEl.textContent = "";
        loadQuestion();
      }, 1000);
    } else {
      setTimeout(() => {
        document.getElementById("quiz-content").innerHTML = `
          <h3 class="text-center">Quiz Completed!</h3>
          <p class="text-center fw-bold">Your Score: ${score} / ${quizData.length}</p>
          <div class="d-grid mt-3">
            <button class="btn btn-secondary" onclick="location.reload()">Restart Quiz</button>
          </div>
        `;
      }, 1200);
    }
  });

  loadQuestion();