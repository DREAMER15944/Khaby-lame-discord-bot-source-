const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "store",
  aliases: [],
  usage: "store",
  description: "see the store",
  run: async (client, message, args) => {


const embed = new Discord.MessageEmbed()
.setTitle('Store')
.setDescription("``nike``\n``car``\n``house``")



message.channel.send(embed)


  }
}
