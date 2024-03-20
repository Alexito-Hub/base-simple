require('./config')
const makeWAClient = require('makewaclient-baileys')
const fs = require('fs')

const start = async() => {
        const { sock } = await makeWAClient({
            browser: "chrome",
        path: "auth/session",
        qr: false,
        token: 'socket-yourtoken',
    });
	sock.ev.on("serealize.message", async({sock, m}) => {
        let v = m.quoted ? m.quoted : m;

        switch(m.command) {
            case 'hola':
                m.client("holaaaaaa")
                break
        }
    })
}
start();

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Fue Actualizado ${__filename}`)
	delete require.cache[file]
	require(file)
})