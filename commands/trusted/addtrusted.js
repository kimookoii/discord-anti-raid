const Discord = require("discord.js")

module.exports = {
  name: "addtrusted",
  run: async (client, message, args, db, color, yes, no) => {
    
    
//* ----------------------------- ~ AXAN $ ZICC ~ ----------------------------- *//
    
    
      if (message.author.id === message.guild.ownerID) {
      let user = message.mentions.users.first()
      
      
      if (!user) {
        let usermention = new Discord.MessageEmbed()
          .setThumbnail(no)
          .addField("ERROR", "Harap mention user")
          .addField("CONTOH", "addtrusted @zicc#1101")
          .setColor(color)
          .setFooter("XNXX Development")
          .setTimestamp()
        return message.channel.send(usermention) 
      }
        
        
      let whitelist = db.get(`whitelist_${message.guild.id}`)
        if(whitelist && whitelist.find(x => x.user == user.id)) {
          
        let trusteteted = new Discord.MessageEmbed()
          .setThumbnail(no)
          .addField("ERROR", "User tersebut sudah ada pada trusted list")
          .setColor(color)
          .setFooter("XNXX Development")
          .setTimestamp()
        return message.channel.send(trusteteted)
      }
        
        
      db.push(`whitelist_${message.guild.id}`, { user: user.id })
        let trusteteted = new Discord.MessageEmbed()
          .addField("SUKSES", `Menambahkan ${user} dari trusted list`)
          .setThumbnail(yes)
          .setColor(color)
          .setFooter("XNXX Development")
          .setTimestamp()
        return message.channel.send(trusteteted)
      } 
    
    
      else {
        let onlyowner = new Discord.MessageEmbed()
          .setThumbnail(no)
          .setColor(color)
          .setFooter("XNXX Development")
          .setTimestamp()
          .addField("ERROR", "Hanya owner server yang dapat menggunakan command ini")
        return message.channel.send(onlyowner)
      }
    }
  }