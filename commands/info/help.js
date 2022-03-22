const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "help",
  aliases: [],
  usage: "help",
  description: "help me",
  run: async (client, message, args) => {




const embed = new Discord.MessageEmbed()
.setTitle('Help')
.setDescription('``balance`` | ``daily`` | ``help`` | ``work`` | ``addmoney`` | ``removemoney`` | ``toggle`` | ``store``| ``ping`` | ``ban``| ``kick``| ``lock``| ``unlock``| ``mute`` | ``unmute``| ``setprefix``| ``giveaway``| ``userinfo``| ``serverinfo``| ``clear``')

message.channel.send(embed)



  }
}