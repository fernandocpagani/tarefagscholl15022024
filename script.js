let fullName = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let message = document.getElementById("message");
let send = document.getElementById("send");

function sendForm() {

    if (fullName.value == "" || email.value == "" || phone.value == "") {
        message.innerText = "Preencha todos os campos"
        message.style.color = "red"
    } else {
        message.innerText = "Dados enviados com sucesso"
        message.style.color = "green"
    }
}