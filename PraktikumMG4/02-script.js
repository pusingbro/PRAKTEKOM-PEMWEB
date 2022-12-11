const selectBody = document.querySelector("body")
function switchmode() {
    selectBody.classList.toggle("switchmode")
}

const screen_mode = document.querySelector("#togglemode")
screen_mode.addEventListener("click", switchmode)