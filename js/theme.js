const url = window.location.search

const params = new URLSearchParams(url)
const color = params.get("theme")

document.body.setAttribute("theme", color)

const drinkImage = document.querySelector("[data-drink-img]")
if (drinkImage) {
    drinkImage.src = `./Img/drink_${color}.png`
}

const sideImage = document.querySelector("[data-side-img]")
if (sideImage) {
    sideImage.src = `./Img/side_${color}.png`
}

//localStorage.setItem("theme", color)