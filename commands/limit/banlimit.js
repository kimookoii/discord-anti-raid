const Discord = require("discord.js")

module.exports = {
  name: "banlimit",
  run: async (client, message, args, db, color, yes, no) => {
    
    
//* ----------------------------- ~ AXAN $ ZICC ~ ----------------------------- *//
    
    
      if (!args[0]) {
        let missing = new Discord.MessageEmbed()
          .setThumbnail(no)
          .addField("EROR", "Masukkan angka (0-9)")
          .addField("CONTOH", "banlimit 1")
          .setFooter("XNXX Development")
          .setColor(color)
          .setTimestamp()
        return message.channel.send(missing);
      }
    
    
      if (isNaN(args[0])) {
        let missing = new Discord.MessageEmbed()
          .setThumbnail(no)
          .addField("EROR", "Masukkan angka (0-9)")
          .addField("CONTOH", "banlimit 1")
          .setFooter("XNXX Development")
          .setColor(color)
          .setTimestamp()
        return message.channel.send(missing);
      }
    
    
      if (Number(args[0]) < 0) {
        let missing = new Discord.MessageEmbed()
          .setThumbnail(no)
          .addField("EROR", "Masukkan angka (0-9)")
          .addField("CONTOH", "banlimit 1")
          .setFooter("XNXX Development")
          .setColor(color)
          .setTimestamp()
        return message.channel.send(missing);
      }
    
      db.set(`banlimit_${message.guild.id}`, Number(args[0]))
    
        let ok = new Discord.MessageEmbed()
          .setThumbnail(no)
          .addField("SUKSES", `Ban limit telah diatur ke ${Number(args[0])}`)
          .setFooter("XNXX Development")
          .setColor(color)
          .setTimestamp()
        return message.channel.send(ok);
      }
    }