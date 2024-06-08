var mail = document.getElementById("mail");
var password = document.getElementById("password");
var btnLogin = document.getElementById("btnLogin");
var inValidMail = document.getElementById("inValidMail");
var inValidPass = document.getElementById("inValidPass");
var required = document.getElementById("required");
var passRegex;
var mailRegex;

var users = [];
if (JSON.parse(localStorage.getItem("users")) !== null) {
  users = JSON.parse(localStorage.getItem("users"));
}

btnLogin.addEventListener("click", function () {
  fillInputs();
  exist();
});

function exist() {
  if (users.length !== 0) {
    var check = false;
    for (var i = 0; i < users.length; i++) {
      if (users[i].mail === mail.value && users[i].pass === password.value) {
        location.href = "./home.html";
        localStorage.setItem("username", users[i].name);
        check = true;
        required.classList.add("d-none");
      }
    }
    if (!check) {
      required.innerHTML = "Email or Password is incorrect";
      required.classList.remove("d-none");
    } else if (check) {
      required.classList.add("d-none");
    } else {
      fillInputs();
    }
  }
}

function fillInputs() {
  if (mail.value == "" || password.value == "") {
    required.classList.remove("d-none");
  } else {
    if (Validation) {
      required.classList.add("d-none");
    }
  }
}

mail.addEventListener("input", function () {
  Validation(mail, mailRegex, inValidMail);
});
password.addEventListener("input", function () {
  Validation(password, passRegex, inValidPass);
});
function Validation(e, regex, inValid) {
  var text = e.value;
  passRegex = /^[a-zA-Z0-9!@#$%^&*]{8,32}$/g;
  mailRegex = /^[\w+\.]+@([\w+]+\.)+[\w-]{2,}$/g;
  var Regex = regex;
  if (regex.test(text) == true) {
    e.classList.add("is-valid");
    e.classList.remove("is-invalid");
    inValid.classList.add("d-none");
    return true;
  } else {
    e.classList.remove("is-valid");
    e.classList.add("is-invalid");
    inValid.classList.remove("d-none");
    return false;
  }
}
