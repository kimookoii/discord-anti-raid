const Discord = require("discord.js")

module.exports = {
  name: "saran",
  run: async (client, message, args, db, color, yes, no, dev) => {
    
    
//* ----------------------------- ~ AXAN $ ZICC ~ ----------------------------- *//
    
    
      if(!args.length) {
        let missing = new Discord.MessageEmbed()
          .setThumbnail(no)
          .addField("EROR", "Beri saran yang bener dong")
          .addField("CONTOH", "saran nambah anu")
          .setFooter(dev)
          .setColor(color)
          .setTimestamp()
        return message.channel.send(missing);
      }
 
      let channel = client.channels.cache.get("847517455403581510")
    
      if(!channel) { return message.channel.send("Sementara tidak ada saluran untuk saran") }

        let embed = new Discord.MessageEmbed()
          .setAuthor("SARAN")
          .setThumbnail(message.author.avatarURL())
          .setDescription(args.join(" "))
          .setColor(color)
          .setTimestamp()
          .setFooter(`Dari ${message.author.username}#${message.member.user.discriminator}`)
        channel.send(embed)
      
        .then(m => { m.react("848429615323021354")
                     m.react("848429469688397854") } ) 
    { 
      
        const sug = new Discord.MessageEmbed()
          .setColor(color)
          .setThumbnail(yes)
          .addField("SUKSES", `Mengirim saran kamu ke ${channel}`)
          .setFooter(`Terimakasih ${message.author.username}#${message.member.user.discriminator}`)
          .setTimestamp()
        message.channel.send(sug) 
      }
    }
  }