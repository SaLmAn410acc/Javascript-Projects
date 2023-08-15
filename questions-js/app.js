const questionBtn = document.querySelectorAll(".question-btn");

const question = document.querySelector(".question");

console.log(question);

questionBtn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const questionSelected = e.currentTarget.parentElement.parentElement;
    questionSelected.classList.toggle("show-text");
  });
});
