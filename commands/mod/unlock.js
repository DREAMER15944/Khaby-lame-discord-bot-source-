const Discord = require("discord.js");

module.exports = {
  name: "unlock",
  aliases: [],
  usage: "unlock",
  description: "unlock a channel",
  run: async (client, message, args) => {


if (!client.lockit) client.lockit = [];
  if (!message.member.hasPermission("MANAGE_CHANNELS")) {                  const Perms = new Discord.MessageEmbed()
          .setColor(15158332)
          .setDescription('🚫 You Dont Have Permission To Do That! You Need The Permission **``Manage Channels``**.')
message.channel.send(Perms);
return;
  }


const done = new Discord.MessageEmbed()
.setTitle('🔓Unlocked🔓')
.setDescription('**Lockdown lifted! Enjoy talking while you still can:wink:**')
    message.channel.createOverwrite(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.send(done);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    })
  }






  }
