const data= [
    {
        id:1,
        question: "Who is the headmaster of hogwarts in the epilogue?",
        answers :[
            {answer:"Albus Dumbledore" , isCorrect:false},
            {answer:"Minerva McGonagall",isCorrect:true},
            {answer:"Severus Snape",isCorrect:false},
            {answer:"Dolores Umbridge",isCorrect:false}
        ],
    },
    {
        id:2,
        question:"Which house did Cho Chang belong to?",
        answers:[
            {answer:"Gryffindor",isCorrect:false},
            {answer:"Slytherin",isCorrect:false},
            {answer:"Ravenclaw",isCorrect:true},
            {answer:"Hufflepuff",isCorrect:false}
        ],
    },
    {
        id:3,
        question:"Who was the prisoner of azkaban?",
        answers:[
            {answer:"Sirius Black",isCorrect:true},
            {answer:"Peter Pettigrew",isCorrect:false},
            {answer:"Remus Lupin",isCorrect:false},
            {answer:"Alastor Moody",isCorrect:false}
        ],
    },


];

const gameScreen=document.querySelector(".game")
const question=document.querySelector(".question")
const resultScreen=document.querySelector(".results")
const answerContainer=document.querySelector(".answers")
const submit=document.querySelector(".submit")
const play=document.querySelector(".play")

let qind=0;
let correctCount=0;
let wrongCount=0;
let score=0;
let selectedAns;
const playAgain=()=>{
     qind=0;
 correctCount=0;
 wrongCount=0;
 score=0;
showQuestion(qind)
}
play.addEventListener("click",()=>{
    resultScreen.style.display="none"
    gameScreen.style.display="block"
    playAgain()
})
const showResult =()=>{
    resultScreen.style.display="block"
    gameScreen.style.display="none"
    resultScreen.querySelector(".correct").innerHTML=
    `Correct Answers : ${correctCount}`
    resultScreen.querySelector(".wrong").innerHTML=
    `Wrong Answers : ${wrongCount}`
    resultScreen.querySelector(".score").innerHTML=
    `Score : ${(correctCount-wrongCount)*10}`
}
const showQuestion= (qNumber)=>{
    if(qind===data.length){
        return showResult()
    }
    selectedAns=null;
    question.textContent=data[qNumber].question;
    answerContainer.innerHTML=data[qNumber].answers.map((item,index)=>
        `
        <div class="answer">
        <input type="radio" id=${index} value=${item.isCorrect} name="answer">
            <label for=${index}>${item.answer}</label> </div>
        `
    ).join("");
    selectAnswer();
};

const selectAnswer= ()=>{
    answerContainer.querySelectorAll("input").forEach((el)=>{
        el.addEventListener("click",(e)=>{
            selectedAns=e.target.value;
        });
    });
}
const submitAns = ()=>{
    submit.addEventListener("click",()=>{
    if(selectedAns!==null){
    selectedAns==="true"? correctCount++ : wrongCount++ ;
    qind++ ;
    showQuestion(qind);}
    else{
        alert("Please choose an option!")
    }})
}
showQuestion(qind);
submitAns();