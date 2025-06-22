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
lastoption = 0
function changeBackground(newValue, color){
    id2 = setInterval(BackgroundFrame, 25, 100, newValue, color)
    console.log("running")
    backgroundTime = 0
    do{
        option = Math.ceil(Math.random() * 4)
    }while(option == lastoption)
    lastoption = option
    // option = 5
    function BackgroundFrame(length, newValue, color){
        if(backgroundTime == length){
            oldvalue = " " + num
            Pulling = false
            console.log(Pulling)
            clearInterval(id2)
            return
        }
        backgroundTime++
        let string = ""
        
        for (let i = 0; i<50; i++){
            for(let j=0; j<60; j++){
                switch (option){
                    case 1:
                        if(j+25 == (backgroundTime + i)){
                            string += "<span style = 'font-weight: bolder; color: " + color + "';>" + newValue + "</span>"
                        }else if(j + 25< (backgroundTime + i)){
                            string += newValue
                        }else{
                            string += oldvalue
                        }break
                    case 2:
                        if(j == (backgroundTime - i)){
                            string += "<span style = 'font-weight: bolder; color: " + color + "';>" + newValue + "</span>"
                        }else if(j < (backgroundTime - i)){
                            string += newValue
                        }else{
                            string += oldvalue
                        }break
                    case 3:
                        if(j == (80 - (backgroundTime + i))){
                            string += "<span style = 'font-weight: bolder; color: " + color + "';>" + newValue + "</span>"
                        }else if(j > (80 - (backgroundTime + i))){
                            string += newValue
                        }else{
                            string += oldvalue
                        }break
                    case 4:
                        if(j == (60 - (backgroundTime - i))){
                            string += "<span style = 'font-weight: bolder; color: " + color + "';>" + newValue + "</span>"
                        }else if(j > (60 - (backgroundTime - i))){
                            string += newValue
                        }else{
                            string += oldvalue
                        }break
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
const TitleNum = document.getElementById("TitleNum")


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
    // id = setInterval(Frame, 1)
    requestAnimationFrame(Frame)
    function Frame(){
        if(time == 320){
            // prob = Math.random()
            LeverText.innerHTML = "<center>" + num + "</center>"
            // clearInterval(id)
            return
        }
        let stageLength = 80
        stage = Math.floor(time/stageLength)
        time++
        switch (stage){
            case 0:
                time++
                Lever.style.transform = "rotate(" + (time-45) + "deg)"
                break
            case 3:
                if (time == (stageLength * 3 ) + 1){
                    console.log("testing")
                    if(prob == 1){
                        Lever.style.filter = "hue-rotate(240deg)"
                        accent.style.setProperty('--accent', 'blue');
                        changeBackground(" 1", "blue")
                        num = 1;
                        TitleNum.style.color = "blue"
                    }else if (prob == 2){
                        Lever.style.filter = "hue-rotate(120deg)"
                        accent.style.setProperty('--accent', '#00FF00');
                        changeBackground(" 2", "#00FF00")
                        TitleNum.style.color = "#00FF00"
                        num = 2
                    }else if (prob == 3){
                        Lever.style.filter = "hue-rotate(60deg)"
                        accent.style.setProperty('--accent', 'yellow');
                        changeBackground(" 3", "yellow")
                        TitleNum.style.color = "yellow"
                        num = 3
                    }else if (prob == 4){
                        Lever.style.filter = "hue-rotate(0deg)"
                        accent.style.setProperty('--accent', 'red');
                        changeBackground(" 4", "red")
                        TitleNum.style.color = "red"
                        num = 4
                    }
                }
                let rot = time - 3 * stageLength
                Lever.style.transform = "rotate(" + ((80-rot)-45) + "deg)"
                break
            default:
                if (time % 15 == 0){
                    prob = Math.ceil(Math.random() * 4)
                    console.log(prob)
                    if(prob == 1){
                        Lever.style.filter = "hue-rotate(240deg)"
                        accent.style.setProperty('--accent', 'blue');
                        TitleNum.style.color = "blue"
                        num = 1;
                    }else if (prob == 2){
                        Lever.style.filter = "hue-rotate(120deg)"
                        accent.style.setProperty('--accent', '#00FF00');
                        TitleNum.style.color = "#00FF00"
                        num = 2
                    }else if (prob == 3){
                        Lever.style.filter = "hue-rotate(60deg)"
                        accent.style.setProperty('--accent', 'yellow');
                        TitleNum.style.color = "yellow"
                        num = 3
                    }else if (prob == 4){
                        Lever.style.filter = "hue-rotate(0deg)"
                        accent.style.setProperty('--accent', 'red');
                        TitleNum.style.color = "red"
                        num = 4
                    }
                    LeverText.innerHTML = "<center>" + num + "</center>"
            }

        }
        requestAnimationFrame(Frame)

    }
}
