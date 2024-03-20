const HomeButton = document.getElementById("HomeButton")
const ProjectButton = document.getElementById("ProjectButton")
const ContactButton = document.getElementById("ContactButton")
const LinuxButton = document.getElementById("LinuxButton")


let Menu = [HomeButton, ProjectButton, ContactButton, LinuxButton]


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


for (let child of PageDiv.children) {
    console.log(child);
}


var Enterid = setInterval(FloatInFrame, 10)


// apiUrl = "http://127.0.0.1:8000"

// fetch(apiUrl)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

// test = fetch(apiUrl)





var time = 0
function FloatInFrame(){
    if (time == 200){
        clearInterval(Enterid)
    }else{
        time++;
        for(let i=0; i < pages.length; i++){
            pages[i].style.marginTop =  (100 - (easeOutQuint(time/200) * 100)) + "%";
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
    
    
    id = setInterval(frame, 1);
    function frame() {
        if (time == 100) {
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