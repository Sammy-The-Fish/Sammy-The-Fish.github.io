const Panel = document.getElementById("RestOfWebsite")
const Title = document.getElementById("MainTitle")
const background = document.getElementById("FadeIn")



window.onload = fadeIn()
entering = true
function fadeIn(){
    entering = true
    console.log("test")
    id=setInterval(Frame, 15, 100)
    time = 0

    function Frame(length){
        if (time == length){
            entering = false
            clearInterval(id)
            return
        }
        time++
        pos = time/length
        let easepos = easeInCubic(pos)

        background.style.backgroundImage = "radial-gradient(#00000000 , rgba(0,0,0, " + (100-(easepos * 100))+ "%) 0%)"
    }
}




function easeInOutExpo(x){
    return x === 0
      ? 0
      : x === 1
      ? 1
      : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2
      : (2 - Math.pow(2, -20 * x + 10)) / 2;
    
    }

    function easeInCubic(x){
        return x * x * x;
        
        }