const Discord = require("discord.js")

module.exports = {
  name: "clearuser",
  run: async (client, message, args, db, color, yes, no, dev) => {


//* ----------------------------- ~ AXAN $ ZICC ~ ----------------------------- *//


      let user = message.mentions.users.first()
      let stuff = [`${message.guild.id}_${user.id}_rolecreate`, `${message.guild.id}_${user.id}_roledelete`, `${message.guild.id}_${user.id}_channelcreate`, `${message.guild.id}_${user.id}_channeldelete`, `${message.guild.id}_${user.id}_banlimit`, `${message.guild.id}_${user.id}_kicklimit`]
      
        stuff.forEach(bruh => db.delete(bruh))
    
        let yoi = new Discord.MessageEmbed()
          .setThumbnail(yes)
          .addField("SUKSES", `Berhasil`)
          .setFooter(dev)
          .setColor(color)
          .setTimestamp()
        return message.channel.send(yoi);
      }
    }