const searchBar = document.getElementById("searchbar");
const questions = document.querySelectorAll(".question");
console.log(questions);

searchBar.addEventListener("keyup", function(e) {
  const keyword = e.target.value.toLowerCase();

  Array.from(questions).forEach((question)=> {
    const questionTitle = question.textContent;
    if(questionTitle.toLowerCase().indexOf(keyword)!=(-1)) {
      question.parentElement.parentElement.parentElement.style.display = "block";
    } else {
      question.parentElement.parentElement.parentElement.style.display = "none";
    }
  })

});