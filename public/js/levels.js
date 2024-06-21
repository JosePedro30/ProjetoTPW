import * as Room from "../../models/room.js";
import * as Question from "../../models/question.js";
import * as User from "../../models/user.js";

Room.init();
Question.init();
User.init();

//Get score in local storage
const score=localStorage.getItem("Score")

//Get variable in url
const urlParams = new URLSearchParams(window.location.search);
const levelId = urlParams.get("levelId");
const roomId=urlParams.get("roomId")

//Find what level is
let level;
const room = Room.roomDoc.find((room) => room.id == roomId);
if (room) {
  level = room.levels.find((level) => level.id == levelId);
}

let loggedUser = User.userAuth();
const questions = level.questions;

// Set the innerHTML of the title element
const title = document.querySelector("h3");
title.innerHTML = `${level.name}`;

//Modal
const modal=document.getElementById("modal")
const modalBody=document.querySelector(".modal-body")
const h2=document.querySelector(".modal-content h2")

// Increment variables
let currentQuestionIndex = 0;
let correctAnswers=0

//Function to check if answer is correct
function checkAnswer(selectedOption, currentQuestion, loggedUser) {
  if (selectedOption === currentQuestion.options[currentQuestion.solution]) {
    updateScore(loggedUser);
    correctAnswers++
  }
  
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    renderLevel();
  }else if(currentQuestionIndex==questions.length){
    modal.style.display="flex"
    h2.innerHTML=`Level ${levelId} Finished!`
    modalBody.innerHTML=`<div><p>You answered ${correctAnswers} questions correctly of ${questions.length}!</p></div>
    <div><p>Score: +${score*correctAnswers}</p></div>
    <div><a href="./room.html?roomId=${roomId}">Back to Room</a></div>`
    updateQuestions(loggedUser,correctAnswers)
  }
}

//Function to render Level
function renderLevel() {
  const questionImage = document.querySelector(".question-image");
  const questionTitle = document.querySelector(".question-title");
  const questionOptions = document.querySelector(".question-options");

  // Get the current question
  const currentQuestion = questions[currentQuestionIndex];

  questionImage.innerHTML = `<img src="${currentQuestion.image}">`;

  // Set the question title
  questionTitle.innerHTML = `<p>${currentQuestion.name}</p>`;

  // Clear previous question options
  questionOptions.innerHTML = "";

  // Modifique o loop que cria os botões de opção
  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.classList.add("option-button");
    button.classList.add("col-sm-6");
    button.textContent = option;
    questionOptions.appendChild(button);

    // Adicione o evento de clique ao botão
    button.addEventListener("click", function () {
      checkAnswer(option, currentQuestion, loggedUser);
    });
  });
}

//Function to update user score
function updateScore(loggedUser) {
  const userIndex = User.userDoc.findIndex((item) => item.id === loggedUser.id);
  if (userIndex !== -1) {
    User.userDoc[userIndex].score += 25;
    localStorage.setItem("userDoc", JSON.stringify(User.userDoc));
    sessionStorage.setItem("userInSession", JSON.stringify(User.userDoc[userIndex]));
  }
}

//Function to add the correct questions to user questions
function updateQuestions(loggedUser,correctAnswers){
  const userIndex = User.userDoc.findIndex((item) => item.id === loggedUser.id);
  if (userIndex !== -1) {
    User.userDoc[userIndex].questions[levelId-1]=correctAnswers
    localStorage.setItem("userDoc", JSON.stringify(User.userDoc));
    sessionStorage.setItem("userInSession", JSON.stringify(User.userDoc[userIndex]));
  }
}

renderLevel();