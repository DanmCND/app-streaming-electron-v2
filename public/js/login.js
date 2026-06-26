//evento para fução de login
document.getElementById("form-login").addEventListener("submit", async function (event) {
    event.preventDefault(); // Impede o envio padrão do forms
    console.log("1. evento de submit acionado");

    // Obter os valores dos campos de entrada
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log("2. email", email, "password", password);

    // chamar função de login do preload.js
    const user = await window.api.login(email, password); 

});