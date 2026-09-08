let trigger = document.querySelectorAll(".question");
let change = false;
let answer = document.querySelectorAll(".answer");
let icons = document.querySelectorAll(".fa-solid");

trigger.forEach((question, index) => {
  question.addEventListener("click", () => {
    change = !change;
    if (change) {
      answer[index].setAttribute("style", "display:block;");
      icons[index].classList.replace("fa-plus", "fa-minus");
    } else {
      answer[index].setAttribute("style", "display:none;");
      icons[index].classList.replace("fa-minus", "fa-plus");
    }
  });
});

let signupBtn = document.querySelector(".signup");

function signUp() {
  window.location.href = "/loginandSignup/signup.html";
}
