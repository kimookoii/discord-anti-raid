const Discord = require("discord.js")
module.exports = {
  name: "trustedlist",
  run: async (client, message, args, db, color, yes, no, dev) => {
    
    
//* ----------------------------- ~ AXAN $ ZICC ~ ----------------------------- *//
    
    
      let bruh =[]
        let embed = new Discord.MessageEmbed()
          .setAuthor("TRUSTED LIST")
          .setColor(color)
          .setFooter("Axan Ft. Zicc Developer")
          .setTimestamp()
        
        
        let whitelisted = db.get(`whitelist_${message.guild.id}`)
        if(whitelisted && whitelisted.length) { whitelisted.forEach(x => { bruh.push(`<@${x.user}>`)})
                                                
          embed.setDescription(`${bruh.join("\n")}`)
          embed.setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
          embed.setColor(color)
          embed.setFooter(dev)
          embed.setTimestamp()
      } 
    
        else {
          embed.setDescription("Tidak ada user pada trusted list")
          embed.setThumbnail(no)
          embed.setColor(color)
          embed.setFooter(dev)
          embed.setTimestamp()
      }
    
        message.channel.send({ embed: embed })
      }
    }