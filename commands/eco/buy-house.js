const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "buy-house",
  aliases: [],
  usage: "buy-house",
  description: "buy a house",
  run: async (client, message, args, async) => {
let money = db.fetch(`money_${message.author.id}`)

const embed1 = new Discord.MessageEmbed()
.setTitle(`Error`)
.setColor("RED")
.setDescription(`**You do not have enough money!**`)

if (money < 1000) return message.channel.send(embed1)

  db.add(`house_${message.author.id}`,1)
  db.add(`money_${message.author.id}`,-1000)



const embed2 = new Discord.MessageEmbed()
.setTitle(`Success`)
.setColor("GREEN")
.setDescription(`**You have just brought a house!**`)
  await message.channel.send(embed2)



  }
}