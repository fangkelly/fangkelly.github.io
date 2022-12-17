function overlay(div) {
    document.getElementById(`${div}-overlay`).classList.remove("hide")
    document.getElementById(`${div}-overlay`).classList.add("show")
}


function unoverlay(div) {
    document.getElementById(`${div}-overlay`).classList.remove("show")
    document.getElementById(`${div}-overlay`).classList.add("hide")

}

function clickLink(link) {
    window.open(link, '_blank');

}

