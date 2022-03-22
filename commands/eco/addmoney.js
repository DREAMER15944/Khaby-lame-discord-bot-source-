const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "addmoney",
  aliases: ["am"],
  usage: "amoney <user>",
  description: "add money",
  run: async (client, message, args) => {

let user = message.mentions.members.first() 


const embed2 = new Discord.MessageEmbed()
.setTitle(`Error`)
.setColor("RED")
.setDescription(`**🚫 Please Mention A User!**`)
if(!user) return message.channel.send(embed2);
const embed1 = new Discord.MessageEmbed()
.setTitle(`Success`)
.setColor("GREEN")
.setDescription(`**✅ Added 100 To ${user}**`)

db.add(`money_${user.id}`,100)
message.channel.send(embed1)








  }
}