const questionItems = document.querySelectorAll("[data-question-item]")
const selectedAnswer = document.querySelector("[data-storage-question]")

questionItems.forEach(questionItem => {
    questionItem.addEventListener("click", e => {
        const previousSelected = questionItem.parentNode.querySelector(".selectedquestion")
        if (previousSelected) {
            previousSelected.classList.remove("selectedquestion")
        }
        questionItem.classList.add("selectedquestion")
        selectedAnswer.value = questionItem.getAttribute("data-question-item-label")
    })
})

