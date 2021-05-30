const Discord = require("discord.js")

module.exports = {
  name: "roledeletelimit",
  run: async (client, message, args, db, color, yes, no, dev) => {
    
    
//* ----------------------------- ~ AXAN $ ZICC ~ ----------------------------- *//
    
    
      if (!args[0]) {
        let missing = new Discord.MessageEmbed()
          .setThumbnail(no)
          .addField("EROR", "Masukkan angka (0-9)")
          .addField("CONTOH", "roledeletelimit 1")
          .setFooter(dev)
          .setColor(color)
          .setTimestamp()
        return message.channel.send(missing);
      }
    
    
      if (isNaN(args[0])) {
        let missing = new Discord.MessageEmbed()
          .setThumbnail(no)
          .addField("EROR", "Masukkan angka (0-9)")
          .addField("CONTOH", "roledeletelimit 1")
          .setFooter(dev)
          .setColor(color)
          .setTimestamp()
        return message.channel.send(missing);
      }
    
    
      if (Number(args[0]) < 0) {
        let missing = new Discord.MessageEmbed()
          .setThumbnail(no)
          .addField("EROR", "Masukkan angka (0-9)")
          .addField("CONTOH", "roledeletelimit 1")
          .setFooter("XNXX Development")
          .setColor(color)
          .setTimestamp()
        return message.channel.send(missing);
      }
    
      db.set(`roledelete_${message.guild.id}`, Number(args[0]))
    
        let ok = new Discord.MessageEmbed()
          .setThumbnail(yes)
          .addField("SUKSES", `Role delete limit telah diatur ke ${Number(args[0])}`)
          .setFooter(dev)
          .setColor(color)
          .setTimestamp()
        return message.channel.send(ok);
      }
    }