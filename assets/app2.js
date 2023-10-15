
let currentQuestionIndex = 0;
let currentScore = 0;
let triesRemaining = 1;

const questionBank = [
    {
    Question: "Inside which HTML element do we put the JavaScript?",
    Answer: {
        A: "<javascript>",
        B: "<scripting>",
        C: "<js>",
        D: "<script>",
    },
    correctAnswer: "D"
}, 
{
    Question: "Where is the correct place to insert a JavaScript?",
    Answer: {
        A: "<head>",
        B: "<body>",
        C: "<footer>",
        D: "<html>",
    },
    correctAnswer: "B"
}, 
{
    Question: "How do you write 'Hello World' in an alert box?",
    Answer: {
        A: "alertBox('Hello World')",
        B: "msg('Hello World')",
        C: "alert('Hello World')",
        D: "msgBox('Hello World')",
    },
    correctAnswer: "C"
}, 
{
    Question: "How do you create a function in JavaScript?",
    Answer: {
        A: "function:myFunction()",
        B: "function = myFunction()",
        C: "function myFunction()",
        D: "function let myFunction()",
    },
    correctAnswer: "B"
}];

//QuerySelectors'
let questionDiv = document.querySelector('#questionDiv')
let aDIV = document.querySelector('#a')
let bDIV = document.querySelector('#b')
let cDIV = document.querySelector('#c')
let dDIV = document.querySelector('#d')
let currentScoreDiv = document.querySelector('#currentScore')
let startQuizBtn = document.querySelector('#startQuiz-btn')
let introDiv = document.querySelector('#intro')
let highScoreUL = document.querySelector('#highScores')
let highScoreForm = document.querySelector('#highScoreForm')
let submitScoreBtn = document.querySelector('#submitScore')
let showHighScoreBtn = document.querySelector('#showHighScores')
let userNameInput = document.querySelector('#userName')
//--------

//Helper Functions

function displayScoreScreen() {
    introDiv.textContent = `Your Final Score: ${currentScore}`
    questionDiv.style.display = 'none'
    aDIV.style.display= 'none'
    bDIV.style.display= 'none'
    cDIV.style.display= 'none'
    dDIV.style.display= 'none'
    currentScoreDiv.style.display = 'none'
    startQuizBtn.style.display = 'none'
}

function hideStartButton() {
    let hideStartQuiz = document.getElementById('startQuiz-btn');
    hideStartQuiz.style.display = 'none'
}

function displayHighSchoolForm() {
    highScoreForm.style.display = 'inline'
}

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
    hideStartButton()
    currentQuestionIndex++;
});

function nextQuestion() {
    // Checks if there are more questions to display
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
    } else {
        if (currentQuestionIndex >= 4) {
            displayScoreScreen() 
            displayHighSchoolForm()
        }
    }
  }

//Add Event.target to check and increment score
let answerOptions = document.querySelectorAll('.option');
answerOptions.forEach(function(option) {
option.addEventListener('click', function(event) {
    let clickedValue = event.target.getAttribute('data-value'); // Gets the value using the data attribute
    let currentQuestion = questionBank[currentQuestionIndex - 1]; // Gets the current question
    if (clickedValue === currentQuestion.correctAnswer) {
    currentScore++;
    currentScoreDiv.textContent = `Correct! Current Score: ${currentScore}`
    nextQuestion()
    } else {
        currentScoreDiv.textContent = `Incorrect! Current Score: ${currentScore}`
        nextQuestion()
    }
    console.log("Clicked Value: " + clickedValue);
    console.log("Current Score: " + currentScore);
    });
});

//

let highScores = [];

//Submit Score Button
submitScoreBtn.addEventListener('click', function() {
    let userNameValue = document.querySelector('#userName').value;
    let highScoreValue = currentScore;

    // Create an object to store the username and score
    const userScore = {
        username: userNameValue,
        score: highScoreValue,
    };

    // Add the user score to the highScores array
    highScores.push(userScore);

    // Save the updated highScores array in local storage
    localStorage.setItem('highScores', JSON.stringify(highScores));
    userNameInput.value = ""
});

//Show High Score Button
showHighScoreBtn.addEventListener('click', function() {
    // Clear the current high score list in the UI
    highScoreUL.innerHTML = '';

    // Sort the highScores array in descending order of scores
    highScores.sort((a, b) => b.score - a.score);

    // Display each high score in the UI
    highScores.forEach(score => {
        let newLI = document.createElement('li');
        newLI.textContent = `Name: ${score.username}  Score: ${score.score}`;
        highScoreUL.append(newLI);
    });
});

// Get high scores from local storage if available
const storedHighScores = localStorage.getItem('highScores');
if (storedHighScores) {
    highScores = JSON.parse(storedHighScores);
}