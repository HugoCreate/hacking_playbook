function reveal() {
    let thing = document.getElementById("buttonarea")

    if (thing.style.display == "none"){
        thing.style.display = "block"
    } else {
        thing.style.display = "none"
    }

}


function getinfo(info) {
    window.alert("this is what you typed: " + String(info))
}
