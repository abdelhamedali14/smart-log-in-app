
let nameSignUpInput = document.getElementById("nameSignUp");
let emailSignUpInput = document.getElementById("emailSignUp");
let passwordSignUpInput = document.getElementById("passwordSignUp");
let logInBtn = document.getElementById("logInBtn");
let requiredSignUp = document.getElementById("requiredSignUp");
let existSignUp = document.getElementById("existSignUp");
let getData = JSON.parse(localStorage.getItem("userlist"));
let successSignup = document.getElementById("success");
storeData = [];
// when user press signUP
logInBtn.addEventListener("click", function () {
  userData();
  resetData();
});

if (JSON.parse(localStorage.getItem("userlist") != null)) {
  storeData = JSON.parse(localStorage.getItem("userlist"));
}

function userData() {
  if (userInputValidation() == true) {
    let data = {
      name: nameSignUpInput.value,
      email: emailSignUpInput.value,
      password: passwordSignUpInput.value,
    };
    storeData.push(data);
    localStorage.setItem("userlist", JSON.stringify(storeData));
  } else {

  }
}

function resetData() {
  nameSignUpInput.value = "";
  emailSignUpInput.value = "";
  passwordSignUpInput.value = "";
}
// check if user register before or not
function checkExsit() {
  for (var i = 0; i < getData.length; i++) {
    if (
      getData[i].name == nameSignUpInput.value ||
      getData[i].email == emailSignUpInput.value ||
      getData[i].password == passwordSignUpInput.value
    ) {
      existSignUp.classList.replace("d-none", "d-block");
      successSignup.classList.replace("d-block", "d-none");
      return true;
    } else {
      return false;
    }
  }
}
// validation inputs 
function userNAMeValidation() {
  let userNamealert = document.getElementById("userNamealert");
  let regex = /^[a-zA-Z2-20\.\s]+$/;
  // console.log(regex.test("abdo ali"));
  if (regex.test(nameSignUpInput.value) == true && nameSignUpInput != "") {
    nameSignUpInput.classList.add("is-valid");
    nameSignUpInput.classList.remove("is-invalid");
    // userNamealert.classList.replace("d-block", "d-none");
    return true;
  } else {
    nameSignUpInput.classList.add("is-invalid");
    nameSignUpInput.classList.remove("is-valid");
    userNamealert.classList.replace("d-none", "d-block");
    return false;
  }
}

function userPasswordValidation() {
  let userPasswordAlert = document.getElementById("userPasswordAlert");
  let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  // console.log(regex.test("1234567swwq"));

  if (
    regex.test(passwordSignUpInput.value) == true &&
    passwordSignUpInput != ""
  ) {
    passwordSignUpInput.classList.add("is-valid");
    passwordSignUpInput.classList.remove("is-invalid");
    // userPasswordAlert.classList.replace("d-block", "d-none");
    return true;
  } else {
    passwordSignUpInput.classList.add("is-invalid");
    passwordSignUpInput.classList.remove("is-valid");
    userPasswordAlert.classList.replace("d-none", "d-block");
    return false;
  }
}
function userEmailValidation() {
  let userEmailAlert = document.getElementById("userEmailAlert");
  let regex = /[a-z0-14+_.-]+@[a-z0-9.-]+$/;

  // console.log(regex.test("abdoali650@gmail.com"));
  if (
    regex.test(emailSignUpInput.value) == true &&
    emailSignUpInput.value != ""
  ) {
    emailSignUpInput.classList.add("is-valid");
    emailSignUpInput.classList.remove("is-invalid");
    // userEmailAlert.classList.replace("d-block", "d-none");
    return true;
  } else {
    emailSignUpInput.classList.add("is-invalid");
    emailSignUpInput.classList.remove("is-valid");
    userEmailAlert.classList.replace("d-none", "d-block");
    return false;
  }
}

function userInputValidation() {
  userNAMeValidation();
  userEmailValidation();
  userPasswordValidation();
  if (
    userNAMeValidation() == true &&
    userEmailValidation() == true &&
    userPasswordValidation() == true
  ) {
    // console.log("heloooo");
    return true;
  } else {
    requiredSignUp.classList.replace("d-none", "d-block");
    return false;
  }
}
