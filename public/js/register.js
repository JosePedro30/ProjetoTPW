import * as user from "../../models/user.js";

// renderForm();
user.init();

//Modal
const modal = document.getElementById("modal");
const h2 = document.querySelector(".modal-content h2");
const prg = document.querySelector(".modal-content p");
const close = document.getElementsByClassName("close")[0];
// Função que faz o Registo de utilizador
function register() {
  //Form
  const name = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("dateOfBirth").value;
  const gender = document.getElementById("gender").value;
  const pwd = document.getElementById("password").value;
  const confirmPwd = document.getElementById("confirm-password").value;

  if (pwd !== confirmPwd) {
    modal.style.display = "flex";
    h2.innerHTML = "Error";
    prg.innerHTML = "Passwords must be equal!";
    setTimeout(() => {
      modal.style.display = "none";
    }, 2000);
    return;
  }

  if (user.userDoc.find((user) => user.name === name)) {
    modal.style.display = "flex";
    h2.innerHTML = "Error";
    prg.innerHTML = "Already have an account with the same username!";
    setTimeout(() => {
      modal.style.display = "none";
    }, 2000);
    return;
  }

  if (user.userDoc.find((user) => user.email === email)) {
    modal.style.display = "flex";
    h2.innerHTML = "Error";
    prg.innerHTML = "Already have an account with the same email!";
    setTimeout(() => {
      modal.style.display = "none"; // Chamada da função changeToLogin() após o tempo de exibição do modal
    }, 2000);
    return
  }

  user.createUser(
    user.generateId(),
    name,
    email,
    user.getAge(age),
    gender,
    pwd
  );

  modal.style.display = "flex";
  h2.innerHTML = "Success";
  prg.innerHTML = "Registered successfully!";

  setTimeout(() => {
    modal.style.display = "none";// Chamada da função changeToLogin() após o tempo de exibição do modal
  }, 2000); // Oculta o modal após 2000 milissegundos (2 segundos)

}

// Quando clicamos no butão Sign Up chama a função de registo
document
  .getElementById("register")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    register();
    changeToLogin()
  });

// Quando clicamos no botão de Sign In iremos fazer o login do utilizador
document.getElementById("login").addEventListener("submit", function (event) {
  event.preventDefault(event);
  const email = document.getElementById("emailLogin").value;
  const password = document.getElementById("passwordLogin").value;
  if (user.login(email, password)) {
    modal.style.display = "flex";
    h2.innerHTML = "Success";
    prg.innerHTML = "Logged successfully!";
    setTimeout(() => {
      window.location.replace("../../index.html");
    }, 2000);
  } else {
    modal.style.display = "flex";
    h2.innerHTML = "Error";
    prg.innerHTML = "You have entered an invalid email or password";
    close.addEventListener("click", function () {
      modal.style.display = "none";
    });
  }
});

// Mudar do Formulário de Registo para o de Login
function changeToRegister() {
  let formRegister = document.getElementById("register");
  let formLogin = document.getElementById("login");
  formRegister.style.display = "none";
  formLogin.style.display = "block";
}

document.getElementById("changeLogin").addEventListener("click", function () {
  changeToRegister();
});

// Mudar do Formulário Login para Registo
function changeToLogin() {
  let formRegister = document.getElementById("register");
  let formLogin = document.getElementById("login");
  formRegister.style.display = "block";
  formLogin.style.display = "none";
}

document
  .getElementById("changeRegister")
  .addEventListener("click", function () {
    changeToLogin();
  });