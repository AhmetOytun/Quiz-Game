import {QUESTIONS} from "./questions.js"

let questionBody=document.getElementById("questionbody");

const questionBox=document.createElement("div");
const question=document.createElement("span");
questionBox.setAttribute("id","questionbox");

const choiceBox1=document.createElement("div");
const choice1=document.createElement("span");
choiceBox1.setAttribute("id","choicebox")

const choiceBox2=document.createElement("div");
const choice2=document.createElement("span");
choiceBox2.setAttribute("id","choicebox")

const choiceBox3=document.createElement("div");
const choice3=document.createElement("span");
choiceBox3.setAttribute("id","choicebox")

const choiceBox4=document.createElement("div");
const choice4=document.createElement("span");
choiceBox4.setAttribute("id","choicebox")

initBoard();
eventListeners();
questionMaker(QUESTIONS,1);

function check1(){
    console.log("first choice");
}

function check2(){
    console.log("second choice");
}

function check3(){
    console.log("third choice");
}

function check4(){
    console.log("fourth choice");
}

function initBoard(){
    questionBody.appendChild(questionBox);
    questionBody.appendChild(choiceBox1);
    questionBody.appendChild(choiceBox2);
    questionBody.appendChild(choiceBox3);
    questionBody.appendChild(choiceBox4);
    questionBox.appendChild(question);
    choiceBox1.appendChild(choice1);
    choiceBox2.appendChild(choice2);
    choiceBox3.appendChild(choice3);
    choiceBox4.appendChild(choice4);
}
function eventListeners(){
    choiceBox1.addEventListener("click",check1);
    choiceBox2.addEventListener("click",check2);
    choiceBox3.addEventListener("click",check3);
    choiceBox4.addEventListener("click",check4);
}
function questionMaker(questions,questionNumber){
    question.textContent=QUESTIONS[questionNumber][0]
    let answer=QUESTIONS[questionNumber][5];
    choice1.textContent=QUESTIONS[questionNumber][1];
    choice2.textContent=QUESTIONS[questionNumber][2];
    choice3.textContent=QUESTIONS[questionNumber][3];
    choice4.textContent=QUESTIONS[questionNumber][4];
}