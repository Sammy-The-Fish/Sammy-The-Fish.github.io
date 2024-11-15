const Form1 = document.getElementById("form-1")
const Form2 = document.getElementById("form-2")
const Form3 = document.getElementById("form-3")


const IpAdressField = document.getElementById("ip-adress")
const PortField = document.getElementById("port")
const DiscordButton = document.getElementById("discord-button")
const BrowserButton = document.getElementById("browser-button")

const Form2Error = document.getElementById("form-two-error")
const Form1Error = document.getElementById("form-one-error")


var ExampleData = {
    guilds: [
        {
            name: "test server 1",
            id: 98730865087432,
            voice_channels: [
                {
                    name: "test channel 1",
                    id: 95034582765987
                },
                {
                    name: "gaming channel",
                    id: 827365876589324
                },
                {
                    name: "another channel",
                    id: 87356928735
                }
            ]
        },
        {
            name: "test server 2",
            id: 9887730865087432,
            voice_channels: [
                {
                    name: "test channel 1",
                    id: 43876592752
                },
                {
                    name: "not gamng channel",
                    id: 734658273
                },
                {
                    name: "another channel",
                    id: 3286375964329856328756293874
                }
            ]
        }

    ]
}


function PopulateForm3(data) {
    const List = document.getElementById("guild-list")
    let guilds = data.guilds
    guilds.forEach(guild => {
        let ListHeading = document.createElement("h2")
        ListHeading.classList.add("server-title")
        ListHeading.textContent = `${guild.name}`

        let ListContent = document.createElement("p")
        let SubList = document.createElement("ol")
        
        let channels = guild.voice_channels
        channels.forEach(channel => {
            let SubListItem = document.createElement("li")

            let button = document.createElement("button")
            button.classList.add("server-button")
            button.textContent = `${channel.name}`
            button.id = `${guild.id}:${channel.id}`
            button.addEventListener("click", function () {
                JoinVoiceCall(button)
            })

            SubListItem.appendChild(button)
            SubList.appendChild(SubListItem)
        })
        ListContent.appendChild(SubList)
        List.appendChild(ListHeading)
        List.appendChild(ListContent)
    })
    FloatIn(Form3)
}

function JoinVoiceCall(element) {
    let id = element.id
    let ids = id.split(":")
    let guild_id = ids[0]
    let voice_id = ids[1]
    let data = {
        guild_id: guild_id,
        voice_id: voice_id
    }
    fetch(`http://${IpAdress}:${port}/connect_voice`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        // Display the result
        console.log(result)
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


// PopulateForm3(ExampleData)

var IpAdress = 0;
var port = 5000;

Form1.addEventListener("submit", function (event){
    event.preventDefault()
    IpAdress = IpAdressField.value
    port = PortField.value
    CheckOnline(IpAdress, port)
})

Form2.style.marginTop

DiscordButton.addEventListener("click", function () {
    fetch(`http://${IpAdress}:${port}/get_guilds`)
    .then(response => {
        if (!response.ok){
            throw new Error("ERROR: " + response.statusText)
        }
        // }else if (response.text() == "OFFLINE"){
        //     throw new Error("ERROR: BOT NOT ONLINE")
        // }
        return response.json()
    })
    .then(data =>
        {
            PopulateForm3(data.response)
            Form2Success()
        }
    )
    .catch(error =>{
        Form2Error.innerHTML = error
    })
})


function CheckOnline(ip, port){
    fetch(`http://${ip}:${port}/test`)
        .then(response => {
            if (!response.ok){
                throw new Error("ERROR: + " + response.statusText)
            }
            return response.text()
        })
        .then(data => {
                if (data != "alive"){
                    throw new Error("tbh, somethings gone really really wrong, your on your own now 😢")
                }
                Form1Success()
            }
        )
        .catch(error =>{
            Form1Error.innerHTML = error
        })
}

function Form1Success(){
    Form1Error.innerHTML = ""
    requestAnimationFrame(() =>  FloatIn(Form2, 100))
    let FormElement = Form1.children
    document.documentElement.style.setProperty("--form-one-color", "#928f9b")
    Array.from(FormElement).forEach(element => {
        element.disabled = true
    });
}

function Form2Success(){
    Form2Error.innerHTML = ""
    requestAnimationFrame(() => FloatIn(Form3, 100))
    const header = document.getElementById("form-two-header")
    header.style.color = "#928f9b"
    DiscordButton.disabled = true
    BrowserButton.disabled = true
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