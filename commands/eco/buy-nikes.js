const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "buy-nike",
  aliases: [],
  usage: "buy-nike",
  description: "buy some nike",
  run: async (client, message, args, async) => {
let money = db.fetch(`money_${message.author.id}`)

const embed1 = new Discord.MessageEmbed()
.setTitle(`Error`)
.setColor("RED")
.setDescription(`**You do not have enough money!**`)

if (money < 500) return message.channel.send(embed1)

  db.add(`nike_${message.author.id}`,1)
  db.add(`money_${message.author.id}`,-500)



const embed2 = new Discord.MessageEmbed()
.setTitle(`Success`)
.setColor("GREEN")
.setDescription(`**You have just brought nike air max**`)
  await message.channel.send(embed2)



  }
}