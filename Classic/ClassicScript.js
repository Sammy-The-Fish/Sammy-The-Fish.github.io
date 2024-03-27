const Lever = document.getElementById("LeverButton")
const LeverText = document.getElementById("LeverText")

Pulling = false
stopped = false
function CrankLever(profesional){
    Lever.disabled = true

    if (Pulling || stopped){
        return
    }
    Pulling = true

    time = 0
    id = setInterval(Frame, 5)
    function Frame(){
        if(time == 160){
            Lever.disabled = false
            Pulling = false
            clearInterval(id)
            if (profesional){
                CrankAgain(num)
            }
            return
        }
        let stageLength = 80
        stage = Math.floor(time/stageLength)
        time++
        switch (stage){
            default:
                if (time % 15 == 0){
                    prob = Math.random()
                    if(prob < 0.1){
                        console.log("1")
                        num = 1;
                    }else if (prob <= 0.6){
                        num = 2
                    }else if (prob > 0.6){
                        num = 3
                    }
                    LeverText.innerHTML = "<center>" + num + "</center>"
            }


        }
    }
}