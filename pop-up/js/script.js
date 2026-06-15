const button = document.querySelector("button")
const popup = document.querySelector(".popup-wrapper")

button.addEventListener("click", function(event) {
    popup.classList.add("d-block")
})

popup.addEventListener("click", function(event) {
    const classOfClickElement = event.target.classList[0]
    const classNameListArray = ["popup-close", "popup-link", "popup-wrapper"]

    const isClassList = (classNameListArray.includes(classOfClickElement))
    
    if (isClassList) {
        popup.classList.remove("d-block")
    }
})