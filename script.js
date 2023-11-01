let questionBody=document.getElementById("questionbody");

const questionBox=document.createElement("div");
questionBox.setAttribute("id","questionbox");

const choiceBox1=document.createElement("div");
const question1=document.createElement("span");
choiceBox1.setAttribute("id","choicebox")

const choiceBox2=document.createElement("div");
const question2=document.createElement("span");
choiceBox2.setAttribute("id","choicebox")

const choiceBox3=document.createElement("div");
const question3=document.createElement("span");
choiceBox3.setAttribute("id","choicebox")

const choiceBox4=document.createElement("div");
const question4=document.createElement("span");
choiceBox4.setAttribute("id","choicebox")

initBoard();
eventListeners();
questionMaker("1987","1887","1546","1234");

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
    choiceBox1.appendChild(question1);
    choiceBox2.appendChild(question2);
    choiceBox3.appendChild(question3);
    choiceBox4.appendChild(question4);
}

function eventListeners(){
    choiceBox1.addEventListener("click",check1);
    choiceBox2.addEventListener("click",check2);
    choiceBox3.addEventListener("click",check3);
    choiceBox4.addEventListener("click",check4);
}
function questionMaker(question11,question22,question33,question44){
    question1.textContent=question11;
    question2.textContent=question22;
    question3.textContent=question33;
    question4.textContent=question44;
}