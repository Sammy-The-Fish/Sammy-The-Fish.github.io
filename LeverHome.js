const MainButton = document.getElementById("MainButton")


setInterval(pulseLeverbutton, 5)

color = 0
function pulseLeverbutton(){
    MainButton.style.color = "hsl(" + color + ", 100%, 75%)"
    MainButton.style.backgroundColor = "hsl(" + (color + 100) + ", 100%, 10%)"
    console.log(color)
    color++
}
