//logica para ligar o front com back
const { contextBridge, ipcRenderer } = require("electron");

console.log("0. carregou preload")

contextBridge.exposeInMainWorld("api", {

    login: function (email, password) {
        console.log("3. função de login")
        
        //chama a função de login no main.js
        return ipcRenderer.invoke("login",email, password) 
    }

})