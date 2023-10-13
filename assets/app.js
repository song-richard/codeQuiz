let questionOne = document.getElementById('question')
let answerOptionsSpan = document.getElementById('answerOptions')


const quizBank = {
        question: "Inside which HTML element do we put the JavaScript?",
        possibleAnswers: {
            a: '<scripting',
            b: '<script>',
            c: '<javascript>',
            d: '<js>'
        },
        correctAnswer: 'b'
    }


//Loop through every question in bank
for (i = 0; i < quizBank.length; i++) {
    const question = quizBank[i].question;
    const answers = quizBank[i].possibleAnswers;
    // const correctAnswer = quizBank[i].correctAnswer

    questionOne.innerHTML = question
}

//Loop through every answer in possibleAnswers and display

const answers = quizBank.possibleAnswers
const newList = document.createElement('ul')


for (item in answers) {
    const newListItem = document.createElement('li')
    newListItem.textContent = answers[item]
    newList.appendChild(newListItem)
}

answerOptionsSpan.appendChild(newList)


// Append the list of answers to the answerOptions div

//Function to check if user's answer matches current question's answer


//Function to show if Correct or Incorrect 