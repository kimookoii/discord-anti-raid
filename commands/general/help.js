const Discord = require("discord.js")

module.exports = {
  name: "help",
  run: async (client, message, args, db, color, yes, no, dev) => {
    
    
//* ----------------------------- ~ AXAN $ ZICC ~ ----------------------------- *//


        let help = new Discord.MessageEmbed()
          .setAuthor("ANTI RAID HELP")
          .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
          .setDescription("Bot Anti-Raid Collab Whizkazz x Karsa")
        
          .addField('MAIN' , 'menu`')
          .addField('SETUP' , '`logs` , `punishment` , `clearuser`')
          .addField('LIMIT' , '`banlimit` , `kicklimit` , `channelcreatelimit` , `channeldeletelimit` , `rolecreatelimit` , `roledeletelimit`')
          .addField("TRUSTED", '`addtrustedlist` , `removetrusted` , `trustedlist`')
        
          .addField("SUPPORT", "[Support Server](https://discord.gg/caX4QFHGnN) | [Whizkazz](https://discord.gg/GJQYKR9YVV) | [Karsa](https://discord.gg/5wDwU2ERcZ)", true)
          .setFooter(dev)
          .setColor(color)
          .setTimestamp()
        
        return message.channel.send(help)
      }
    }

//[Donate](https://saweria.co/ziconakano)