const HomeButton = document.getElementById("HomeButton")
const ProjectButton = document.getElementById("ProjectButton")
const ContactButton = document.getElementById("ContactButton")
const LinuxButton = document.getElementById("LinuxButton")


let Menu = [HomeButton, ProjectButton, ContactButton, LinuxButton]


setInterval(adjustforScreen, 100)

function adjustforScreen(){
    if(screen.availHeight > screen.availWidth * 1.5){
        let menu = document.getElementById("MenuBar")
        menu.style.width= "100%"
        let title = document.getElementById("MainTitle")
        let BarButtons = document.getElementsByClassName("MenuButton")
        title.style.fontSize = "75px"
        
        for (let i=0; i< BarButtons.length; i++){
            BarButtons[i].style.fontSize = "15px"
        }

        var elements = document.getElementsByClassName("horizontal")
        for (let i = 0; i < elements.length; i++){
            elements[i].style.flexDirection = "collumn"
        }
        var elements = document.getElementsByClassName("vertical")
        for (let i = 0; i < elements.length; i++){
            elements[i].style.width = "100%"
        }
        
    }else{
        let menu = document.getElementById("MenuBar")
        menu.style.width= "75%"
        let title = document.getElementById("MainTitle")
        let BarButtons = document.getElementsByClassName("MenuButton")
        title.style.fontSize = "104px"
        
        for (let i=0; i< BarButtons.length; i++){
            BarButtons[i].style.fontSize = "20px"
        }

        var elements = document.getElementsByClassName("horizontal")
        for (let i = 0; i < elements.length; i++){
            elements[i].style.flexDirection = "row"
        }
        var elements = document.getElementsByClassName("vertical")
        for (let i = 0; i < elements.length; i++){
            elements[i].style.width = "40%"
        }
    }
}
  



var animating = 0;
var CurrentPosition = 0;

for(let i=0; i < Menu.length; i++){
    if(i == CurrentPosition){
        Menu[i].style.textDecorationLine = "underline"
    }else{
        Menu[i].style.textDecorationLine = "none"
    }
}


const pages = document.getElementsByClassName("page")
var FirstPage = pages[0]

let PageDiv = FirstPage.children[0]

let LeftDiv = PageDiv.children[0]
let RightDiv = PageDiv.children[1]

let FirstDiv = LeftDiv.children.length > RightDiv.children.length ? LeftDiv : RightDiv
let LastDiv = LeftDiv.children.length > RightDiv.children.length ? RightDiv : LeftDiv


let DivArray = []

for (let i = 0; i < LastDiv.children.length; i++){
    DivArray.push(FirstDiv.children[i])
    DivArray.push(LastDiv.children[i])
}for (let i = LastDiv.children.length; i< FirstDiv.children.length; i++){
    DivArray.push(FirstDiv.children[i])
}






var Enterid = setInterval(FloatInFrame, 7)
var time = 0
function FloatInFrame(){
    if (time == 200){
        clearInterval(Enterid)
    }else{
        time++;
        for(let i = 0; i < DivArray.length; i++){
            if (i %2 == 0){
                DivArray[i].style.marginTop =  (200 - (easeOutQuint(time/200) * 200)) + "%";
            }else{
                DivArray[i].style.marginTop =  (150 - (easeOutQuint(time/200) * 150)) + "%";
            }
        }
    }
}




function Transition(TargetPosition) {
    



    if (animating){
        return
    }else if (TargetPosition == CurrentPosition){
        return
    }

    const ScrollDiv = document.getElementById("ScrollingPane")
    let id = null;
    let pos = 0;
    
    if (TargetPosition > CurrentPosition){
        anim_step = -1
    }else{
        anim_step = +1
    }
    
    animating = true
    anim_step *= Math.abs(TargetPosition - CurrentPosition) 
    start = (0 - CurrentPosition) * 100
    var time = 0
    
    
    id = setInterval(frame, 5);
    function frame() {
        content = document.getElementsByClassName("content")
        let length = 100
        if (time == length) {
            animating = false;
            clearInterval(id);
            CurrentPosition = TargetPosition
            for(let i=0; i < Menu.length; i++){
                    if(i == CurrentPosition){
                        Menu[i].style.textDecorationLine = "underline"
                    }else{
                        Menu[i].style.textDecorationLine = "none"
                    }
            }
        } else {
            time++
            // for (let i=0; i< content.length; i++){
                // content[i].style.left = Math.random() * 100 + "%";
            // }
            pos = ((anim_step * easeInOutCubic(time/length)) * 100) + start
            ScrollDiv.style.left = pos + '%';

        }
      }
      
}




function easeInOutCubic(x) {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    }



function easeOutQuint(x){
    return 1 - Math.pow(1 - x, 5);
}



function easeInOutExpo(x){
    return x === 0
      ? 0
      : x === 1
      ? 1
      : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2
      : (2 - Math.pow(2, -20 * x + 10)) / 2;
    
    }

