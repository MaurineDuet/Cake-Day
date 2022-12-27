const energyItems = document.querySelectorAll("[data-energy-svg]")
const selectedEnergy = document.querySelector("[data-storage-energy]")

energyItems.forEach(energyItem => {
    energyItem.addEventListener("mouseover", e => {
        if (!energyItem.hasAttribute("locked")) {
            const level = energyItem.getAttribute("data-energy-svg-level")
            const previousSelected = energyItem.parentNode.querySelectorAll(".energyselected")
            if (previousSelected) {
                previousSelected.forEach(selected => {
                    selected.classList.remove("energyselected")
                })
            }
            for (let i = 1; i <= level; i++) {
                const currentEnergyItem = document.querySelector(`[data-energy-svg-level= "${i}"]`)
                currentEnergyItem.classList.add("energyselected")
            }
            selectedEnergy.value = level
        }
    })
})


const energyContainer = document.querySelector("[data-energy-container]")
if (energyContainer) {
    energyContainer.addEventListener("mouseout", e => {
        energyItems.forEach(energyItem => {
            if (!energyItem.hasAttribute("locked")) {
                energyItem.classList.remove("energyselected")
            }
        })
    })

    energyContainer.addEventListener("click", e => {
        energyItems.forEach(energyItem => {
            if (!energyItem.hasAttribute("locked")) {
                energyItem.setAttribute("locked", "")
            } else {
                energyItem.removeAttribute("locked")
            }
        })
    })

}

