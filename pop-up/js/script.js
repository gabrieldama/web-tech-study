const button = document.querySelector("button")
const popup = document.querySelector(".popup-wrapper")

button.addEventListener("click", function(event) {
    popup.classList.add("d-block")
})
// O objetivo é fazer com que, ao clicar nos elementos dentro do pop-up, ele mostre o popup
popup.addEventListener("click", function(event) {
    if (event.target.classList.contains("popup-close") ||
        event.target.classList.contains("popup-link") ||
        event.target.classList.contains("popup-wrapper")) {
        popup.classList.remove("d-block")
    }
})