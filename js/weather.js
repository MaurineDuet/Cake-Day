const weatherItems = document.querySelectorAll("[data-weather-item]")
const todayWeather = document.querySelector("[data-storage-weather]")

weatherItems.forEach(weatherItem => {
    weatherItem.addEventListener("click", e => {
        const previousSelected = weatherItem.parentNode.querySelector(".selectedweather")
        if (previousSelected) {
            previousSelected.classList.remove("selectedweather")
        }
        weatherItem.classList.add("selectedweather")
        todayWeather.value = weatherItem.getAttribute("data-weather-item-label")
    })
})
