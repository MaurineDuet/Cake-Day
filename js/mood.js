const moodItems = document.querySelectorAll("[data-mood-item]")
const selectedMood = document.querySelector("[data-storage-mood]")

moodItems.forEach(moodItem => {
    moodItem.addEventListener("click", e => {
        const previousSelected = moodItem.parentNode.querySelector(".selected")
        if (previousSelected) {
            previousSelected.classList.remove("selected")
        }
        moodItem.classList.add("selected")
        selectedMood.value = moodItem.getAttribute("data-mood-item-label")
    })
})