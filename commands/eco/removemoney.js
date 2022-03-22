const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "removemoney",
  aliases: ["rm"],
  usage: "rm <user>",
  description: "remove money",
  run: async (client, message, args) => {


let user = message.mentions.members.first() 


const embed2 = new Discord.MessageEmbed()
.setTitle(`Error`)
.setColor("RED")
.setDescription(`**Please Mention A User!**`)
if(!user) return message.channel.send(embed2);
const embed1 = new Discord.MessageEmbed()
.setTitle(`Success`)
.setColor("GREEN")
.setDescription(`**Removed 100 Off ${user}**`)

db.add(`money_${user.id}`,-100)
message.channel.send(embed1)







  }
}