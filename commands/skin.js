const discord = require('discord.js');
const fetch = require('node-fetch'); //actually we don't need this actually :D
const mcapi = require('mcapi');

module.exports = {
    name: "skin",
    category: "accounts",
    description: "accounts",
    usage: "skin <Nick del jugador>",
    run: async(client,message,args) => {
        try{
            //we are gonna use try
            //if skin requested is not found
            let uuid = await mcapi.usernameToUUID(`${args.join(" ")}`)
            let embed = new discord.MessageEmbed()
            .setTitle(`Skin del Usuario ${args.join(" ")}`)
            .addField("Nick",`${args.join(" ")}`)
            .addField("UUID", uuid)
            .addField("Descargar",`[Click Aqui](https://minotar.net/download/${args.join(" ")})`)
            .addField("NameMC",`[Click Aqui](https://mine.ly/${args.join(" ")}.1)`)
            .setImage(`https://minecraftskinstealer.com/api/v1/skin/render/fullbody/${args.join(" ")}/700`)
            .setColor('#AE0505')
            .setThumbnail(`https://minotar.net/cube/${args.join(" ")}/100.png`)
            message.channel.send(embed);            
        }   catch(e) {
            message.channel.send("Skin no encontrada")
		}

		// command ends here
	}
 }