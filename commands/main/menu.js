const Discord = require("discord.js")

module.exports = {
  name: "menu",
  run: async (client, message, args, db, color, yes, no, dev) => {
    
    
//* ----------------------------- ~ AXAN $ ZICC ~ ----------------------------- *//
    
    
      let disabled = "<:X_:848429469688397854>"
    
        let rcl = db.get(`rolecreate_${message.guild.id}`)
        let rdl = db.get(`roledelete_${message.guild.id}`)
        let ccl = db.get(`channelcreate_${message.guild.id}`)
        let cdl = db.get(`channeldelete_${message.guild.id}`)
        let bl = db.get(`banlimit_${message.guild.id}`)
        let kl = db.get(`kicklimit_${message.guild.id}`)
        let logs = db.get(`logs_${message.guild.id}`)
        let punish = db.get(`punish_${message.guild.id}`)
        if (rcl === null) rcl = disabled
        if (rdl === null) rdl = disabled
        if (ccl === null) ccl = disabled
        if (cdl === null) cdl = disabled
        if (bl === null) bl = disabled
        if (kl === null) kl = disabled
        if (logs === null) logs = disabled
        if (logs !== null && logs !== disabled) { logs = client.channels.cache.get(logs)
        if (!logs) logs = disabled
      }
    
    
        let show = new Discord.MessageEmbed()
          .setAuthor("ANTI RAID MENU")
          .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
          .addField("Ban Limits", bl, true)
          .addField("Kick Limits", kl, true)
          .addField("Channel Create Limit", ccl, true)
          .addField("Channel Delete Limit", cdl, true)
          .addField("Role Create Limit", rcl, true)
          .addField("Role Delete Limit", rdl, true)
          .addField("Logs", logs.toString(), true)
          .addField("Punishment", punish, true)
          .addField("By", `${dev}`, true)
          .setFooter(dev)
          .setColor(color)
          .setTimestamp()
        return message.channel.send(show)
      }
    }