import { dateToURLFormat } from "./functions.js";

const currentDate = document.querySelector("[data-calendar-currentdate]");
const dayTag = document.querySelector("[data-calendar-daytag]");
const prevNextIcon = document.querySelectorAll("[data-calendar-icons]")

let date = new Date()
let currYear = date.getFullYear()
let currMonth = date.getMonth()

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

if (currentDate) {
    const renderCalendar = () => {
        let firstDayofMonth = new Date(currYear, currMonth, 1).getDay()
        let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate()
        let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay()
        let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate()
        let liTag =""
        
        for (let i = firstDayofMonth; i > 0; i--) {
            liTag += `<li class=inactive>
            <a href="journaling_page.html?date=${dateToURLFormat(new Date(currYear, currMonth, lastDateofLastMonth - i + 1))}">
            ${lastDateofLastMonth - i + 1}
            </a>
            </li>`
        }
        
        for (let i = 1; i <= lastDateofMonth; i++) {
            let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : ""
            liTag += `<li class="${isToday}">
            <a href="journaling_page.html?date=${dateToURLFormat(new Date(currYear, currMonth, i))}">
            ${i}
            </a>
            </li>`
        }
        
        for (let i = lastDayofMonth; i < 6; i++) {
            liTag += `<li class=inactive>
            <a href="journaling_page.html?date=${dateToURLFormat(new Date(currYear, currMonth, i - lastDayofMonth + 1))}">
            ${i - lastDayofMonth + 1}
            </a>
            </li>`
        }
        
        currentDate.innerText = `${months[currMonth]} ${currYear}`
        dayTag.innerHTML = liTag;
    }
    renderCalendar()
    
    prevNextIcon.forEach(icon => {
        icon.addEventListener("click", () => {
            currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1
            
            if(currMonth < 0 || currMonth >11) {
                let switchDate = new Date (currYear, currMonth);
                currYear = switchDate.getFullYear()
                currMonth = switchDate.getMonth()
            } else {
            }
            
            renderCalendar()
        })
    })
    
}