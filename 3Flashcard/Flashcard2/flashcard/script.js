const container = document.querySelector(".container");
const addQuestionCard = document.getElementById("add-question-card");
const cardButton = document.getElementById("save-btn");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const errorMessage = document.getElementById("error");
const addQuestion = document.getElementById("add-flashcard");
const closeBtn = document.getElementById("close-btn");
let editBool = false;
let flashcards = JSON.parse(localStorage.getItem("flashcards")) || [];

// Function to save flashcards to localStorage
function saveFlashcards() {
    localStorage.setItem("flashcards", JSON.stringify(flashcards)); //turns array into a JSON string and stores it
}

// Function to display flashcards
function displayFlashcards() {
    const listCard = document.querySelector(".card-list-container");
    listCard.innerHTML = "";
    flashcards.forEach((card, index) => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `<p class="question-div">${card.question}</p>`;
        
        const displayAnswer = document.createElement("p");
        displayAnswer.classList.add("answer-div", "hide");
        displayAnswer.innerText = card.answer;

        const link = document.createElement("a");
        link.setAttribute("href", "#");
        link.setAttribute("class", "show-hide-btn");
        link.innerHTML = "Show/Hide";
        link.addEventListener("click", () => displayAnswer.classList.toggle("hide"));

        const buttonsCon = document.createElement("div");
        buttonsCon.classList.add("buttons-con");
        
        const editButton = document.createElement("button");
        editButton.setAttribute("class", "edit");
        editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
        editButton.addEventListener("click", () => {
            question.value = card.question;
            answer.value = card.answer;
            flashcards.splice(index, 1); // deletes old entry
            saveFlashcards();
            displayFlashcards();
            addQuestionCard.classList.remove("hide");
        });
        buttonsCon.appendChild(editButton);
        
        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("class", "delete");
        deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
        deleteButton.addEventListener("click", () => {
            flashcards.splice(index, 1);// deletes deleted flashcards 
            saveFlashcards();
            displayFlashcards();
        });
        buttonsCon.appendChild(deleteButton);

        div.appendChild(link);
        div.appendChild(displayAnswer);
        div.appendChild(buttonsCon);
        listCard.appendChild(div);
    });
}

// Add flashcard button
addQuestion.addEventListener("click", () => {
    container.classList.add("hide");
    question.value = "";
    answer.value = "";
    addQuestionCard.classList.remove("hide");
});

// Close flashcard input form
closeBtn.addEventListener("click", () => {
    container.classList.remove("hide");
    addQuestionCard.classList.add("hide");
});

// Submit flashcard
cardButton.addEventListener("click", () => {
    const tempQuestion = question.value.trim();
    const tempAnswer = answer.value.trim();
    if (!tempQuestion || !tempAnswer) {
        errorMessage.classList.remove("hide");
    } else {
        errorMessage.classList.add("hide");
        flashcards.push({ question: tempQuestion, answer: tempAnswer });
        saveFlashcards(); // Puts new flashcards in the flashcard array
        displayFlashcards();
        question.value = "";
        answer.value = "";
        container.classList.remove("hide");
        addQuestionCard.classList.add("hide");
    }
});

// Load flashcards on page load
document.addEventListener("DOMContentLoaded", displayFlashcards);// retrieves stored data and displays
