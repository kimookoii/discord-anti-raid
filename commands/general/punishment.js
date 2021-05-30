const Discord = require("discord.js")

module.exports = {
  name: "punishment",
  run: async (client, message, args, db, color, yes, no, dev) => {
    
    
//* ----------------------------- ~ AXAN $ ZICC ~ ----------------------------- *//
    
    
      function check(msg, arr) { return arr.some(op => op.toLowerCase() === msg.toLowerCase());
    }
    
      if (!args[0]) {
        let missing = new Discord.MessageEmbed()
          .setThumbnail(no)
          .addField("EROR", "Beri hukuman yg bener")
          .addField("CONTOH", "punishment ban\npunishment kick\npunishment demote")
          .setFooter(dev)
          .setColor(color)
          .setTimestamp()
        return message.channel.send(missing);
      }
    
    
      if (check(args[0], ["ban", "kick", "demote"]) === false) {
        let missing = new Discord.MessageEmbed()
          .setThumbnail(no)
          .addField("EROR", "Beri hukuman yg bener")
          .addField("CONTOH", "punishment ban\npunishment kick\npunishment demote")
          .setFooter(dev)
          .setColor(color)
          .setTimestamp()
        return message.channel.send(missing);
      }
    
    
        db.set(`punish_${message.guild.id}`, args[0].toLowerCase())
        let ok = new Discord.MessageEmbed()
          .setThumbnail(yes)
          .addField("SUKSES", `Hukuman diatur ke ${args[0]}`)
          .setFooter(dev)
          .setColor(color)
          .setTimestamp()
        return message.channel.send(ok);
      }
    }