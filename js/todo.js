/// C'est la to do ///

const toDoList = document.querySelector("[data-todo-list]")

const toDoInput = document.querySelector("[data-todo-input]")

const toDoAddButton = document.querySelector("[data-todo-addbutton]")
if (toDoAddButton) {
    toDoAddButton.addEventListener("click", e => {
        const toDoInputValue = toDoInput.value
        if (toDoInputValue) {
            const toDoItemTemplate = document.getElementById("template-todoitem")
            
            const toDoItem = toDoItemTemplate.content.cloneNode(true)
            const toDoItemText = toDoItem.querySelector("[data-todo-text]")
            toDoItemText.innerText = toDoInputValue
            
            const toDoRemoveButton = toDoItem.querySelector("[data-todo-removebutton]")
            toDoRemoveButton.addEventListener("click", e => {
                toDoRemoveButton.parentNode.remove()
            })
            
            toDoList.append(toDoItem)
            toDoInput.value = ""
        }    
    })
}
