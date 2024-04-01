const Numbers = document.getElementById("numbers")



window.onload = loadBackground()

function loadBackground(){
    let string = ""
    for (let i = 0; i<50; i++){
        for(let j=0; j<60; j++){
        string += " 2"
        }
        string += "<br>"
    }
    Numbers.innerHTML = string
}

oldvalue = " 2"
function changeBackground(newValue, color){
    id2 = setInterval(BackgroundFrame, 25, 100, newValue, color)
    console.log(id2)
    time = 0
    function BackgroundFrame(length, newValue, color){
        if(time == length){
            oldvalue = " " + num
            Pulling = false
            console.log(id2)
            clearInterval(id2)
            console.log(id2)
            return
        }
        time++
        let string = ""
        for (let i = 0; i<50; i++){
            for(let j=0; j<60; j++){
                if(j == (time - i)){
                    string += "<span style = 'font-weight: bolder; color: " + color + "'>" + newValue + "</span>"
                }else if(j <= (time - i)){
                    string += newValue
                }else{
                    string += oldvalue
                }
            }
            string += "<br>"
        }
        Numbers.innerHTML = string
    }
}



const Lever = document.getElementById("Lever")
const LeverText = document.getElementById("LeverText")
const accent = document.querySelector(':root');



Pulling = false
stopped = false
function CrankLever(profesional){

    // console.log(oldvalue)
    if (Pulling || stopped){
        return
    }
    Pulling = true
    num = Math.floor((Math.random() * 3) + 1)

    time = 0
    id = setInterval(Frame, 5)
    function Frame(){
        if(time == 320){
            // prob = Math.random()
            changeBackground(" 3", "yellow")
            if(prob == 1){
                Lever.style.filter = "hue-rotate(240deg)"
                accent.style.setProperty('--accent', 'blue');
                changeBackground(" 1", "blue")
                num = 1;
            }else if (prob == 2){
                Lever.style.filter = "hue-rotate(120deg)"
                accent.style.setProperty('--accent', 'green');
                changeBackground(" 2", "green")
                num = 2
            }else if (prob == 3){
                Lever.style.filter = "hue-rotate(60deg)"
                accent.style.setProperty('--accent', 'yellow');
                changeBackground(" 3", "yellow")
                num = 3
            }else if (prob == 4){
                Lever.style.filter = "hue-rotate(0deg)"
                accent.style.setProperty('--accent', 'red');
                changeBackground(" 4", "red")
                num = 4
            }
            LeverText.innerHTML = "<center>" + num + "</center>"
            clearInterval(id)
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
                    prob = Math.ceil(Math.random() * 3)
                    if(prob == 1){
                        Lever.style.filter = "hue-rotate(240deg)"
                        accent.style.setProperty('--accent', 'blue');
                        num = 1;
                    }else if (prob == 2){
                        Lever.style.filter = "hue-rotate(120deg)"
                        accent.style.setProperty('--accent', 'green');
                        num = 2
                    }else if (prob == 3){
                        Lever.style.filter = "hue-rotate(60deg)"
                        accent.style.setProperty('--accent', 'yellow');
                        num = 3
                    }else if (prob == 4){
                        Lever.style.filter = "hue-rotate(0deg)"
                        accent.style.setProperty('--accent', 'red');
                        num = 4
                    }
                    LeverText.innerHTML = "<center>" + num + "</center>"
            }
            

        }
    }
}
