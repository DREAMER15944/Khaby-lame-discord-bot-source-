const Discord = require("discord.js");

module.exports = {
  name: "mute",
  aliases: [],
  usage: "mute <member>",
  description: "mute a member",
  run: async (client, message, args) => {

const target = message.mentions.members.first();




if (message.member.hasPermission("MUTE_MEMBERS")) {



const NoMuteRoleHas = new Discord.MessageEmbed()
.setColor("RED")
.setDescription("⛔ The Person You Mentioned Is Not Muted!")




const NoMuteRole = new Discord.MessageEmbed()
.setColor("RED")
.setDescription("⛔ There Is No Mute Role In This Server")
.setFooter('I am creating you one now!')


const NoTarget = new Discord.MessageEmbed()
.setColor("RED")
.setDescription("⛔ You Need To Mention A User!")



const MuteDone = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`✅ Member Has Been Muted!`)











const mutedRole = message.guild.roles.cache.find(
 (role) => role.name === '🔇 | Muted'
);

if (!mutedRole) {
        try {
            muteRole = message.guild.roles.create({data:{
                name:"🔇 | Muted",
                color: "#f70404",
                permissions:[]
            }});
    
            message.guild.channels.cache.get(async (channel, id) => {
                await channel.createOverwrite(muteRole, {
                    SEND_MESSAGES: false,
                    MANAGE_MESSAGES: false,
                    READ_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch(e) {
            console.log(e.stack);
        }
    }









if (!mutedRole)
 return message.channel.send(NoMuteRole);






if (!target)
 return message.channel.send(NoTarget);




const DmMute = new Discord.MessageEmbed()
.setDescription(`**${target}, You Have Been Muted In ${message.guild.name}!**`)


target.roles.add(mutedRole);
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