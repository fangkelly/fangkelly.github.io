function overlay(div) {
    console.log(`overlay ${div}`)
    document.getElementById(`${div}-overlay`).classList.remove("hide")
    document.getElementById(`${div}-overlay`).classList.add("show")
}


function unoverlay(div) {
    console.log(`unoverlay ${div}`)
    document.getElementById(`${div}-overlay`).classList.remove("show")
    document.getElementById(`${div}-overlay`).classList.add("hide")

}

function clickLink(link) {
    console.log("clicked")
    window.open(link, '_blank');

}

