var userName = document.getElementById("userName");
var inValidName = document.getElementById("inValidName");
var mail = document.getElementById("mail");
var inValidMail = document.getElementById("inValidMail");
var password = document.getElementById("password");
var inValidPass = document.getElementById("inValidPass");
var btnSignUp = document.getElementById("btnSignUp");
var exists = document.getElementById("exists");
var passRegex;
var mailRegex;
var nameRegex;
var usersArr = [];
if (localStorage.getItem("users") !== null) {
  usersArr = JSON.parse(localStorage.getItem("users"));
}

btnSignUp.addEventListener("click", function () {
  var check = true;
  var users = {
    name: userName.value,
    mail: mail.value,
    pass: password.value,
  };
  if (usersArr.length) {
    for (var i = 0; i < usersArr.length; i++) {
      if (usersArr[i].mail == mail.value) {
        exists.classList.remove("d-none");
        check = false;
      }
    }
    if (check == true && Validation) {
      usersArr.push(users);
      localStorage.setItem("users", JSON.stringify(usersArr));
      location.href = "./index.html";
    }
  } else {
    usersArr.push(users);
    localStorage.setItem("users", JSON.stringify(usersArr));
    location.href = "./index.html";
  }
});

mail.addEventListener("input", function () {
  Validation(mail, mailRegex, inValidMail);
});
password.addEventListener("input", function () {
  Validation(password, passRegex, inValidPass);
});
userName.addEventListener("input", function () {
  Validation(userName, nameRegex, inValidName);
});
function Validation(e, regex, inValid) {
  var text = e.value;
  passRegex = /^[a-zA-Z0-9!@#$%^&*]{8,32}$/g;
  mailRegex = /^[\w+\.]+@([\w+]+\.)+[\w-]{2,}$/g;
  nameRegex = /^[A-Z][a-z]{3,8}$/g;
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
