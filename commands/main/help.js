const Discord = require("discord.js")

module.exports = {
  name: "help",
  run: async (client, message, args, db, color, yes, no, dev) => {
    
    
//* ----------------------------- ~ AXAN $ ZICC ~ ----------------------------- *//


        let help = new Discord.MessageEmbed()
          .setAuthor("ANTI RAID HELP")
          .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
          .setDescription("Bot Anti-Raid Collab Whizkazz x KarsaBestari")
        
          .addField('MAIN' , '`menu` , `suggest` , `invite`')
          .addField('SETUP' , '`logs` , `punishment` , `clearuser`')
          .addField('LIMIT' , '`banlimit` , `kicklimit` , `channelcreatelimit` , `channeldeletelimit` , `rolecreatelimit` , `roledeletelimit`')
          .addField("TRUSTED", '`addtrusted` , `removetrusted` , `trustedlist`')
        
          .addField("SUPPORT", "[Support Server](https://discord.gg/vxcuD5ShJC)  |  [Whizkazz](https://discord.gg/GJQYKR9YVV)  //*|  [KarsaBestari](https://discord.gg/5wDwU2ERcZ) *// |  [Invite](https://discord.com/api/oauth2/authorize?client_id=848547939521265686&permissions=8&scope=bot)", true)
          .setFooter(dev)
          .setColor(color)
          .setTimestamp()
        
        return message.channel.send(help)
      }
    }

//[Donate](https://saweria.co/ziconakano)