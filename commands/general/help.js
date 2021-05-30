const Discord = require("discord.js")

module.exports = {
  name: "help",
  run: async (client, message, args, db, color, yes, no, dev) => {
    
    
//* ----------------------------- ~ AXAN $ ZICC ~ ----------------------------- *//


        let help = new Discord.MessageEmbed()
          .setAuthor("ANTI RAID HELP")
          .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
          .setDescription("Bot Anti-Raid Collab Whizkazz x Karsa")
          
          .addField('SETUP' , '`logs` , `menu` , `punishment` , `clearuser`')
          .addField('LIMIT' , '`banlimit` ,  , `channelcreatelimit` , `channeldeletelimit`')
          .addField("TRUSTED", '`addtrustedlist` , `removetrusted`')
        
          .addField("SUPPORT", " [Whizkazz](https://discord.gg/GJQYKR9YVV)| [Karsa](https://discord.gg/5wDwU2ERcZ)", true)
          .setFooter(dev)
          .setColor(color)
          .setTimestamp()
        
        return message.channel.send(help)
      }
    }

//[Donate](https://saweria.co/ziconakano)