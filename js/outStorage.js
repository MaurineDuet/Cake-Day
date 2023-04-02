const saveButton = document.querySelector("[data-storage-save]")


if (saveButton) {

    const params = new URLSearchParams(location.search)
    const date = params.get("date")
    const jsonData = localStorage.getItem(date)

    if (jsonData) {
        const data = JSON.parse(jsonData)
        
    }
}