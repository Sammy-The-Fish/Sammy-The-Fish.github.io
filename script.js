const HomeButton = document.getElementById("HomeButton")
const ProjectButton = document.getElementById("ProjectButton")
const ContactButton = document.getElementById("ContactButton")
const LinuxButton = document.getElementById("LinuxButton")


let Menu = [HomeButton, ProjectButton, ContactButton, LinuxButton]

if(screen.availHeight > screen.availWidth * 2){
    let  menu = document.getElementById("MenuBar")

    menu.style.width = "100%"
    var elements = document.getElementsByClassName("horizontal")
    for (let i = 0; i < elements.length; i++){
        elements[i].style.flexDirection = "collumn"
    }
    var elements = document.getElementsByClassName("vertical")
    for (let i = 0; i < elements.length; i++){
        elements[i].style.width = "100%"
    }
    
  }

  



var animating = 0;
var CurrentPosition = 0;
var TargetPosition

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


function TransHome(){
    if (animating){
        return
    }
    TargetPosition = 0
    Transition()
}



function TransProject(){
    if (animating){
        return
    }
    TargetPosition = 1
    Transition()
}


function TransContact(){
    if (animating){
        return
    }
    TargetPosition = 2
    Transition()
}

function TransLinux(){
    if (animating){
        return
    }
    TargetPosition = 3
    Transition()
}


function Transition() {

    if (animating){
        return
    }else if (TargetPosition == CurrentPosition){
        return
    }
    const ProjectDiv = document.getElementById("ProjectDiv")
    const HomeDiv = document.getElementById("HomeDiv")
    const ContactDiv = document.getElementById("ContactDiv")
    const LinuxDiv = document.getElementById("LinuxDiv")

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
            pos = ((anim_step * easeInOutCubic(time/length)) * 100) + start
            ProjectPos = pos + 100
            // ContactPos = pos + 200
            // LinuxPos = pos + 300
            ScrollDiv.style.left = pos + '%';
            // ProjectDiv.style.left = ProjectPos + '%'
            // ContactDiv.style.left = ContactPos + "%"
            // LinuxDiv.style.left = LinuxPos + "%"
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

console.warn("penis")