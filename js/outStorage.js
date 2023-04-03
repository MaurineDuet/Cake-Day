const saveButton = document.querySelector("[data-storage-save]")

if (saveButton) {

    const params = new URLSearchParams(location.search)
    const date = params.get("date")
    const jsonData = localStorage.getItem(date)

    if (jsonData) {
        const data = JSON.parse(jsonData)

        //Restitution texte du jour

        const myDay = document.querySelector("[data-storage-myday]")
        myDay.value = data["myDay"]

        //Restitution texte de demain

        const tomorrow = document.querySelector("[data-storage-tomorrow]")
        tomorrow.value = data["tomorrow"]

        //Restitution texte de sleep

        const sleep = document.querySelector("[data-storage-sleep]")
        sleep.value = data["sleep"]

        //Restitution texte de notes

        const notes = document.querySelector("[data-storage-notes]")
        notes.value = data["notes"]

        //Restitution énergie

        const energy = document.querySelector("[data-storage-energy]")

        for (let i = 1; i <= data["energy"]; i++) {
            const currentEnergyItem = document.querySelector(`[data-energy-svg-level= "${i}"]`)
            currentEnergyItem.classList.add("energyselected")
        }

        //Restitution question

        const question = document.querySelector("[data-storage-question]")
        question.value = data["question"]

        const answers = document.querySelectorAll("[data-question-item]")

        answers.forEach(answer => {
            answer.value = answer.getAttribute("data-question-item-label")

            if (question.value === answer.value) {
                answer.classList.add("selectedquestion")
            }
        })

        //Restitution mood

        const goodMood = document.querySelector("[data-storage-mood]")
        goodMood.value = data["mood"]

        const moods = document.querySelectorAll("[data-mood-item]")

        moods.forEach(mood => {
            mood.value = mood.getAttribute("data-mood-item-label")

            if (mood.value === goodMood.value) {
                mood.classList.add("selected")
            }
        })

        //Restitution weather

        const goodWeather = document.querySelector("[data-storage-weather]")
        goodWeather.value = data["weather"]

        const weathers = document.querySelectorAll("[data-weather-item]")

        weathers.forEach(weather => {
            weather.value = weather.getAttribute("data-weather-item-label")

            if (weather.value === goodWeather.value) {
                weather.classList.add("selectedweather")
            }
        })

        //Restitution foodtracker

        const foodTracker = document.querySelectorAll("[data-storage-foodtracker]")
        const meals = data["foodTracker"]

        foodTracker.forEach(meal => {
            const mealName = meal.getAttribute("data-storage-foodtracker-label")
            meal.value = meals[mealName]
        })

        //Restitution todo

        const toDoItems = data["toDo"]

        toDoItems.forEach(item => {
            const toDoItemTemplate = document.getElementById("template-todoitem")
            const toDoItem = toDoItemTemplate.content.cloneNode(true)
            const toDoItemText = toDoItem.querySelector("[data-todo-text]")
            toDoItemText.innerText = item

            const toDoList = document.querySelector("[data-todo-list]")
            toDoList.append(toDoItem)
        })

        //Restitution color

        const color = data["color"]
        document.body.setAttribute("theme", color)

        const drinkImage = document.querySelector("[data-drink-img]")
        if (drinkImage) {
            drinkImage.src = `../Img/drink_${color}.png`
        }

        const sideImage = document.querySelector("[data-side-img]")
        if (sideImage) {
            sideImage.src = `../Img/side_${color}.png`
        }

    }
}



