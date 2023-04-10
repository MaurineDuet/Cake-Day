//Génère les liens de l'index

const cakeGenerator = document.querySelector("[data-cake-generator]")
const colors = document.querySelector("[data-colors]")

if (cakeGenerator) {
    const themes = ["white", "orange", "blue", "lilac", "yellow", "green", "blossom", "pink"]
    for (const theme of themes) {
        const a = document.createElement("a")
        const dateArray = new Date().toLocaleString().split(" ")[0].split("/")

        a.href = `journaling_page.html?theme=${theme}&date=${dateArray.reverse().join("-")}`

        const cakeImage = document.createElement("img")
        cakeImage.src = `Img/${theme.charAt(0).toUpperCase() + theme.slice(1)} cake.png`

        a.append(cakeImage)
        a.classList.add("cake")
        cakeGenerator.append(a)

    }

} /*else if (colors) {
    const themes = ["white", "orange", "blue", "lilac", "yellow", "green", "blossom", "pink"]
    for (const theme of themes) {
        const a = document.createElement("a")
        const dateArray = new Date().toLocaleString().split(" ")[0].split("/")

        a.href = `journaling_page.html?theme=${theme}&date=${dateArray.reverse().join("-")}`
        
        const colorImage = document.createElement("img")
        colorImage.src = `Img/box_${theme}.svg`
        a.append(colorImage)
        colors.append(a)
        
    }
} */



else if (colors) {
    const themes = ["white", "orange", "blue", "lilac", "yellow", "green", "blossom", "pink"]
    for (const theme of themes) {
        const button = document.createElement("button")
        button.classList.add("color_button")
        // const dateArray = new Date().toLocaleString().split(" ")[0].split("/")

        button.addEventListener("click", e => {
            document.body.setAttribute("theme", theme)
        }) 
        
        const colorImage = document.createElement("img")
        colorImage.src = `Img/box_${theme}.svg`
        button.append(colorImage)
        colors.append(button)
        
    }
}

