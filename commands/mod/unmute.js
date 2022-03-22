const Discord = require("discord.js");

module.exports = {
  name: "unmute",
  aliases: [],
  usage: "unmute <member>",
  description: "unmute a member",
  run: async (client, message, args) => {


const target = message.mentions.members.first();




if (message.member.hasPermission("MUTE_MEMBERS")) {



const NoMuteRoleHas = new Discord.MessageEmbed()
.setColor("RED")
.setDescription("⛔ The Person You Mentioned Is Not Muted!")






const NoTarget = new Discord.MessageEmbed()
.setColor("RED")
.setDescription("⛔ You Need To Mention A User!")



const MuteDone = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`✅ Member Has Been UnMuted!`)











const mutedRole = message.guild.roles.cache.find(
 (role) => role.name === '🔇 | Muted'
);













if (!target)
 return message.channel.send(NoTarget);




const DmMute = new Discord.MessageEmbed()
.setDescription(`**${target}, You Have Been UnMuted In ${message.guild.name}!**`)


target.roles.remove(mutedRole);
target.send(DmMute)
message.channel.send(MuteDone)

} else {
  
         const NoPerms = new Discord.MessageEmbed()
          .setColor("RED")
          .setDescription('⛔ You Do Not Have Permission To Do That! You Need The Permission **``Mute Members``**.')
  message.channel.send(NoPerms)
  return;
}





  }
}
