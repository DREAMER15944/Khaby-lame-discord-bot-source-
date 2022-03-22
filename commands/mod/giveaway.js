const Discord = require("discord.js");
const ms = require('ms');



    const TimePeriod = new Discord.MessageEmbed()
          .setColor("RED")
          .setDescription('🚫 You did not use the correct time format! Make sure that the time ends in ``d`` | ``h`` | ``m``')

const NoTime = new Discord.MessageEmbed()
          .setColor("RED")
          .setDescription('🚫 You did not specify a time!')



const NotANumber = new Discord.MessageEmbed()
          .setColor("RED")
          .setDescription('🚫 That is not a number!')




    const NoChannel = new Discord.MessageEmbed()
          .setColor("RED")
          .setDescription('🚫 I can not find that channel!')


       const NoPrize = new Discord.MessageEmbed()
          .setColor("RED")
          .setDescription('🚫 No prize specified!')


  const Perms = new Discord.MessageEmbed()
          .setColor(15158332)
          .setDescription('🚫 You Dont Have Permission To Do That! You Need The Permission **``Manage Messages``**!')
module.exports = {
  name: "giveaway",
  aliases: ["ga"],
  usage: "giveaway",
  description: "create a giveaway",
  run: async (client, message, args) => {


      
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(Perms)

    if (!args[0]) return message.channel.send(NoTime);
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m")
    )


      return message.channel.send(TimePeriod);
       
    if (isNaN(args[0][0])) return message.channel.send(NotANumber);
    let channel = message.mentions.channels.first();
    if (!channel)
 
      return message.channel.send(NoChannel);
    let prize = args.slice(2).join(" ");

    if (!prize) return message.channel.send(NoPrize);
    message.channel.send(`*Giveaway created in ${channel}*`);
    let Embed = new Discord.MessageEmbed()
      .setTitle(`New giveaway!`)
      .setDescription(
        `The user ${message.author} is hosting a giveaway for the prize of **${prize}**`
      )
      .setTimestamp(Date.now() + ms(args[0]))
    let m = await channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        message.channel.send(`Reactions: ${m.reactions.cache.get("🎉").count}`);
        return message.channel.send(
          `Not enough people reacted for me to start draw a winner!`
        );
      }

      let winner = m.reactions.cache
        .get("🎉")
        .users.cache.filter((u) => !u.bot)
        .random();
      channel.send(
        `The winner of the giveaway for **${prize}** is ${winner}`
      );
    }, ms(args[0]));

  }
}