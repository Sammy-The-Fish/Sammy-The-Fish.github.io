const Lever = document.getElementById("Lever")
const LeverText = document.getElementById("LeverText")


function CrankLever(){
    result = Math.floor((Math.random() * 3) + 1)
    time = 0
    id = setInterval(Frame, 1)
    function Frame(){
        if(time == 240){
            clearInterval(id)
            return
        }
        let stageLength = 80
        stage = Math.floor(time/stageLength)
        time++
        switch (stage){
            case 0:
                Lever.style.transform = "rotate(" + time + "deg)"
                break
            case 2:
                let rot = time - 2 * stageLength
                Lever.style.transform = "rotate(" + (80-rot) + "deg)"
                break
            default:
                if (time % 7 ==0){
                    num = Math.floor((Math.random() * 3) + 1);
                    switch(num){
                        case 1:
                            LeverText.style.color = "#ABE9B3"
                            break
                            
                        case 2:
                            LeverText.style.color = "#FAE3B0"
                            break
                            
                        case 3:
                            LeverText.style.color = "#F28FAD"
                            break
                    }
                    LeverText.innerHTML = "<center>" + num + "</center>"
            }


        }
    }
}
