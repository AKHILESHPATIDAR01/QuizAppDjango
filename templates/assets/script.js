const quizData = [
    {
        question: "What is the most used programming language in 2019 ?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },

    {
        question: "What does HTML stands for ?",
        a: "HyperText Markup Language",
        b: "Cascading Style Sheet",
        c: "Json Object Notation",
        d: "Helicopters terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched ?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Which type of JavaScript language is ___?",
        a: "Object-Oriented",
        b: "Object-Based",
        c: "Assembly-language",
        d: "High-level",
        correct: "b",
    },
    {
        question: "Which one of the following also known as Conditional Expression:",
        a: "Alternative to if-else",
        b: "Switch statement",
        c: "If-then-else statement",
        d: "immediate if",
        correct: "d",
    },
]

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionE1 = document.getElementById("question");
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById("submit");

const showTotalQuestion = document.getElementById("allQ");

let currentQuiz = 0;
let score = 0;



loadQuiz();

function loadQuiz() {
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];

    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}


function getSelected(){
    

    let answer = undefined;

    answerEls.forEach((answerEls) => {
        if(answerEls.checked){
            answer = answerEls.id;
        }
    });

    return answer;



}

function deselectAnswer(){
    answerEls.forEach((answerEls) => {
        answerEls.checked = false;
    }
)};


submitBtn.addEventListener("click" , () =>{
    
    
    const answer = getSelected();
    console.log(answer);
    if(answer){
        
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        
        currentQuiz++;

        if(currentQuiz < quizData.length){
             loadQuiz();
        }
        else{
           quiz.innerHTML = `<h2> You answered correctly at ${score}/${quizData.length} questions </h2>
           <button onclick="location.reload()">Reload</button>
           `
        }
    }
    
})