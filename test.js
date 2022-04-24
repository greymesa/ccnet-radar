/*const util = require("minecraft-server-util")

        const options = {
            timeout: 1000 * 5,
            enableSRV: true
        }
        
		util.status('play.ccnetmc.com', 25567, options).then((result) => console.log(result)).catch((error) => console.error(error));*/

const fetch = require("node-fetch");

async function getOnlinePlayers() {

    var onlinePlayers = await fetch("https://shadowevil015.tech/api/v1/onlinePlayers").then(res => res.json()).catch(err => { return err })
    
    onlinePlayers.forEach((player) => {
       // console.log(player);
       var stringy =  JSON.stringify(player.name);
       console.log(stringy);
    }
    )};

getOnlinePlayers();