const Form1 = document.getElementById("form-1")

console.log("testing")


Form1.addEventListener("submit", function (event) {
    event.preventDefault()
    const formData = new FormData(Form1)
    const FormEntries = Object.fromEntries(formData.entries());
    console.log(FormEntries)

})