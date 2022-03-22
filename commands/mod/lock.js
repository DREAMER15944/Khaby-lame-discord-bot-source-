const Discord = require("discord.js");

module.exports = {
  name: "lock",
  aliases: ["lockdown"],
  usage: "lock",
  description: "lock a channel",
  run: async (client, message, args) => {



const done = new Discord.MessageEmbed()
.setTitle('🔒Locked🔒')
.setDescription(`**${message.author.username} just locked the channel down. Don't worry, Admins will soon open the chat again so be patient.**`)
  if (!client.lockit) client.lockit = [];
  if (!message.member.hasPermission("MANAGE_CHANNELS")) { 
                 const Perms = new Discord.MessageEmbed()
          .setColor(15158332)
          .setDescription('🚫 You Dont Have Permission To Do That! You Nedd The Permission **``Manage Channels``**.')
message.channel.send(Perms);
return;
  }

  message.channel.createOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    })
      message.channel.send(done);
  }






  }
