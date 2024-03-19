const HomeButton = document.getElementById("HomeButton")
const ProjectButton = document.getElementById("ProjectButton")
const ContactButton = document.getElementById("ContactButton")
const LinuxButton = document.getElementById("LinuxButton")


let Menu = [HomeButton, ProjectButton, ContactButton]

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



var Enterid = setInterval(FloatInFrame, 10)


var time = 0
function FloatInFrame(){
    if (time == 200){
        clearInterval(Enterid)
    }else{
        console.log("is this running?");
        time++;
        console.log(time);
        for(let i=0; i < pages.length; i++){
            pages[i].style.marginTop =  (100 - (easeOutQuint(time/200) * 100)) + "%";
        }
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

function TransLinux(){
    console.log("test linux")
    TargetPosition = 3
    Transition()
}


function Transition() {
    const ProjectDiv = document.getElementById("ProjectDiv")
    const HomeDiv = document.getElementById("HomeDiv")
    const ContactDiv = document.getElementById("ContactDiv")
    const LinuxDiv = document.getElementById("LinuxDiv")

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

    anim_step *= Math.abs(TargetPosition - CurrentPosition) 

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
            LinuxPos = pos + 300
            HomeDiv.style.left = pos + '%';
            ProjectDiv.style.left = ProjectPos + '%'
            ContactDiv.style.left = ContactPos + "%"
            LinuxDiv.style.left = LinuxPos + "%"
        }
      }
      
}




function easeInOutCubic(x) {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    }



function easeOutQuint(x){
    return 1 - Math.pow(1 - x, 5);
}