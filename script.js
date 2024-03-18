


var CurrentPosition = 0;
var TargetPosition

for(i =0; i<1; i+=0.01){
    console.log(easeInOutCubic(i))
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
    alert("Fuck off, not made yet 😡")
}

function Transition() {
    console.log("TARGET: " + TargetPosition + " CURRENT: " + CurrentPosition)
    if (CurrentPosition == TargetPosition){
        return
    }
    const ProjectDiv = document.getElementById("ProjectDiv")
    const HomeDiv = document.getElementById("HomeDiv")
    console.log("HELLOW :3")
    let id = null;
    let pos = 0;
    id = setInterval(frame, 1);

    if (TargetPosition > CurrentPosition){
        anim_step = -1
        target = -100
        start = 0
    }else{
        anim_step = +1
        target = 0
        start = -100
    }

    let time = 0
    function frame() {
        if (time == 100) {
            clearInterval(id);
            CurrentPosition = TargetPosition
        } else {
            time++
            pos = ((anim_step * easeInOutCubic(time/100)) * 100) + start
            ProjectPos = pos + 100
            HomeDiv.style.left = pos + '%';
            ProjectDiv.style.left = ProjectPos + '%'
        }
      }
      
}




function easeInOutCubic(x) {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    }