const { app, BrowserWindow, ipcMain } = require("electron")
const database = require("./db")

function criarJanela() {
    const janela = new BrowserWindow({
        width: 1200,
        height: 800,
        //add icon
        icon: "public/assets/logo.png",
        // function para carregar o preload.js
        webPreferences: {
            preload: __dirname + "/preload.js"
        }
    })

    janela.loadFile("public/login.html")
    //abrir devtools
    janela.webContents.openDevTools()
}

app.whenReady().then(criarJanela)

//logica para ligar o front com back, login é o nome do canal de comunicação entre o front e o back
ipcMain.handle("login", async function(event, email, password) {
    console.log("4. function de login no main com IPC, email", email, "password", password)

    //verificação de login, se o email e senha constam no banco de dados,
    const [ rows ] = await database.query("SELECT * FROM users WHERE email = ? AND password = ? AND  is_active = 1", [email, password])
    console.log("5. resultado da query", rows[0])
})