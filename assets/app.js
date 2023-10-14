let questionOne = document.getElementById('question')
let answerOptionsSpan = document.getElementById('answerOptions')


const quizBank = [{
        question: "Inside which HTML element do we put the JavaScript?",
        possibleAnswers: {
            a: '<scripting',
            b: '<script>',
            c: '<javascript>',
            d: '<js>'
        },
        correctAnswer: 'b'
    }]


//Loop through every question in bank
for (i = 0; i < quizBank.length; i++) {
    const question = quizBank.question;
    // const correctAnswer = quizBank[i].correctAnswer

    questionOne.textContent = question
}

//Loop through every answer in possibleAnswers and display

const answers = quizBank[0].possibleAnswers
const newList = document.createElement('ul')


for (item in answers) {
    const newListItem = document.createElement('li')
    newListItem.textContent = answers[item]
    newList.appendChild(newListItem)
}

answerOptionsSpan.appendChild(newList)


//Function to check if user's answer matches current question's answer


//Function to show if Correct or Incorrect 