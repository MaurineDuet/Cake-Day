let today = new Date()
let todayFormat = today.toLocaleDateString('en-EN', {weekday: 'long', month: 'long', day: 'numeric'})

const dateTitle = document.querySelector("[data-today-date]")
if (dateTitle) {
    dateTitle.innerText = todayFormat
}

const prevNextArrow = document.querySelectorAll("[data-date-arrow]")


prevNextArrow.forEach(arrow => {
    arrow.addEventListener("click", () => {
        if (arrow.id === "previous") {
            today.setDate(today.getDate() -1)
            todayFormat = today.toLocaleDateString('en-EN', {weekday: 'long', month: 'long', day: 'numeric'})
        } else {
            today.setDate(today.getDate() +1)
            todayFormat = today.toLocaleDateString('en-EN', {weekday: 'long', month: 'long', day: 'numeric'})

        }
        dateTitle.innerText = todayFormat
    })
})

