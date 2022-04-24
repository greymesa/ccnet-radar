/*const util = require("minecraft-server-util")

        const options = {
            timeout: 1000 * 5,
            enableSRV: true
        }
        
		util.status('play.ccnetmc.com', 25567, options).then((result) => console.log(result)).catch((error) => console.error(error));*/

const fetch = require("node-fetch");

async function getOnlinePlayers() {

    var onlinePlayers = await fetch("https://shadowevil015.tech/api/v1/onlinePlayers").then(res => res.json()).catch(err => { return err })

    var testing = onlinePlayers.name

    console.log(testing)
    
  /*  onlinePlayers.forEach((player) => {
       var stringy =  JSON.stringify(player.name);
       var counted = player.name.split(/"/g).length;
      // console.log(onlinePlayers.length);
       console.log(counted);
    }
)};*/ }



getOnlinePlayers();