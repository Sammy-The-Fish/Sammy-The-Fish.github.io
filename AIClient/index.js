const Form1 = document.getElementById("form-1")
const Form2 = document.getElementById("form-2")

const IpAdressField = document.getElementById("ip-adress")
const PortField = document.getElementById("port")
const DiscordButton = document.getElementById("discord-button")
const DiscordErrorText = document.getElementById("discord-error")

console.log("testing")

var IpAdress = 0;
var port = 5000;

Form1.addEventListener("submit", function (event) {
    event.preventDefault()
    IpAdress = IpAdressField.value
    port = PortField.value
    let FormElement = Form1.children
    Array.from(FormElement).forEach(element => {
        element.disabled = true
    });
    document.documentElement.style.setProperty("--form-one-color", "#8f8f8f")
    CheckOnline(IpAdress, port)
    requestAnimationFrame(() =>  FloatIn(Form2, 100))
})

Form2.style.marginTop

DiscordButton.addEventListener("click", function () {
    fetch(`http://${IpAdress}:${port}/discord_test`)
    .then(response => {
        if (!response.ok){
            throw new Error("ERROR: " + response.statusText)
        }else if (response.text() == "OFFLINE"){
            throw new Error("ERROR: BOT NOT ONLINE")
        }
        return response.text()
    })
    .then(data =>
        console.log(data)
    )
    .catch(error =>{
        DiscordErrorText.innerHTML = error
    })
})


function CheckOnline(ip, port){
    fetch(`http://${ip}:${port}/test`)
        .then(response => {
            if (!response.ok){
                console.error("there was an error")
            }
            return response.text()
        })
        .then(data =>
            console.log(data)
        )
        .catch(error =>{
            console.error("there was an eroor, but ir went here")
        })
}


function FloatIn(element, length, time=0){
    element.style.marginTop = 100-(easeInOutCubic(time/length) * 100) + "vh"
    time++
    if (time <= length){
        requestAnimationFrame(() => FloatIn(element, length, time))
    }
}


function easeInOutCubic(x){
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    }