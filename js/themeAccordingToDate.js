import { dateToURLFormat } from "./functions.js"

const today = new Date()
const todayGoodFormat = dateToURLFormat(today)
console.log(dateToURLFormat(today))

const url = window.location.search
const params = new URLSearchParams(url)
const date = params.get("date")

const dateGoodFormat = dateToURLFormat(date)
console.log(dateToURLFormat(date))

if (dateGoodFormat > todayGoodFormat) { 
   alert("You can not travel time in the future")
   const journal = document.querySelector(".pageseparation")
   journal.setAttribute("disabled", disabled)
} else if (dateGoodFormat < todayGoodFormat) {
    document.body.setAttribute("theme", 'grey')
}