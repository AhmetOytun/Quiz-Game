import {QUESTIONS} from "./questions.js"

let count=0;
let gameover=false;
let usedQuestions=[];
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


let questionNumber=Math.floor(Math.random()*QUESTIONS.length);
let answer=QUESTIONS[questionNumber][5];
usedQuestions.push(questionNumber);

console.log(answer);
console.log(QUESTIONS[questionNumber][1]);
console.log(usedQuestions);

initBoard();
questionMaker(questionNumber);
eventListeners();
function winnerScreen(){
    alert("You Won!");
}
function loserScreen(){
    alert("You Lost!");
}
function check1(){
    if(confirm("Are You Sure?")){
        if(answer===QUESTIONS[questionNumber][1]){
            alert("True!");
            count++;
            if(count==5){
                winnerScreen();
                return;
            }
            while(true){
                questionNumber=Math.floor(Math.random()*QUESTIONS.length);
                answer=QUESTIONS[questionNumber][5];
                console.log(usedQuestions);
                console.log(questionNumber);
                if(questionNumber in usedQuestions){
                    continue
                }else{
                    usedQuestions.push(questionNumber);
                    break;
                }
            }
            questionMaker(questionNumber);
            console.log(usedQuestions)
        }
        else{
            loserScreen();
        }
    }  
}
function check2(){
    if(confirm("Are You Sure?")){
        if(answer===QUESTIONS[questionNumber][2]){
            alert("True!");
            count++;
            if(count==5){
                winnerScreen();
                return;
            }
            usedQuestions.push(questionNumber);
            while(true){
                questionNumber=Math.floor(Math.random()*QUESTIONS.length);
                answer=QUESTIONS[questionNumber][5];
                console.log(usedQuestions);
                console.log(questionNumber);
                if(questionNumber in usedQuestions){
                    continue
                }else{
                    usedQuestions.push(questionNumber);
                    break;
                }
            }
            questionMaker(questionNumber);
        }
        else{
            loserScreen();
        }
    }  
}
function check3(){
    if(confirm("Are You Sure?")){
        if(answer===QUESTIONS[questionNumber][3]){
            alert("True!");
            count++;
            if(count==5){
                winnerScreen();
                return;
            }
            usedQuestions.push(questionNumber);
            while(true){
                questionNumber=Math.floor(Math.random()*QUESTIONS.length);
                answer=QUESTIONS[questionNumber][5];
                console.log(usedQuestions);
                console.log(questionNumber);
                if(questionNumber in usedQuestions){
                    continue
                }else{
                    usedQuestions.push(questionNumber);
                    break;
                }
            }
            questionMaker(questionNumber);
        }
        else{
            loserScreen();
        }
    }  
}
function check4(){
    if(confirm("Are You Sure?")){
        if(answer===QUESTIONS[questionNumber][1]){
            alert("True!");
            count++;
            if(count==5){
                winnerScreen();
                return;
            }
            console.log(usedQuestions);
            while(true){
                questionNumber=Math.floor(Math.random()*QUESTIONS.length);
                answer=QUESTIONS[questionNumber][5];
                console.log(usedQuestions);
                console.log(questionNumber);
                if(questionNumber in usedQuestions){
                    console.log(iç);
                    continue
                }else{
                    usedQuestions.push(questionNumber);
                    break;
                }
            }
            questionMaker(questionNumber);
        }
        else{
            loserScreen();
        }
    }  
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
function questionMaker(questionNumber){
    question.textContent=QUESTIONS[questionNumber][0]
    choice1.textContent=QUESTIONS[questionNumber][1];
    choice2.textContent=QUESTIONS[questionNumber][2];
    choice3.textContent=QUESTIONS[questionNumber][3];
    choice4.textContent=QUESTIONS[questionNumber][4];
}