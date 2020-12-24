const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');

let timer = 60;

const myQuestions = [
    {
        question: "Inside which HTML element do we put the Javascript?",
        answers: {
            a: "Javascript",
            b: "Script",
            c: "CSS",
            d: "All of the Above"
        },
        correctAnswer: "a"
    },
    {
        question: "Javascript is a ___-side language.",
        answers: {
            a: "Client",
            b: "Server",
            c: "Both"
        },
        correctAnswer: "c"
    },
    {
        question: "Which is not a Javascript data type?",
        answers: {
            a: "boolean",
            b: "string",
            c: "array",

        },
        correctAnswer: "c"
    }
];

function startTimer(){
    setInterval(function() {
        console.log('ITS BEEN A SECOND');
        if (timer == 0) {
            // Game Over
            document.getElementById('timer').innerHTML = 'Game Over';
        } else {
            timer = timer-1;
            document.getElementById('timer').innerHTML = timer;
        }
    }, 1000);
}

function buildPageTwo() {
    let pageOutput = "";

    startTimer()
    
    for (let questionIndex = 0; questionIndex < myQuestions.length; questionIndex++) {
        const currentQuestion = myQuestions[questionIndex];
        
        let questionHtml = `<article class="question" id="question-${questionIndex}" >
            <h1>Question ${questionIndex + 1} of ${myQuestions.length}</h1>
            <p>${currentQuestion.question}</p>
            <div class='question-answers'>`;

        
        Object.keys(currentQuestion.answers).forEach((key) => {
            questionHtml += `<button onclick="answerQuestion(${questionIndex},'${key}')" value='${key}'>${currentQuestion.answers[key]}</button>`
        })

        questionHtml += `
            </div>
        </article>`;

        pageOutput += questionHtml;
    }

    
    document.getElementById('questionlist').innerHTML = pageOutput;
}


function startQuiz() {
    page1.style.display = 'none';
    buildPageTwo();
    page2.style.display = 'block';
}

function answerQuestion(question, answer){
    if (myQuestions[question].correctAnswer == answer){
        // if answer is correct
        
        
        document.getElementById('lastAnswer').innerHTML = "That was right!";
    } else {
        // if the answer isn't correct
        console.log('Boooo wrong');
        document.getElementById('lastAnswer').innerHTML = "That was wrong!";
        timer = timer - 15;
    }
    document.getElementById(`question-${question}`).style.display = 'none';
    document.getElementById(`question-${question + 1}`).style.display = 'block';
}