const Lever = document.getElementById("Lever")
const LeverText = document.getElementById("LeverText")

Pulling = false
stopped = false
function CrankLever(profesional){


    if (Pulling || stopped){
        return
    }
    Pulling = true
    let num = Math.floor((Math.random() * 3) + 1)

    time = 0
    id = setInterval(Frame, 5)
    function Frame(){
        if(time == 320){
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
            case 0:
                Lever.style.transform = "rotate(" + (time-45) + "deg)"
                break
            case 3:
                let rot = time - 3 * stageLength
                Lever.style.transform = "rotate(" + ((80-rot)-45) + "deg)"
                break
            default:
                if (time % 15 == 0){
                    prob = Math.random()
                    if(prob < 0.1){
                        console.log("1")
                        LeverText.style.color = "#ABE9B3"
                        num = 1;
                    }else if (prob <= 0.6){
                        LeverText.style.color = "#FAE3B0"
                        num = 2
                    }else if (prob > 0.6){
                        LeverText.style.color = "#F28FAD"
                        num = 3
                    }
                    LeverText.innerHTML = "<center>" + num + "</center>"
            }


        }
    }
}


const LeverTotalText = document.getElementById("TotalText")
const LeverNotifText = document.getElementById("LeverNotifText")
double = false
total = 0
round = 0
function CrankAgain(num){
    console.log(num)
    score = total + (num * (double ? 2 : 1))

    LeverTotalText.innerHTML = "0" + String(score)
    

    switch (num){
        case 1:
            console.log("this is broken")
            total = num
            round = 2; 
            break
        case 2:
            LeverNotifText.innerHTML = "<center>Next Crank gets you double points!</center>"
            total = num
            double = true
            round++
            break
        case 3:
            LeverNotifText.innerHTML = "<center>Next Crank adds to your score!</center>"
            total = num
            double = false
            round++
            break
    }
    if (round == 2){
        decrankify()
        LeverNotifText.innerHTML = "<center>Congrats, on your " + score + " points <a href='./LeverSimProf.html'>restart</a></center>"
    }
}


function decrankify(){
    Lever.style.cursor = "none"
    stopped = true
}