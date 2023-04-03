import { dateToURLFormat } from "./functions.js"

//Prends la date d'aujourd'hui

const today = new Date()
const todayGoodFormat = dateToURLFormat(today)

//Prends la date du jour ciblé par le journal

const url = window.location.search
const params = new URLSearchParams(url)
const date = params.get("date")
const jsonData = localStorage.getItem(date)

const dateGoodFormat = dateToURLFormat(date)

//Ajoute les thèmes en fonction de la date du journal par rapport à la date du jour

function disableElements () {
    const journal = document.querySelector(".pageseparation")
    const question = document.querySelector(".finalquestion")
    const save = document.querySelector(".savebutton")
    journal.classList.add("disabled")
    question.classList.add("disabled")
    save.classList.add("disabled")
}

//Futur

if (dateGoodFormat > todayGoodFormat) { 
   alert("You can not travel time in the future")
   disableElements()


   //Passé
   
} else if (dateGoodFormat < todayGoodFormat && jsonData === null) {
    document.body.setAttribute("theme", 'grey')
    disableElements()
}