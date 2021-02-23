const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let help = new Discord.MessageEmbed()
      .setAuthor("Zero")
      .setTitle("Lista de comandos y guí­a para el bot")
      .setDescription("A continuación se muestran los comandos que puede hacer con Bot, en este momento solo hay 6 comandos disponibles, pronto se agregarán más comandos.")
      .addField("🎁 Giveaway 🎁","start [channel-name] [Tiempo] [Ganadores] [Premio]\nreroll [Nombre del premio]\nend [Nombre del premio]")
      .addField("Ejemplo", "adn!start #giveaway 5m 1 Testeando\ng!end Testeando\ng!reroll Testeando")
      .addField("Utilidad", "ping, invite", true)
      .addField("ℹ Información ℹ", "stats", true)
      .addField("Revisa", "[El canal](https://www.youtube.com/channel/UCF9E-xef9jL9QgziZRDHKKQ) to make your own giveaway bot")
      .setTimestamp()
      .setFooter(`Comando solicitado por ${message.author.tag}`, client.user.displayAvatarURL());
    message.channel.send("**Envió los comandos en mensajes directos! 💌, Mira MD**");

    return message.author.send(help);
}

module.exports.help = {
  name: "helpgw"
}
