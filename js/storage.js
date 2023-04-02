const saveButton = document.querySelector("[data-storage-save]")


if (saveButton) {

    saveButton.addEventListener("click", e => {

        const data = {}

        const toDo = document.querySelectorAll("[data-todo-text]")
        const toDoItems = []
        toDo.forEach(item => {
            toDoItems.push(item.innerText)
        })
        data["toDo"] = toDoItems

        const myDay = document.querySelector("[data-storage-myday]")
        data["myDay"] = myDay.value

        const foodTracker = document.querySelectorAll("[data-storage-foodtracker]")
        const meals = {}
        foodTracker.forEach(meal => {
            const mealName = meal.getAttribute("data-storage-foodtracker-label")
            const mealValue = meal.value
            meals[mealName] = mealValue
        })
        data["foodTracker"] = meals

        const tomorrow = document.querySelector("[data-storage-tomorrow]")
        data["tomorrow"] = tomorrow.value

        const mood = document.querySelector("[data-storage-mood]")
        data["mood"] = mood.value

        const weather = document.querySelector("[data-storage-weather]")
        data["weather"] = weather.value

        const sleep = document.querySelector("[data-storage-sleep]")
        data["sleep"] = sleep.value

        const energy = document.querySelector("[data-storage-energy]")
        data["energy"] = energy.value

        const notes = document.querySelector("[data-storage-notes]")
        data["notes"] = notes.value

        const question = document.querySelector("[data-storage-question]")
        data["question"] = question.value

        //data["date"] = new Date()

        const params = new URLSearchParams(location.search)

        const jsonName = params.get("date")

        localStorage.setItem(jsonName, JSON.stringify(data))
    })

}