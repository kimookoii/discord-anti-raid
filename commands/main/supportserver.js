const Discord = require("discord.js")

module.exports = {
  name: "supportserver",
  run: async (client, message, args, db, color, yes, no, dev) => {
    
    
//* ----------------------------- ~ AXAN $ ZICC ~ ----------------------------- *//


        let help = new Discord.MessageEmbed()
          .setAuthor("ANTI RAID SUPPORT SERVER")
          .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
          .setDescription("[Klik disini](https://discord.gg/vxcuD5ShJC)")
          .setFooter(dev)
          .setColor(color)
          .setTimestamp()
        return message.channel.send(help)
      }
    }

//[Donate](https://saweria.co/ziconakano)