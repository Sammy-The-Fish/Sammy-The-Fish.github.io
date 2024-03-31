const Numbers = document.getElementById("numbers")



window.onload = loadBackground()

function loadBackground(){
    let string = ""
    for (let i = 0; i<100; i++){
        for(let j=0; j<100; j++){
        string += " 2"
        }
        string += "<br>"
    }
    Numbers.innerHTML = string
}


function changeBackground(){
    
    id = setInterval(Frame, 50, 100, " 3")
    time = 0
    function Frame(length, newValue){
        if(time == length){
            clearInterval(id)
            return
        }
        console.log("running")
        time++
        let string = ""
        for (let i = 0; i<100; i++){
            for(let j=0; j<100; j++){
                if(j == (time - i)){
                    string += "<span style = 'font-weight: bolder'>" + newValue + "</span>"
                }else if(j <= (time - i)){
                    string += newValue
                }else{
                    string += " 2"
                }
            }
            string += "<br>"
        }
        console.log(string)
        Numbers.innerHTML = string
    }
}