const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "profile",
  aliases: [],
  usage: "profile <user>",
  description: "see a profile",
  run: async (client, message, args) => {

let user = message.mentions.members.first() 
const embed2 = new Discord.MessageEmbed()
.setTitle(`Error`)
.setColor("RED")
.setDescription(`**Please Mention A User!**`)
if(!user) return message.channel.send(embed2);
let bal = db.fetch(`money_${user.id}`)
let nike = db.fetch(`nike_${user.id}`)
let houses = db.fetch(`house_${user.id}`)



const embed = new Discord.MessageEmbed()
.setTitle(`${user}'s Profile`)
.setDescription(`**Balance: ${bal}**\n**Air Max: ${nike}**\n**Houses: ${houses}**`)



message.channel.send(embed)

  }
}