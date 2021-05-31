const Discord = require("discord.js")

module.exports = {
  name: "banlimit",
  run: async (client, message, args, db, color, yes, no, dev) => {
    
    
//* ----------------------------- ~ AXAN $ ZICC ~ ----------------------------- *//
    
    
      if (message.author.id === message.guild.ownerID) {
      let user = message.mentions.users.first()
      
      
      if (!args[0]) {
        let missing = new Discord.MessageEmbed()
          .setThumbnail(no)
          .addField("EROR", "Masukkan angka (0-9)")
          .addField("CONTOH", "banlimit 1")
          .setFooter(dev)
          .setColor(color)
          .setTimestamp()
        return message.channel.send(missing);
      }
    
    
      if (isNaN(args[0])) {
        let missing = new Discord.MessageEmbed()
          .setThumbnail(no)
          .addField("EROR", "Masukkan angka (0-9)")
          .addField("CONTOH", "banlimit 1")
          .setFooter(dev)
          .setColor(color)
          .setTimestamp()
        return message.channel.send(missing);
      }
    
    
      if (Number(args[0]) < 0) {
        let missing = new Discord.MessageEmbed()
          .setThumbnail(no)
          .addField("EROR", "Masukkan angka (0-9)")
          .addField("CONTOH", "banlimit 1")
          .setFooter(dev)
          .setColor(color)
          .setTimestamp()
        return message.channel.send(missing);
      }
    
      db.set(`banlimit_${message.guild.id}`, Number(args[0]))
    
        let ok = new Discord.MessageEmbed()
          .setThumbnail(yes)
          .addField("SUKSES", `Ban limit telah diatur ke ${Number(args[0])}`)
          .setFooter(dev)
          .setColor(color)
          .setTimestamp()
        return message.channel.send(ok);
      }
    
    
      else {
        let onlyowner = new Discord.MessageEmbed()
          .setThumbnail(no)
          .setColor(color)
          .setFooter(dev)
          .setTimestamp()
          .addField("ERROR", "Hanya owner server yang dapat menggunakan command ini")
        return message.channel.send(onlyowner)
      }
    }
  }