const Discord = require("discord.js")

module.exports = {
  name: "removetrusted",
  run: async (client, message, args, db, color, yes, no, dev) => {
    
    
//* ----------------------------- ~ AXAN $ ZICC ~ ----------------------------- *//
    
    
    if (message.author.id === message.guild.ownerID) {
      let user = message.mentions.users.first()
    
      
      if (!user) {
        let usermention = new Discord.MessageEmbed()
          .setThumbnail(no)
          .addField("ERROR", "Harap mention user")
          .addField("CONTOH", "removetrusted @zicc#1101")
          .setColor(color)
          .setFooter(dev)
          .setTimestamp()
        return message.channel.send(usermention) 
      }
    
      
      let whitelist = db.get(`whitelist_${message.guild.id}`)
        if (whitelist) {
          let omg = whitelist.find(x => x.user === user.id)
      
          
      if (!omg) {
        let unabletofind = new Discord.MessageEmbed()
          .addField("ERROR", "User tersebut tidak ada pada trusted list")
          .setThumbnail(no)
          .setColor(color)
          .setFooter(dev)
          .setTimestamp()
        return message.channel.send(unabletofind) 
      }
        
          
      let index = whitelist.indexOf(omg)
        delete whitelist[index]
          let fix = whitelist.filter(x => { return x != null && x != '' } )
      
          
      db.set(`whitelist_${message.guild.id}`, fix) 
        let deleted = new Discord.MessageEmbed()
          .addField("SUKSES", `Menghapus ${user} dari trusted list`)
          .setThumbnail(yes)
          .setColor(color)
          .setFooter(dev)
          .setTimestamp()
        return message.channel.send(deleted)
      } 
    
      
      else {
        let nothing = new Discord.MessageEmbed()
          .addField("ERROR", "User tersebut tidak ada pada trusted list")
          .setThumbnail(no)
          .setColor(color)
          .setFooter(dev)
          .setTimestamp()
        return message.channel.send(nothing) 
      } 
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