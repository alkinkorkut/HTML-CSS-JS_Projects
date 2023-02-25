const questions = document.querySelectorAll(".question-container");

console.log(questions);

questions.forEach(question => {
    question.addEventListener("click", function(){
        question.classList.toggle("active");
    })
});