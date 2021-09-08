const searchBar = document.getElementById("searchbar");
const questions = document.querySelectorAll(".question");

// SEARCHBAR
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

// SEARCH TAGS

const htmlButton = document.querySelector(".html-button");
const cssButton = document.querySelector(".css-button");
const javascriptButton = document.querySelector(".javascript-button");
const accessibilityButton = document.querySelector(".accessibility-button");
const resetButton = document.querySelector(".reset-button");
const cards = document.querySelectorAll(".card");

htmlButton.addEventListener ("click", () => {
  Array.from(cards).forEach((card)=> {
    if(card.classList.contains("html")) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  })
});

cssButton.addEventListener ("click", () => {
  Array.from(cards).forEach((card)=> {
    if(card.classList.contains("css")) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  })
});

javascriptButton.addEventListener ("click", () => {
  Array.from(cards).forEach((card)=> {
    if(card.classList.contains("javascript")) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  })
});

accessibilityButton.addEventListener ("click", () => {
  Array.from(cards).forEach((card)=> {
    if(card.classList.contains("accessibility")) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  })
});

resetButton.addEventListener ("click", () => {
  Array.from(cards).forEach((card)=> {
    card.style.display = "block";
  })
});