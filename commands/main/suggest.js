const Discord = require("discord.js")

module.exports = {
  name: "suggest",
  run: async (client, message, args, db, color, yes, no, dev) => {
    
    
//* ----------------------------- ~ AXAN $ ZICC ~ ----------------------------- *//
    
    
      if(!args.length) {
        let missing = new Discord.MessageEmbed()
          .setThumbnail(no)
          .addField("EROR", "Beri suggesti yang bener dong")
          .addField("CONTOH", "suggest nambah anu")
          .setFooter(dev)
          .setColor(color)
          .setTimestamp()
        return message.channel.send(missing);
      }
 
      let channel = message.guild.channels.cache.find((x) => (x.name === "「💭」suggestion" || x.name === "「💭」suggestion"))
    
      if(!channel) { return message.channel.send("Sementara tidak ada saluran untuk saran") }

        let embed = new Discord.MessageEmbed()
          .setAuthor("SUGESTION")
          .setThumbnail(message.author.avatarURL())
          .setDescription(args.join(" "))
          .setColor(color)
          .setTimestamp()
          .setFooter(`Dari ${message.author.username}#${message.member.user.discriminator}`)
        channel.send(embed)
      
        .then(m => { m.react("✅")
                     m.react("❌") } ) 
    { 
      
        const sug = new Discord.MessageEmbed()
          .setColor(color)
          .setAuthor("SUGESTION")
          .setThumbnail(client.user.displayAvatarURL())
          .setDescription(`Mengirim saran kamu ke ${channel}`)
          .setFooter(`Terimakasih ${message.author.username}#${message.member.user.discriminator}`)
          .setTimestamp()
        message.channel.send(sug) 
      }
    }
  }