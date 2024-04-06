const MainButton = document.getElementById("MainButton")


setInterval(pulseLeverbutton, 20)

color = 0
function pulseLeverbutton(){
    MainButton.style.color = "hsl(" + color + ", 100%, 80%)"
    // MainButton.style.backgroundColor = "hsl(" + (color + 180) + ", 100%, 50%)"
    console.log(color)
    color++
}
