/*const util = require("minecraft-server-util")

        const options = {
            timeout: 1000 * 5,
            enableSRV: true
        }
        
		util.status('play.ccnetmc.com', 25567, options).then((result) => console.log(result)).catch((error) => console.error(error));*/

const fetch = require("node-fetch");

async function getKiev() {

var kiev = await fetch("https://shadowevil015.tech/api/v1/towns/kiev").then(res => res.json()).catch(err => { return err })

var stringed = JSON.stringify(kiev.colourCodes.fill)

console.log(stringed)

}

getKiev();