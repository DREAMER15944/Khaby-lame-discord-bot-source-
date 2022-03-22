const Discord = require("discord.js");

const moment = require('moment')

const perms = {
    ADMINISTRATOR: "Administrator",
    CREATE_INSTANT_INVITE: "Create Invite",
    KICK_MEMBERS: "Kick Members",
    BAN_MEMBERS: "Ban Members",
    MANAGE_CHANNELS: "Manage Channels",
    MANAGE_GUILD: "Manage Server",
    ADD_REACTIONS: "Add Reactions",
    VIEW_AUDIT_LOG: "View Audit Log",
    PRIORITY_SPEAKER: "Priority Speaker",
    STREAM: "Stream",
    VIEW_CHANNEL: "View Channels",
    SEND_MESSAGES: "Send Messages",
    SEND_TTS_MESSAGES: "Send TTS Messages",
    MANAGE_MESSAGES: "Manage Messages",
    EMBED_LINKS: "Embed Links",
    ATTACH_FILES: "Attach Files",
    READ_MESSAGE_HISTORY: "Read Message History",
    MENTION_EVERYONE: "Mention @everyone",
    USE_EXTERNAL_EMOJIS: "Use External Emojis",
    VIEW_GUILD_INSIGHTS: "View Guild Insights",
    CONNECT: "Voice Connect",
    SPEAK: "Voice Speak",
    MUTE_MEMBERS: "Mute Members",
    DEAFEN_MEMBERS: "Deafen Members",
    MOVE_MEMBERS: "Move Members",
    USE_VAD: "Use Voice Activity",
    CHANGE_NICKNAME: "Change Nickname",
    MANAGE_NICKNAMES: "Manage Nicknames",
    MANAGE_ROLES: "Manage Roles",
    MANAGE_WEBHOOKS: "Manage Webhooks",
    MANAGE_EMOJIS: "Manage Emojis"
};



module.exports = {
  name: "userinfo",
  aliases: ["ui"],
  usage: "userinfo",
  description: "gets users info",
  run: async (client, message, args) => {



let member = message.mentions.members.first();



if (!member) {
            const Mention = new Discord.MessageEmbed()
          .setColor("RED")
          .setDescription('🚫 You Need To Mention A Member!')
          message.channel.send(Mention)
          return;
};


  const permissions = (member.permissions.toArray().length)? member.permissions.toArray().map(perm => `\`${perms[perm]}\``).join(", ") : "*None*";



const bot = (member.user.bot)? "Yes" : "No";
        
const accountCreated = moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY");
        const joinedAt = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY");

const highestRole = member.roles.highest.id === message.guild.id ? "*None*" : member.roles.highest.name;


const embed = new Discord.MessageEmbed()
.setAuthor(member.user.tag)
.setFooter(`ID: ${member.user.id}`)
.addFields({


    name: "**Bot**",
                value: bot,
                inline: true
  
}, {
 
  name: "**Account Created On**",
                value: accountCreated
 

}, {


 

name: "**Joined Server On**",
                value: joinedAt



}, {

   name: "**Highest Role**",
                value: highestRole,
                inline: true
}, {

name: "**Permissions**",
                value: permissions




})

message.channel.send(embed)
  }
}
