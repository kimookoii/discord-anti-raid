const Discord = require("discord.js")

module.exports = {
  name: "invite",
  run: async (client, message, args, db, color, yes, no, dev) => {
    
    
//* ----------------------------- ~ AXAN $ ZICC ~ ----------------------------- *//
    
    
        let invite = new Discord.MessageEmbed()
          .setAuthor("ANTI RAID INVITE")
          .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
          .setDescription("[Klik disini](https://discord.com/api/oauth2/authorize?client_id=848547939521265686&permissions=8&scope=bot)")
          .setFooter(dev)
          .setColor(color)
          .setTimestamp()
        return message.channel.send(invite)
      }
    }