let emialSignInInput = document.getElementById("emialSignIn");
let passwordSignInInput = document.getElementById("passwordSignIn");
let logInBtn = document.getElementById("logInBtn");
let getData = JSON.parse(localStorage.getItem("userlist"));
let checkUsernameAndPassword = document.getElementById(
  "checkUsernameAndPassword"
);

// when user press log in and he already sign up h
logInBtn.addEventListener("click", function () {
  toHome();
});

function toHome() {
  for (let i = 0; i < getData.length; i++) {
    if (
      getData[i].email == emialSignInInput.value &&
      getData[i].password == passwordSignInInput.value
    ) {
      localStorage.setItem("index", i);
      console.log();

      location.replace("home.html");

      checkUsernameAndPassword.style.cssText = "display : none !important";
    } else {
      checkUsernameAndPassword.classList.replace("d-none", "d-block");
    }
  }
}
