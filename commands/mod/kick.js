const Discord = require("discord.js");

module.exports = {
  name: "kick",
  aliases: [],
  usage: "kick <member>",
  description: "kick a member",
  run: async (client, message, args) => {




        if(!message.member.hasPermission('KICK_MEMBERS')) {

          const KickPerms = new Discord.MessageEmbed()
          .setColor(15158332)
          .setDescription('🚫 You Do Not Have Permission To Do That! You Need The Permission **``Kick Members``**.')




            message.channel.send(KickPerms);
            return;
        };





        
        let mentionMemberKick = message.mentions.members.first();
        
        if(!mentionMemberKick) {

          const Kickmention = new Discord.MessageEmbed()
          .setColor("RED")
          .setDescription('🚫 You Need To Mention A Member!')






            message.channel.send(Kickmention);
            return;
        }

        








        
        if(!mentionMemberKick.kickable) {

          const KickbotPerms = new Discord.MessageEmbed()
          .setColor("RED")
          .setDescription('🚫 I Do Not Have Permission To Kick That Member!')



            message.channel.send(KickbotPerms);
            return
        };






        
        mentionMemberKick.kick()
            .then(() => console.log(`Kicked ${mentionMemberKick.displayName}`))


            const KickWork = new Discord.MessageEmbed()
            .setDescription('✅ Member Kicked!')
            .setColor("GREEN")
            





            message.channel.send(KickWork)
            .catch(console.error);



  }
}