const HomeButton = document.getElementById("HomeButton")
const ProjectButton = document.getElementById("ProjectButton")
const ContactButton = document.getElementById("ContactButton")

let Menu = [HomeButton, ProjectButton, ContactButton]

var CurrentPosition = 0;
var TargetPosition

for(let i=0; i < Menu.length; i++){
    if(i == CurrentPosition){
        console.log("ITS WORKING MAYBE")
        Menu[i].style.textDecorationLine = "underline"
    }else{
        Menu[i].style.textDecorationLine = "none"
    }
}



function TransHome(){
    TargetPosition = 0
    Transition()
}



function TransProject(){
    TargetPosition = 1
    Transition()
}


function TransContact(){
    console.log("test")
    TargetPosition = 2
    Transition()
}

function Transition() {
    const ProjectDiv = document.getElementById("ProjectDiv")
    const HomeDiv = document.getElementById("HomeDiv")
    const ContactDiv = document.getElementById("ContactDiv")

    console.log("TARGET: " + TargetPosition + " CURRENT: " + CurrentPosition)
    if (CurrentPosition == TargetPosition){
        return
    }
    console.log("HELLOW :3")
    let id = null;
    let pos = 0;
    id = setInterval(frame, 1);

    if (TargetPosition > CurrentPosition){
        anim_step = -1
    }else{
        anim_step = +1
    }

    if (Math.abs(CurrentPosition - TargetPosition) == 2){
        console.log("Testing " + CurrentPosition + " target " + TargetPosition)
        anim_step *= 2;
    }

    start = (0 - CurrentPosition) * 100

    var time = 0
    function frame() {
        if (time == 100) {
            clearInterval(id);
            CurrentPosition = TargetPosition
            for(let i=0; i < Menu.length; i++){
                    if(i == CurrentPosition){
                        console.log("ITS WORKING MAYBE")
                        Menu[i].style.textDecorationLine = "underline"
                    }else{
                        Menu[i].style.textDecorationLine = "none"
                    }
            }
        } else {
            time++
            pos = ((anim_step * easeInOutCubic(time/100)) * 100) + start
            ProjectPos = pos + 100
            ContactPos = pos + 200
            HomeDiv.style.left = pos + '%';
            ProjectDiv.style.left = ProjectPos + '%'
            ContactDiv.style.left = ContactPos + "%"
        }
      }
      
}




function easeInOutCubic(x) {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    }