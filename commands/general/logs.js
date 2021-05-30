const Discord = require("discord.js")

module.exports = {
  name: "logs",
  run: async (client, message, args, db, color, yes, no) => {
    
    
//* ----------------------------- ~ AXAN $ ZICC ~ ----------------------------- *//
    
    
      let channel = message.mentions.channels.first()
      
      if (!channel) {
        let missing = new Discord.MessageEmbed()
          .setThumbnail(no)
          .addField("EROR", "Mention channel yg bener")
          .addField("CONTOH", "logs #anti-raid")
          .setFooter("XNXX Development")
          .setColor(color)
          .setTimestamp()
        return message.channel.send(missing);
      }
    
    
      if (channel.guild.id !== message.guild.id) {
        let missing = new Discord.MessageEmbed()
          .setThumbnail(no)
          .addField("EROR", "Mention channel yg bener")
          .addField("CONTOH", "logs #anti-raid")
          .setFooter("XNXX Development")
          .setColor(color)
          .setTimestamp()
        return message.channel.send(missing);
      }
    
    
      db.set(`logs_${message.guild.id}`, channel.id)
        let ok = new Discord.MessageEmbed()
          .setThumbnail(yes)
          .setAuthor("ANTI RAID LOGS")
          .setFooter("XNXX Development")
          .setColor(color)
          .setTimestamp()
        channel.send(ok);
    
        let yoi = new Discord.MessageEmbed()
          .setThumbnail(yes)
          .addField("SUKSES", `Logs aktif pada ${channel}`)
          .setFooter("XNXX Development")
          .setColor(color)
          .setTimestamp()
        return message.channel.send(yoi);
      }
    }