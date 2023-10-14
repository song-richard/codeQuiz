
let quizOn = true;
let currentQuestionIndex = 0;

const questionBank = [{
    Question: "Inside which HTML element do we put the JavaScript?",
    Answer: {
        A: "<javascript>",
        B: "<scripting>",
        C: "<js>",
        D: "script>",
    }
}, {
    Question: "Where is the correct place to insert a JavaScript?",
    Answer: {
        A: "<head>",
        B: "<body>",
        C: "<footer>",
        D: "<html>",
    }
}, {
    Question: "How do you write 'Hello World' in an alert box?",
    Answer: {
        A: "alertBox('Hello World')",
        B: "msg('Hello World')",
        C: "alert('Hello World')",
        D: "msgBox('Hello World')",
    }
}, {
    Question: "How do you create a function in JavaScript?",
    Answer: {
        A: "function:myFunction()",
        B: "function = myFunction()",
        C: "function myFunction()",
        D: "function let myFunction()",
    }
}];

//QuerySelectors'
let questionDiv = document.querySelector('#questionDiv')
let aDIV = document.querySelector('#a')
let bDIV = document.querySelector('#b')
let cDIV = document.querySelector('#c')
let dDIV = document.querySelector('#d')
let startQuizBtn = document.querySelector('#startQuiz-btn')
let nextQuizBtn = document.querySelector('#nextQuestion-btn')
//--------

// Function for "Start Quiz" and displays the first question
startQuizBtn.addEventListener('click', function() {
    questionDiv.textContent = questionBank[0].Question;

    for (let option in questionBank[0].Answer) {
        if (option === 'A') {
            aDIV.textContent = questionBank[0].Answer[option];
        } else if (option === 'B') {
            bDIV.textContent = questionBank[0].Answer[option];
        } else if (option === 'C') {
            cDIV.textContent = questionBank[0].Answer[option];
        } else if (option === 'D') {
            dDIV.textContent = questionBank[0].Answer[option];
        }
    }
    currentQuestionIndex++;
});

//Function for "Next"
// nextQuizBtn.addEventListener('click', function() {
//     for (let question in questionBank[0].Question) {
//         questionDiv.textContent = questionBank[0].Question[question];
//     }
// })

nextQuizBtn.addEventListener('click', function () {
    // Check if there are more questions to display
    if (currentQuestionIndex < questionBank.length) {
      let currentQuestion = questionBank[currentQuestionIndex];
      questionDiv.textContent = currentQuestion.Question;
  
      for (let option in currentQuestion.Answer) {
        if (option === 'A') {
          aDIV.textContent = currentQuestion.Answer[option];
        } else if (option === 'B') {
          bDIV.textContent = currentQuestion.Answer[option];
        } else if (option === 'C') {
          cDIV.textContent = currentQuestion.Answer[option];
        } else if (option === 'D') {
          dDIV.textContent = currentQuestion.Answer[option];
        }
      }
      currentQuestionIndex++;
    }
  });

console.log(currentQuestionIndex)

//Function to check if user selection is correct
