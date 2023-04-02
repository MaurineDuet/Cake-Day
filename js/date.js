import { dateToURLFormat } from "./functions.js"

const URLparams = new URLSearchParams(location.search)
const date = URLparams.get("date")
console.log(date)
let today

if (date) {
    const dateArray = date.split("-")
    dateArray[1]-- // On enlève 1 au mois. Le [1] cible le mois
    today = new Date(...dateArray)
} else {
    today = new Date()
}

let todayFormat = today.toLocaleDateString('en-EN', { weekday: 'long', month: 'long', day: 'numeric' })
 
const dateTitle = document.querySelector("[data-today-date]")
if (dateTitle) {
    dateTitle.innerText = todayFormat
}

const prevNextArrow = document.querySelectorAll("[data-date-arrow]")

prevNextArrow.forEach(arrow => {
    arrow.addEventListener("click", () => {
        if (arrow.id === "previous") {
            today.setDate(today.getDate() - 1)
        } else {
            today.setDate(today.getDate() + 1)
        }
        
        location.href = `journaling_page.html?date=${dateToURLFormat(today)}`
    })
})

